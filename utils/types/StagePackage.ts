import {StageMember} from "./StageMember";
import {CustomGroup} from "./CustomGroup";
import {CustomStageMember} from "./CustomStageMember";
import {Group} from "./Group";
import {StageMemberOvTrack} from "./StageMemberOvTrack";
import {CustomRemoteOvTrack} from "./CustomRemoteOvTrack";

export interface StagePackage {
    //users: User[];

    // stage?: Stage;
    groups?: Group[];
    stageMembers: StageMember[];
    customGroups: CustomGroup[];
    customStageMembers: CustomStageMember[];
    //videoProducers: RemoteVideoProducer[];
    //audioProducers: RemoteAudioProducer[];
    //customAudioProducers: CustomRemoteAudioProducer[];
    ovTracks: StageMemberOvTrack[];
    customOvTracks: CustomRemoteOvTrack[];
}

