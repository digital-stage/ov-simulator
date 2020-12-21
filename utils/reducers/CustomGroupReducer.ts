import {ServerStageEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {CustomGroup} from "../types/CustomGroup";

export type CustomGroupAction =
    { type: ServerStageEvents.CUSTOM_GROUP_ADDED, payload: CustomGroup }
    | { type: ServerStageEvents.CUSTOM_GROUP_CHANGED, payload: CustomGroup }
    | { type: ServerStageEvents.CUSTOM_GROUP_REMOVED, payload: string };

export interface CustomGroups {
    byId: {
        [id: string]: CustomGroup
    },
    byGroup: {
        [groupId: string]: string
    },
    allIds: string[]
}

function CustomGroupReducer(state: CustomGroups, action: CustomGroupAction): CustomGroups {
    switch (action.type) {
        case ServerStageEvents.CUSTOM_GROUP_ADDED: {
            const customGroup: CustomGroup = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [customGroup._id]: customGroup
                },
                byGroup: {
                    ...state.byGroup,
                    [customGroup.stageId]: customGroup._id
                },
                allIds: upsert<string>(state.allIds, customGroup._id)
            }
        }
        case ServerStageEvents.CUSTOM_GROUP_CHANGED: {
            const customGroup: CustomGroup = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [customGroup._id]: {
                        ...state.byId[customGroup._id],
                        ...customGroup
                    }
                }
            }
        }
        case ServerStageEvents.CUSTOM_GROUP_REMOVED: {
            const removedId: string = action.payload;
            const customGroup: CustomGroup = state.byId[removedId];
            if (!customGroup)
                return state;
            return {
                ...state,
                byId: omit(state.byId, removedId),
                byGroup: omit(state.byGroup, customGroup.groupId),
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error("Unsupported event: " + action);
    }
}

export default CustomGroupReducer;
