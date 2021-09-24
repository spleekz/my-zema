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
    const accumTracks: Array<ITrack> = []
    TracksApi.loadAllAlbums().then((albums) => {
      albums.forEach((album, albumIndex) => {
        TracksApi.loadAlbumSongs(album.id_album).then((tracks) => {
          tracks.forEach((track, trackIndex) => {
            if (trackIndex === tracks.length - 1 && albumIndex === albums.length - 1) {
              runInAction(() => {
                this.tracks = accumTracks
              })
            }
            accumTracks.push(track)
          })
        })
      })
    })
  }
}
