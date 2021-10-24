import { ITracksStore, TracksStore } from '../TracksStore'
import remotedev from 'mobx-remotedev'
import { IAuthStore, AuthStore } from '../AuthStore'

export interface IRootStore {
  TracksStore: ITracksStore
  AuthStore: IAuthStore
}

export class RootStore implements IRootStore {
  TracksStore = remotedev(new TracksStore(), { name: 'TracksStore' })
  AuthStore = remotedev(new AuthStore(), { name: 'AuthStore' })
}
