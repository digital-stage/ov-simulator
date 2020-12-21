import {useEffect, useState} from "react";
import ITeckosClient from "teckos-client/dist/ITeckosClient";
import {ClientDeviceEvents} from "../utils/types/SocketEvents";

const SoundCardSimulator = (props: {
    socket: ITeckosClient
}) => {
    const {socket} = props;
    const [soundCards, setSoundCards] = useState<string[]>();

    useEffect(() => {
        if( socket ) {
            socket.emit(ClientDeviceEvents.ADD_SOUND_CARD, {

            });
        }
    }, [socket, soundCards]);

    return (
        <div>
            <button onClick={() => {
                setSoundCards(prev => [...prev, "Soundcard " + (prev.length + 1)])
            }}>
                ADD SOUNDCARD
            </button>

        </div>
    )
};
export default SoundCardSimulator;
