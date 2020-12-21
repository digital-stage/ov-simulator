import {SoundCard} from "../types/SoundCard";
import {ServerDeviceEvents} from "../types/SocketEvents";
import upsert from "../upsert";
import omit from 'lodash/omit';

export type SoundCardAction =
    {type: ServerDeviceEvents.SOUND_CARD_ADDED, payload: SoundCard}
    | {type: ServerDeviceEvents.SOUND_CARD_CHANGED, payload: SoundCard}
    | {type: ServerDeviceEvents.SOUND_CARD_REMOVED, payload: string};

export interface SoundCards {
    byId: {
        [id: string]: SoundCard
    },
    allIds: string[]
}

function SoundCardReducer(state: SoundCards, action: SoundCardAction): SoundCards {
    switch (action.type) {
        case ServerDeviceEvents.SOUND_CARD_ADDED: {
            const soundCard: SoundCard = action.payload;
            return {
                byId: {
                    ...state.byId,
                    [soundCard._id]: soundCard
                },
                allIds: upsert<string>(state.allIds, soundCard._id)
            }
        }
        case ServerDeviceEvents.SOUND_CARD_CHANGED: {
            const soundCard: SoundCard = action.payload;

            return {
                ...state,
                byId: {
                    ...state.byId,
                    [soundCard._id]: {
                        ...state.byId[soundCard._id],
                        ...soundCard
                    }
                }
            }
        }
        case ServerDeviceEvents.SOUND_CARD_REMOVED: {
            const removedId: string = action.payload;
            return {
                ...state,
                byId: omit(state.byId, removedId),
                allIds: state.allIds.filter(id => id !== removedId)
            }
        }

        default:
            throw new Error();
    }
}
export default SoundCardReducer;
