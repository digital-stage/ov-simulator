import {SoundCard} from "../utils/types/SoundCard";
import useStage from "../libs/useStage";
import {useCallback} from "react";
import upsert from "../utils/upsert";
import {ClientDeviceEvents} from "../utils/types/SocketEvents";
import {AddTrackPresetPayload, ChangeTrackPresetPayload} from "../utils/types/SocketPayloads";
import * as React from "react";

const ChannelActivator = (props: {
    numChannels: number;
    channels: number[];
    onChange: (channels: number[]) => void;
}) => {
    const {numChannels, channels, onChange} = props;
    const {socket} = useStage();

    const enableChannel = useCallback((channelId: number) => {
        onChange(upsert(channels, channelId));
    }, [channels]);

    const disableChannel = useCallback((channelId: number) => {
        onChange(channels.filter(id => id !== channelId));
    }, [channels]);

    return (
        <>
            {Array.from(Array(numChannels).keys()).map(channelId => (
                <>
                    <input
                        id={"input-" + channelId}
                        type="checkbox"
                        value={channelId}
                        checked={channels.indexOf(channelId) !== -1}
                        onChange={e => {
                            if (e.currentTarget.checked) {
                                enableChannel(channelId);
                            } else {
                                disableChannel(channelId);
                            }
                        }}
                    />
                    <label htmlFor={"input-" + channelId}>{channelId + 1}</label>
                </>
            ))}
        </>
    )
};

const PresetEditor = (props: {
    soundCard: SoundCard
}) => {
    const {soundCard} = props;
    const {socket, presets} = useStage();

    return (
        <div>
            <h3>{soundCard.name}</h3>
            <ul>
                <li>
                    {soundCard.numInputChannels} input channels
                </li>
                <li>
                    {soundCard.numOutputChannels} output channels
                </li>
                <li>
                    {soundCard.sampleRate} Hz sample rate
                </li>
            </ul>
            <ul>
                <li>
                    Presets:
                    {presets.bySoundCard[soundCard._id] && presets.bySoundCard[soundCard._id].map(id => presets.byId[id]).map(preset => (
                        <div style={{
                            border: '1px solid black'
                        }}>
                            <h5 style={{
                                margin: 0
                            }}>
                                {preset.name}
                            </h5>
                            <p style={{
                                margin: 0
                            }}>
                                Input:
                                <ChannelActivator
                                    numChannels={soundCard.numInputChannels}
                                    channels={preset.inputChannels}
                                    onChange={channels => {
                                        socket.emit(ClientDeviceEvents.CHANGE_TRACK_PRESET, {
                                            id: preset._id,
                                            update: {
                                                inputChannels: channels
                                            }
                                        } as ChangeTrackPresetPayload)
                                    }}
                                />
                            </p>
                            <p style={{
                                margin: 0
                            }}>
                                Output:
                                <ChannelActivator
                                    numChannels={soundCard.numOutputChannels}
                                    channels={preset.outputChannels}
                                    onChange={channels => {
                                        socket.emit(ClientDeviceEvents.CHANGE_TRACK_PRESET, {
                                            id: preset._id,
                                            update: {
                                                outputChannels: channels
                                            }
                                        } as ChangeTrackPresetPayload)
                                    }}
                                />
                            </p>
                            <div style={{
                                textAlign: 'right'
                            }}>
                                <button
                                    disabled={preset.name === "Default"}
                                    onClick={() => {
                                        socket.emit(ClientDeviceEvents.REMOVE_TRACK_PRESET, preset._id);
                                    }}
                                >Remove Preset</button>
                            </div>
                        </div>
                    ))}
                </li>
                <button
                    onClick={() => {
                        socket.emit(ClientDeviceEvents.ADD_TRACK_PRESET, {
                            name: 'Another preset',
                            soundCardId: soundCard._id,
                            inputChannels: [],
                            outputChannels: []
                        } as AddTrackPresetPayload)
                    }}

                >Add Preset</button>
            </ul>
        </div>
    )
};
export default PresetEditor;
