import {createContext, useContext, useEffect, useReducer, useState} from "react";
import StageMemberReducer, {
    addStageMember,
    StageMembers
} from "../utils/reducers/StageMemberReducer";
import CustomStageMemberReducer, {CustomStageMembers} from "../utils/reducers/CustomStageMemberReducer";
import TrackReducer, {Tracks} from "../utils/reducers/TrackReducer";
import SoundCardReducer, {SoundCards} from "../utils/reducers/SoundCardReducer";
import RemoteTrackReducer, {RemoteTracks} from "../utils/reducers/RemoteTrackReducer";
import {ITeckosClient, TeckosClientWithJWT} from "teckos-client";
import {Device} from "../utils/types/Device";
import TrackPresetReducer, {TrackPresets} from "../utils/reducers/TrackPresetReducer";
import {ServerDeviceEvents, ServerGlobalEvents, ServerStageEvents} from "../utils/types/SocketEvents";
import {InitialStagePackage} from "../utils/types/InitialStagePackage";
import * as React from "react";
import {StageMemberOvTrack} from "../utils/types/StageMemberOvTrack";
import CustomRemoteTrackReducer, {CustomRemoteTracks} from "../utils/reducers/CustomRemoteTrackReducer";
import {CustomRemoteOvTrack} from "../utils/types/CustomRemoteOvTrack";
import {SoundCard} from "../utils/types/SoundCard";
import {Track} from "../utils/types/Track";
import {TrackPreset} from "../utils/types/TrackPreset";
import {StageMember} from "../utils/types/StageMember";
import {CustomStageMember} from "../utils/types/CustomStageMember";
import GroupReducer, {Groups} from "../utils/reducers/GroupReducer";
import CustomGroupReducer, {CustomGroups} from "../utils/reducers/CustomGroupReducer";
import {Group} from "../utils/types/Group";
import {CustomGroup} from "../utils/types/CustomGroup";

export const MAC = "12345678";

interface StageContext {
    socket?: ITeckosClient;
    device?: Device;
    soundCards: SoundCards;
    presets: TrackPresets;
    tracks: Tracks;

    groups: Groups;
    customGroups: CustomGroups;
    stageMembers: StageMembers;
    customStageMembers: CustomStageMembers;

    remoteTracks: RemoteTracks;
    customRemoteTracks: CustomRemoteTracks;
}

const InitialState: StageContext = {
    soundCards: {
        byId: {},
        allIds: []
    },
    presets: {
        byId: {},
        bySoundCard: {},
        allIds: []
    },
    tracks: {
        byId: {},
        bySoundCard: {},
        byPreset: {},
        allIds: []
    },
    groups: {
        byId: {},
        byStage: {},
        allIds: []
    },
    customGroups: {
        byId: {},
        byGroup: {},
        allIds: []
    },
    stageMembers: {
        byId: {},
        byGroup: {},
        allIds: []
    },
    customStageMembers: {
        byId: {},
        byStageMember: {},
        allIds: []
    },
    remoteTracks: {
        byId: {},
        byStageMember: {},
        allIds: []
    },
    customRemoteTracks: {
        byId: {},
        byRemoteTrack: {},
        allIds: []
    }
}

const Context = createContext<StageContext>(InitialState);

