import { makeAutoObservable, runInAction } from 'mobx'
import { ITrack, TracksApi } from '../API/TracksApi'

export interface ITracksStore {
  tracks: Array<ITrack>
  loadTracks(): void
}

export class TracksStore implements ITracksStore {
  constructor() {
    makeAutoObservable(this)
  }

  tracks: Array<ITrack> = []

  loadTracks(): void {
    TracksApi.loadAllAlbums().then((albums) => {
      albums.forEach((album) => {
        TracksApi.loadAlbumSongs(album.id_album).then((tracks) => {
          tracks.forEach((track) => {
            runInAction(() => {
              this.tracks.push(track)
            })
          })
        })
      })
    })
  }
}
