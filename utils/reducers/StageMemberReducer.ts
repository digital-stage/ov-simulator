import {ServerStageEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {StageMember} from "../types/StageMember";

export type StageMemberAction =
    { type: ServerStageEvents.STAGE_MEMBER_ADDED, payload: StageMember }
    | { type: ServerStageEvents.STAGE_MEMBER_CHANGED, payload: StageMember }
    | { type: ServerStageEvents.STAGE_MEMBER_REMOVED, payload: string };

export const addStageMember = (stageMember: StageMember): { type: ServerStageEvents.STAGE_MEMBER_ADDED, payload: StageMember } => {
    return {
        type: ServerStageEvents.STAGE_MEMBER_ADDED,
        payload: stageMember,
    };
};
export const changeStageMember = (stageMember: StageMember): { type: ServerStageEvents.STAGE_MEMBER_CHANGED, payload: StageMember } => {
    return {
        type: ServerStageEvents.STAGE_MEMBER_CHANGED,
        payload: stageMember,
    };
};
export const removeStageMember = (id: string): { type: ServerStageEvents.STAGE_MEMBER_REMOVED, payload: string } => {
    return {
        type: ServerStageEvents.STAGE_MEMBER_REMOVED,
        payload: id,
    };
};

export interface StageMembers {
    byId: {
        [id: string]: StageMember
    },
    byGroup: {
        [groupId: string]: string[]
    },
    allIds: string[]
}

function StageMemberReducer(state: StageMembers, action: StageMemberAction): StageMembers {
    switch (action.type) {
        case ServerStageEvents.STAGE_MEMBER_ADDED: {
            const stageMember: StageMember = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [stageMember._id]: stageMember
                },
                byGroup: {
                    ...state.byGroup,
                    [stageMember.groupId]: upsert<string>(state.byGroup[stageMember.groupId] || [], stageMember._id),
                },
                allIds: upsert<string>(state.allIds, stageMember._id)
            }
        }
        case ServerStageEvents.STAGE_MEMBER_CHANGED: {
            const stageMember: StageMember = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [stageMember._id]: {
                        ...state.byId[stageMember._id],
                        ...stageMember
                    }
                }
            }
        }
        case ServerStageEvents.STAGE_MEMBER_REMOVED: {
            const removedId: string = action.payload;
            const stageMember: StageMember = state.byId[removedId];
            if (!stageMember)
                return state;
            return {
                ...state,
                byId: omit(state.byId, removedId),
                byGroup: {
                    ...state.byGroup,
                    [stageMember.groupId]: state.byGroup[stageMember.groupId].filter(id => id !== removedId)
                },
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error("Unsupported event: " + action);
    }
}

export default StageMemberReducer;