const StageProvider = (props: {
    children: React.ReactNode,
    token?: string
}) => {
    const {children, token} = props;
    const [socket, setSocket] = useState<ITeckosClient>();
    const [device, setDevice] = useState<Device>();

    // OV related entities
    const [soundCards, dispatchSoundCard] = useReducer(SoundCardReducer, InitialState.soundCards);
    const [presets, dispatchPresets] = useReducer(TrackPresetReducer, InitialState.presets);
    const [tracks, dispatchTracks] = useReducer(TrackReducer, InitialState.tracks);

    // Digital stage related entities
    const [groups, dispatchGroups] = useReducer(GroupReducer, InitialState.groups);
    const [customGroups, dispatchCustomGroups] = useReducer(CustomGroupReducer, InitialState.customGroups);
    const [stageMembers, dispatchStageMembers] = useReducer(StageMemberReducer, InitialState.stageMembers);
    const [customStageMembers, dispatchCustomStageMembers] = useReducer(CustomStageMemberReducer, InitialState.customStageMembers);
    const [remoteTracks, dispatchRemoteTracks] = useReducer(RemoteTrackReducer, InitialState.remoteTracks);
    const [customRemoteTracks, dispatchCustomRemoteTracks] = useReducer(CustomRemoteTrackReducer, InitialState.customRemoteTracks);

    useEffect(() => {
        // Got token, register self as device
        const initialDevice: Partial<Device> = {
            name: 'OV Simulator',
            canOv: true,
            canAudio: true,
            sendAudio: true,
            receiveAudio: true,
            mac: MAC,
            soundCardIds: [],
        };

        const nSocket = new TeckosClientWithJWT(
            process.env.NEXT_PUBLIC_API_URL,
            {
                reconnection: true,
                timeout: 1000,
            },
            token,
            {
                device: initialDevice,
            }
        );

        nSocket.on("connect", () => {
            console.log("connected!")
        });

        nSocket.on(ServerDeviceEvents.LOCAL_DEVICE_READY, (device: Device) => {
            setDevice(device);
        })
        nSocket.on(ServerDeviceEvents.DEVICE_CHANGED, (device: Device) => {
            setDevice(prev => {
               if( prev && prev._id === device._id ) {
                   return {
                       ...prev,
                       ...device
                   }
               }
               return prev;
            });
        })

        nSocket.on(ServerDeviceEvents.SOUND_CARD_ADDED, (payload: SoundCard) => dispatchSoundCard({
            type: ServerDeviceEvents.SOUND_CARD_ADDED,
            payload: payload
        }));
        nSocket.on(ServerDeviceEvents.SOUND_CARD_CHANGED, (payload: SoundCard) => dispatchSoundCard({
            type: ServerDeviceEvents.SOUND_CARD_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerDeviceEvents.SOUND_CARD_REMOVED, (payload: string) => dispatchSoundCard({
            type: ServerDeviceEvents.SOUND_CARD_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerDeviceEvents.TRACK_PRESET_ADDED, (payload: TrackPreset) => dispatchPresets({
            type: ServerDeviceEvents.TRACK_PRESET_ADDED,
            payload: payload
        }));
        nSocket.on(ServerDeviceEvents.TRACK_PRESET_CHANGED, (payload: TrackPreset) => dispatchPresets({
            type: ServerDeviceEvents.TRACK_PRESET_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerDeviceEvents.TRACK_PRESET_REMOVED, (payload: string) => dispatchPresets({
            type: ServerDeviceEvents.TRACK_PRESET_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerDeviceEvents.TRACK_ADDED, (payload: Track) => dispatchTracks({
            type: ServerDeviceEvents.TRACK_ADDED,
            payload: payload
        }));
        nSocket.on(ServerDeviceEvents.TRACK_CHANGED, (payload: Track) => dispatchTracks({
            type: ServerDeviceEvents.TRACK_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerDeviceEvents.TRACK_REMOVED, (payload: string) => dispatchTracks({
            type: ServerDeviceEvents.TRACK_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerStageEvents.GROUP_ADDED, (payload: Group) => dispatchGroups({
            type: ServerStageEvents.GROUP_ADDED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.GROUP_CHANGED, (payload: Group) => dispatchGroups({
            type: ServerStageEvents.GROUP_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.GROUP_REMOVED, (payload: string) => dispatchGroups({
            type: ServerStageEvents.GROUP_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerStageEvents.CUSTOM_GROUP_ADDED, (payload: CustomGroup) => dispatchCustomGroups({
            type: ServerStageEvents.CUSTOM_GROUP_ADDED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.CUSTOM_GROUP_CHANGED, (payload: CustomGroup) => dispatchCustomGroups({
            type: ServerStageEvents.CUSTOM_GROUP_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.CUSTOM_GROUP_REMOVED, (payload: string) => dispatchCustomGroups({
            type: ServerStageEvents.CUSTOM_GROUP_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerStageEvents.STAGE_MEMBER_ADDED, (payload: StageMember) => dispatchStageMembers({
            type: ServerStageEvents.STAGE_MEMBER_ADDED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.STAGE_MEMBER_CHANGED, (payload: StageMember) => dispatchStageMembers({
            type: ServerStageEvents.STAGE_MEMBER_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.STAGE_MEMBER_REMOVED, (payload: string) => dispatchStageMembers({
            type: ServerStageEvents.STAGE_MEMBER_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerStageEvents.CUSTOM_STAGE_MEMBER_ADDED, (payload: CustomStageMember) => dispatchCustomStageMembers({
            type: ServerStageEvents.CUSTOM_STAGE_MEMBER_ADDED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.CUSTOM_STAGE_MEMBER_CHANGED, (payload: CustomStageMember) => dispatchCustomStageMembers({
            type: ServerStageEvents.CUSTOM_STAGE_MEMBER_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.CUSTOM_STAGE_MEMBER_REMOVED, (payload: string) => dispatchCustomStageMembers({
            type: ServerStageEvents.CUSTOM_STAGE_MEMBER_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerStageEvents.STAGE_MEMBER_OV_ADDED, (payload: StageMemberOvTrack) => dispatchRemoteTracks({
            type: ServerStageEvents.STAGE_MEMBER_OV_ADDED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.STAGE_MEMBER_OV_CHANGED, (payload: StageMemberOvTrack) => dispatchRemoteTracks({
            type: ServerStageEvents.STAGE_MEMBER_OV_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.STAGE_MEMBER_OV_REMOVED, (payload: string) => dispatchRemoteTracks({
            type: ServerStageEvents.STAGE_MEMBER_OV_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_ADDED, (payload: CustomRemoteOvTrack) => dispatchCustomRemoteTracks({
            type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_ADDED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_CHANGED, (payload: CustomRemoteOvTrack) => dispatchCustomRemoteTracks({
            type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_CHANGED,
            payload: payload
        }));
        nSocket.on(ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_REMOVED, (payload: string) => dispatchCustomRemoteTracks({
            type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_REMOVED,
            payload: payload
        }));

        nSocket.on(ServerGlobalEvents.STAGE_JOINED, (payload: InitialStagePackage) => {
            // Handle package with many stage related entities
            payload.stageMembers.forEach(stageMember => dispatchStageMembers(addStageMember(stageMember)));
            payload.customStageMembers.forEach(customStageMember => dispatchCustomStageMembers({
                type: ServerStageEvents.CUSTOM_STAGE_MEMBER_ADDED,
                payload: customStageMember
            }));
            payload.ovTracks.forEach(ovTrack => dispatchRemoteTracks({
                type: ServerStageEvents.STAGE_MEMBER_OV_ADDED,
                payload: ovTrack
            }));
            payload.customOvTracks.forEach(customRemoteTrack => dispatchCustomRemoteTracks({
                type: ServerStageEvents.CUSTOM_STAGE_MEMBER_OV_ADDED,
                payload: customRemoteTrack
            }));
        });

        nSocket.connect();

        setSocket(nSocket);
    }, [token])

    return (
        <Context.Provider value={{
            socket,
            device,
            soundCards,
            presets,
            tracks,
            groups,
            customGroups,
            stageMembers,
            customStageMembers,
            remoteTracks,
            customRemoteTracks
        }}>
            {children}
        </Context.Provider>
    )
};

export {
    StageProvider
}

const useStage = (): StageContext => useContext<StageContext>(Context);
export default useStage;
