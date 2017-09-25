import { Message } from './../../../shared/model/message';
import { Thread } from './../../../shared/model/thread';
import { Participant } from './../../../shared/model/participents';
export interface StoreData{
    participants: {[key:number]:Participant}
    threads:{[key:number]:Thread}
    messages: {[key:number]:Message}
}

export const INITIAL_STORE_STATE:StoreData = {
    participants: {},
    messages: {},
    threads: {}
}