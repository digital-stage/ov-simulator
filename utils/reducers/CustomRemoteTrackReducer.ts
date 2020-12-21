import {ServerStageEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {CustomRemoteOvTrack} from "../types/CustomRemoteOvTrack";

export type CustomStageMemberAction =
    { type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_ADDED, payload: CustomRemoteOvTrack }
    | { type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_CHANGED, payload: CustomRemoteOvTrack }
    | { type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_REMOVED, payload: string };

export interface CustomRemoteTracks {
    byId: {
        [id: string]: CustomRemoteOvTrack
    }
    byRemoteTrack: {
        [remoteTrackId: string]: string
    }
    allIds: string[]
}

function CustomRemoteTrackReducer(state: CustomRemoteTracks, action: CustomStageMemberAction): CustomRemoteTracks {
    switch (action.type) {
        case ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_ADDED: {
            const customRemoteTrack: CustomRemoteOvTrack = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [customRemoteTrack._id]: customRemoteTrack
                },
                byRemoteTrack: {
                    ...state.byRemoteTrack,
                    [customRemoteTrack.stageMemberOvTrackId]: customRemoteTrack._id
                },
                allIds: upsert<string>(state.allIds, customRemoteTrack._id)
            }
        }
        case ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_CHANGED: {
            const customRemoteTrack: CustomRemoteOvTrack = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [customRemoteTrack._id]: {
                        ...state.byId[customRemoteTrack._id],
                        ...customRemoteTrack
                    }
                }
            }
        }
        case ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_REMOVED: {
            const removedId: string = action.payload;
            const customRemoteTrack: CustomRemoteOvTrack = state.byId[removedId];
            return {
                ...state,
                byId: omit(state.byId, removedId),
                byRemoteTrack: omit(state.byRemoteTrack, customRemoteTrack.stageMemberOvTrackId),
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error();
    }
}

export default CustomRemoteTrackReducer;
