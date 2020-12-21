import {ServerDeviceEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';
import {TrackPreset} from "../types/TrackPreset";

export type TrackPresetAction =
    { type: ServerDeviceEvents.TRACK_PRESET_ADDED, payload: TrackPreset }
    | { type: ServerDeviceEvents.TRACK_PRESET_CHANGED, payload: TrackPreset }
    | { type: ServerDeviceEvents.TRACK_PRESET_REMOVED, payload: string };

export interface TrackPresets {
    byId: {
        [id: string]: TrackPreset
    }
    bySoundCard: {
        [soundCardId: string]: string[]
    }
    allIds: string[]
}

function TrackPresetReducer(state: TrackPresets, action: TrackPresetAction): TrackPresets {
    switch (action.type) {
        case ServerDeviceEvents.TRACK_PRESET_ADDED: {
            const trackPreset: TrackPreset = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [trackPreset._id]: trackPreset
                },
                bySoundCard: {
                    ...state.bySoundCard,
                    [trackPreset.soundCardId]: upsert<string>(state.bySoundCard[trackPreset.soundCardId] || [], trackPreset._id),
                },
                allIds: upsert<string>(state.allIds, trackPreset._id)
            }
        }
        case ServerDeviceEvents.TRACK_PRESET_CHANGED: {
            const trackPreset: TrackPreset = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [trackPreset._id]: {
                        ...state.byId[trackPreset._id],
                        ...trackPreset
                    }
                }
            }
        }
        case ServerDeviceEvents.TRACK_PRESET_REMOVED: {
            const removedId: string = action.payload;
            const trackPreset: TrackPreset = state.byId[removedId];
            if (!trackPreset)
                return state;
            return {
                ...state,
                byId: omit(state.byId, removedId),
                bySoundCard: {
                    ...state.bySoundCard,
                    [trackPreset.soundCardId]: state.bySoundCard[trackPreset.soundCardId].filter(id => id !== removedId)
                },
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }
        default:
            throw new Error();
    }
}

export default TrackPresetReducer;
