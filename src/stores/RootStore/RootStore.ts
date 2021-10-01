import { ITracksStore, TracksStore } from '../TracksStore'
import remotedev from 'mobx-remotedev'

export interface IRootStore {
  TracksStore: ITracksStore
}

export class RootStore {
  TracksStore = remotedev(new TracksStore(), { name: 'TracksStore' })
}
