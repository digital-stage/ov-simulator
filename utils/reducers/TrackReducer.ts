import {ServerDeviceEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {TrackPreset} from "../types/TrackPreset";
import {Track} from "../types/Track";

export type TrackAction =
    { type: ServerDeviceEvents.TRACK_ADDED, payload: Track }
    | { type: ServerDeviceEvents.TRACK_CHANGED, payload: Track }
    | { type: ServerDeviceEvents.TRACK_REMOVED, payload: string };

export interface Tracks {
    byId: {
        [id: string]: Track
    }
    bySoundCard: {
        [soundCardId: string]: string[]
    },
    byPreset: {
        [trackPresetId: string]: string[]
    }
    allIds: string[]
}

function TrackReducer(state: Tracks, action: TrackAction): Tracks {
    switch (action.type) {
        case ServerDeviceEvents.TRACK_ADDED: {
            const track: Track = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [track._id]: track
                },
                bySoundCard: {
                    ...state.bySoundCard,
                    [track.soundCardId]: upsert<string>(state.bySoundCard[track.soundCardId] || [], track._id),
                },
                byPreset: {
                    ...state.byPreset,
                    [track.trackPresetId]: upsert<string>(state.byPreset[track.trackPresetId] || [], track._id),
                },
                allIds: upsert<string>(state.allIds, track._id)
            }
        }
        case ServerDeviceEvents.TRACK_CHANGED: {
            const track: Track = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [track._id]: {
                        ...state.byId[track._id],
                        ...track
                    }
                }
            }
        }
        case ServerDeviceEvents.TRACK_REMOVED: {
            const removedId: string = action.payload;
            const track: Track = state.byId[removedId];
            return {
                ...state,
                byId: omit(state.byId, removedId),
                bySoundCard: {
                    ...state.bySoundCard,
                    [track.soundCardId]: state.bySoundCard[track.soundCardId].filter(id => id !== removedId)
                },
                byPreset: {
                    ...state.byPreset,
                    [track.trackPresetId]: state.byPreset[track.trackPresetId].filter(id => id !== removedId)
                },
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error();
    }
}

export default TrackReducer;
