import { ITracksStore, TracksStore } from '../TracksStore'
import remotedev from 'mobx-remotedev'
import { IAuthStore, AuthStore } from '../AuthStore'
import { IRandomTrackStore, RandomTrackStore } from '../RandomTrackStore'
import { AppStore, IAppStore } from '../AppStore';

export interface IRootStore {
  AppStore: IAppStore
  TracksStore: ITracksStore
  AuthStore: IAuthStore
  createRandomTrackStore(): IRandomTrackStore
}

export class RootStore implements IRootStore {
  AppStore = remotedev(new AppStore(), { name: 'AppStore' })
  TracksStore = remotedev(new TracksStore(), { name: 'TracksStore' })
  AuthStore = remotedev(new AuthStore(), { name: 'AuthStore' })
  createRandomTrackStore = (): IRandomTrackStore => {
    return remotedev(new RandomTrackStore(this.TracksStore), { name: 'RandomTrackStore' })
  }
}
