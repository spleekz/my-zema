import { makeAutoObservable } from 'mobx'
import { FilterValues, ITrackWithGenres, ITracksStore } from './TracksStore'
import { arrayIncludes } from '../utils/arrayIncludes'
import { getRandom } from '../utils/getRandom'

export interface IRandomTrackStore {
  TracksStore: ITracksStore
  allowedTracks: Array<ITrackWithGenres>
  yourTrack: ITrackWithGenres
  updateAllowedTracks(track: ITrackWithGenres): void
  getAllowedTracks(filters: Array<FilterValues>, albums: Array<string>): void
}

export class RandomTrackStore implements IRandomTrackStore {
  TracksStore: ITracksStore

  constructor(TracksStore: ITracksStore) {
    this.TracksStore = TracksStore
    makeAutoObservable(this)
  }

  allowedTracks: Array<ITrackWithGenres> = []

  get yourTrack(): ITrackWithGenres {
    const randomIndex = getRandom(0, this.allowedTracks.length - 1)
    return this.allowedTracks[randomIndex]
  }

  updateAllowedTracks(track: ITrackWithGenres): void {
    this.allowedTracks.push(track)
  }
  getAllowedTracks(filters: Array<FilterValues>, albums: Array<string>): void {
    this.TracksStore.tracks.forEach((track) => {
      if (
        arrayIncludes(track.genres, filters) &&
        (albums.length ? albums.some((al) => al === track.album_id) : true)
      ) {
        this.updateAllowedTracks(track)
      }
    })
  }
}
