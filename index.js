/*
import { NativeModules } from 'react-native';

const { RNReactNativeVoxeetConferencekit } = NativeModules;

export default RNReactNativeVoxeetConferencekit;*/

import { NativeModules, Platform } from 'react-native';
const { RNReactNativeVoxeetConferencekit } = NativeModules;

export type ConferenceUser = {
  externalId: string,
  name: string,
  avatar: string,
};

class VoxeetSDK {

  initialize(consumerKey, consumerSecret) {
    return RNReactNativeVoxeetConferencekit.initialize(consumerKey, consumerSecret);
  }

  openSession(userInfo: ConferenceUser): Promise {
    return RNReactNativeVoxeetConferencekit.openSession(userInfo);
  }

  disconnect() {
    return RNReactNativeVoxeetConferencekit.disconnect();
  }

  create(parameters) {
    return RNReactNativeVoxeetConferencekit.create(parameters);
  }

  join(conferenceId) {
    return RNReactNativeVoxeetConferencekit.join(conferenceId);
  }

  leave() {
    return RNReactNativeVoxeetConferencekit.leave();
  }

  invite(conferenceId, participants) {
    return RNReactNativeVoxeetConferencekit.invite(conferenceId, participants);
      const array = participants ? participants.map(e => e.json()) : null;
      return new Promise((resolve, reject) => {
          exec(resolve, reject, SERVICE, 'invite', [conferenceId, array]);
      });
  }

  sendBroadcastMessage(message) {
    return RNReactNativeVoxeetConferencekit.sendBroadcastMessage(message);
  }

  appearMaximized(activate: boolean) {
    RNReactNativeVoxeetConferencekit.appearMaximized(activate);
  }

  screenAutoLock(activate: boolean) {
    RNReactNativeVoxeetConferencekit.screenAutoLock(activate);
  }

  defaultBuiltInSpeaker(activate: boolean) {
    RNReactNativeVoxeetConferencekit.defaultBuiltInSpeaker(activate);
  }

  defaultVideo(enabled) {
    RNReactNativeVoxeetConferencekit.defaultVideo(enabled);
  }

  /*
   *  Android methods
   */

  screenAutoLock(activate: boolean) {
    RNReactNativeVoxeetConferencekit.screenAutoLock(activate);
  }

  isUserLoggedIn() {
    return RNReactNativeVoxeetConferencekit.isUserLoggedIn();
  }

  checkForAwaitingConference() {
    return RNReactNativeVoxeetConferencekit.checkForAwaitingConference();
  }

  /*
   *  Deprecated methods
   */
  startConference(conferenceId: string, participants: Array<ConferenceUser>): Promise {
    return RNReactNativeVoxeetConferencekit.startConference(conferenceId, participants);
  }

  stopConference() {
    return RNReactNativeVoxeetConferencekit.leave();
  }

  openSession(userInfo: ConferenceUser): Promise {
    return RNReactNativeVoxeetConferencekit.openSession(userInfo);
  }

  closeSession() {
    return RNReactNativeVoxeetConferencekit.closeSession();
  }

}

module.exports = new VoxeetSDK();