import {ServerStageEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {StageMemberOvTrack} from "../types/StageMemberOvTrack";

export type RemoteTrackAction =
    { type: ServerStageEvents.STAGE_MEMBER_OV_ADDED, payload: StageMemberOvTrack }
    | { type: ServerStageEvents.STAGE_MEMBER_OV_CHANGED, payload: StageMemberOvTrack }
    | { type: ServerStageEvents.STAGE_MEMBER_OV_REMOVED, payload: string };

export interface RemoteTracks {
    byId: {
        [id: string]: StageMemberOvTrack
    }
    byStageMember: {
        [stageMemberId: string]: string[]
    }
    allIds: string[]
}

function RemoteTrackReducer(state: RemoteTracks, action: RemoteTrackAction): RemoteTracks {
    switch (action.type) {
        case ServerStageEvents.STAGE_MEMBER_OV_ADDED: {
            const remoteTrack: StageMemberOvTrack = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [remoteTrack._id]: remoteTrack
                },
                byStageMember: {
                    ...state.byStageMember,
                    [remoteTrack.stageMemberId]: upsert<string>(state.byStageMember[remoteTrack.stageMemberId] || [], remoteTrack._id),
                },
                allIds: upsert<string>(state.allIds, remoteTrack._id)
            }
        }
        case ServerStageEvents.STAGE_MEMBER_OV_CHANGED: {
            const remoteTrack: StageMemberOvTrack = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [remoteTrack._id]: {
                        ...state.byId[remoteTrack._id],
                        ...remoteTrack
                    }
                }
            }
        }
        case ServerStageEvents.STAGE_MEMBER_OV_REMOVED: {
            const removedId: string = action.payload;
            const remoteTrack: StageMemberOvTrack = state.byId[removedId];
            return {
                ...state,
                byId: omit(state.byId, removedId),
                byStageMember: {
                    ...state.byStageMember,
                    [remoteTrack.stageMemberId]: state.byStageMember[remoteTrack.stageMemberId].filter(id => id !== removedId)
                },
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error();
    }
}

export default RemoteTrackReducer;
