import {ServerStageEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {CustomStageMember} from "../types/CustomStageMember";

export type CustomStageMemberAction =
    { type: ServerStageEvents.CUSTOM_STAGE_MEMBER_ADDED, payload: CustomStageMember }
    | { type: ServerStageEvents.CUSTOM_STAGE_MEMBER_CHANGED, payload: CustomStageMember }
    | { type: ServerStageEvents.CUSTOM_STAGE_MEMBER_REMOVED, payload: string };

export interface CustomStageMembers {
    byId: {
        [id: string]: CustomStageMember
    }
    byStageMember: {
        [stageMemberId: string]: string
    }
    allIds: string[]
}

function CustomStageMemberReducer(state: CustomStageMembers, action: CustomStageMemberAction): CustomStageMembers {
    switch (action.type) {
        case ServerStageEvents.CUSTOM_STAGE_MEMBER_ADDED: {
            const customStageMember: CustomStageMember = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [customStageMember._id]: customStageMember
                },
                byStageMember: {
                    ...state.byStageMember,
                    [customStageMember.stageMemberId]: customStageMember._id
                },
                allIds: upsert<string>(state.allIds, customStageMember._id)
            }
        }
        case ServerStageEvents.CUSTOM_STAGE_MEMBER_CHANGED: {
            const customStageMember: CustomStageMember = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [customStageMember._id]: {
                        ...state.byId[customStageMember._id],
                        ...customStageMember
                    }
                }
            }
        }
        case ServerStageEvents.CUSTOM_STAGE_MEMBER_REMOVED: {
            const removedId: string = action.payload;
            const customStageMember: CustomStageMember = state.byId[removedId];
            return {
                ...state,
                byId: omit(state.byId, removedId),
                byStageMember: omit(state.byStageMember, customStageMember.stageMemberId),
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error();
    }
}

export default CustomStageMemberReducer;
