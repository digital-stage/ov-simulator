
import {ServerStageEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {Group} from "../types/Group";

export type GroupAction =
    { type: ServerStageEvents.GROUP_ADDED, payload: Group }
    | { type: ServerStageEvents.GROUP_CHANGED, payload: Group }
    | { type: ServerStageEvents.GROUP_REMOVED, payload: string };

export interface Groups {
    byId: {
        [id: string]: Group
    },
    byStage: {
        [stageId: string]: string[]
    },
    allIds: string[]
}

function GroupReducer(state: Groups, action: GroupAction): Groups {
    switch (action.type) {
        case ServerStageEvents.GROUP_ADDED: {
            const group: Group = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [group._id]: group
                },
                byStage: {
                    ...state.byStage,
                    [group.stageId]: upsert<string>(state.byStage[group.stageId] || [], group._id),
                },
                allIds: upsert<string>(state.allIds, group._id)
            }
        }
        case ServerStageEvents.GROUP_CHANGED: {
            const group: Group = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [group._id]: {
                        ...state.byId[group._id],
                        ...group
                    }
                }
            }
        }
        case ServerStageEvents.GROUP_REMOVED: {
            const removedId: string = action.payload;
            const group: Group = state.byId[removedId];
            if (!group)
                return state;
            return {
                ...state,
                byId: omit(state.byId, removedId),
                byStage: {
                    ...state.byStage,
                    [group.stageId]: state.byStage[group.stageId].filter(id => id !== removedId)
                },
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error("Unsupported event: " + action);
    }
}

export default GroupReducer;
