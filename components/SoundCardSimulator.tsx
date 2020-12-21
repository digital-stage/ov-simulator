import {useCallback, useEffect, useRef, useState} from "react";
import ITeckosClient from "teckos-client/dist/ITeckosClient";
import {ClientDeviceEvents} from "../utils/types/SocketEvents";
import {Device} from "../utils/types/Device";
import {AddSoundCardPayload} from "../utils/types/SocketPayloads";
import {SoundCard} from "../utils/types/SoundCard";
import useStage from "../libs/useStage";

const AddSoundCardForm = () => {
    const {socket} = useStage();
    const nameRef = useRef<HTMLInputElement>();
    const numInputChannelsRef = useRef<HTMLInputElement>();
    const numOutputChannelsRef = useRef<HTMLInputElement>();

    const addSoundCard = useCallback(() => {
        if (nameRef.current && numOutputChannelsRef.current && numInputChannelsRef.current && socket) {
            const name = nameRef.current.value;
            const numInputChannels = parseInt(numInputChannelsRef.current.value);
            const numOutputChannels = parseInt(numOutputChannelsRef.current.value);
            const payload: AddSoundCardPayload = {
                initial: {
                    name: name,
                    driver: 'ALSA',
                    numInputChannels,
                    numOutputChannels,
                    sampleRate: 44100,
                    periodSize: 2,
                    numPeriods: 2
                }
            };
            socket.emit(ClientDeviceEvents.ADD_SOUND_CARD, payload);
        }
    }, [socket, nameRef, numInputChannelsRef, numOutputChannelsRef])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addSoundCard();
        }}>
            <input type="name" ref={nameRef} minLength={1} defaultValue="BrandModel20" required/>
            <input type="number" ref={numInputChannelsRef} min={0} max={8} defaultValue={8} required/>
            <input type="number" ref={numOutputChannelsRef} min={0} max={8} defaultValue={2} required/>
            <button type="submit">
                ADD SOUNDCARD
            </button>
        </form>
    )
};

const SoundCardSimulator = () => {
    const {device, socket, soundCards} = useStage();
    const [connectedSoundCardIds, setConnectedSoundCardIds] = useState<string[]>([]);

    useEffect(() => {
        if (device) {
            setConnectedSoundCardIds(device.soundCardIds);
        }
    }, [device]);

    const updateConnectedSoundCardIds = useCallback((soundCardIds: string[]) => {
        if (socket && device) {
            console.log(soundCardIds);
            socket.emit(ClientDeviceEvents.UPDATE_DEVICE, {
                _id: device._id,
                soundCardIds: soundCardIds
            });
        }
    }, [socket, device]);

    const removeSoundCard = useCallback((id: string) => {
        if (socket) {
            socket.emit(ClientDeviceEvents.REMOVE_SOUND_CARD, id);
        }
    }, [socket])

    return (
        <>
            <p>
                <AddSoundCardForm/>
            </p>
            <ul>
                {soundCards.allIds.map(id => soundCards.byId[id]).map(soundCard => (
                    <li>
                        <label htmlFor={soundCard._id}>{soundCard.name}</label>
                        <input
                            id={soundCard._id}
                            type="checkbox"
                            checked={connectedSoundCardIds.indexOf(soundCard._id) !== -1}
                            onChange={e => {
                                if (e.currentTarget.checked) {
                                    updateConnectedSoundCardIds([...connectedSoundCardIds, soundCard._id]);
                                } else {
                                    updateConnectedSoundCardIds(connectedSoundCardIds.filter(id => id !== soundCard._id));
                                }
                            }}
                        />
                        <button onClick={() => removeSoundCard(soundCard._id)}>
                            DEL
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
};
export default SoundCardSimulator;
