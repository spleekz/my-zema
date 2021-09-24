import axios from 'axios'

interface IAlbum {
  album: string
  id_album: number
}
export interface ITrack {
  id_track: number
  track: string
}
interface IAllAlbumsResponse {
  result: {
    albums: Array<IAlbum>
  }
}
interface IAlbumTracks {
  result: {
    tracks: Array<ITrack>
  }
}

interface ITracksApi {
  loadAllAlbums(): Promise<Array<IAlbum>>
  loadAlbumSongs(albumId: number): Promise<Array<ITrack>>
}

export const TracksApi: ITracksApi = {
  loadAllAlbums: () => {
    return axios
      .get<IAllAlbumsResponse>(
        `https://api.happi.dev/v1/music/artists/22976/albums?apikey=c1daf3EdSn0uqoCNEb0lJZC4oFEzSBeKnmze4rCYe34uev977TGPRjVn`
      )
      .then((res) => res.data.result.albums)
  },
  loadAlbumSongs: (albumId: number) => {
    return axios
      .get<IAlbumTracks>(
        `https://api.happi.dev/v1/music/artists/22976/albums/${albumId}/tracks?apikey=c1daf3EdSn0uqoCNEb0lJZC4oFEzSBeKnmze4rCYe34uev977TGPRjVn`
      )
      .then((res) => res.data.result.tracks)
  },
}
