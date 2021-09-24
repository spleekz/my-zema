import { ITracksStore, TracksStore } from '../TracksStore'

export interface IRootStore {
  TracksStore: ITracksStore
}

export class RootStore {
  TracksStore = new TracksStore()
}
