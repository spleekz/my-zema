import { makeAutoObservable } from 'mobx'
import { ITrack, TracksApi, IAlbum } from '../API/TracksApi'
import { addGenresForTracks } from '../utils/addGenresForTrack'

export type CategoryValues = 'mood' | 'tempo' | 'extra'
export type FilterValues =
  | 'happy'
  | 'sad'
  | 'lite'
  | 'energetic'
  | 'drama'
  | 'dream'
  | 'fast'
  | 'medium'
  | 'slow'
  | 'popular'
  | 'words'
  | 'melody'
  | 'makeCalm'
  | 'anyTempo'
  | 'anyMood'

interface IFilter {
  title: string
  value: FilterValues
}
interface IFilterCategory {
  name: string
  value: CategoryValues
  filters: Array<IFilter>
}
export interface ITrackWithGenres extends ITrack {
  genres: Array<FilterValues>
}
export interface ITracksStore {
  albums: Array<IAlbum>
  tracks: Array<ITrackWithGenres>
  filters: Array<IFilterCategory>
  setAlbums(albums: Array<IAlbum>): void
  setTracks(tracks: Array<ITrack>): void
  loadTracks(token: string): void
}

export class TracksStore implements ITracksStore {
  constructor() {
    makeAutoObservable(this)
  }

  albums: Array<IAlbum> = []
  tracks: Array<ITrackWithGenres> = []
  filters: Array<IFilterCategory> = [
    {
      name: 'Настроение',
      value: 'mood',
      filters: [
        { title: 'Весёлое', value: 'happy' },
        { title: 'Грустное', value: 'sad' },
        { title: 'Лёгкое', value: 'lite' },
        { title: 'Драматичное', value: 'drama' },
        { title: 'Энергичное', value: 'energetic' },
        { title: 'Мечтательное', value: 'dream' },
        { title: 'Любое', value: 'anyMood' },
      ],
    },
    {
      name: 'Темп',
      value: 'tempo',
      filters: [
        { title: 'Быстрый', value: 'fast' },
        { title: 'Умеренный', value: 'medium' },
        { title: 'Медленный', value: 'slow' },
        { title: 'Любой', value: 'anyTempo' },
      ],
    },
    {
      name: 'Дополнительно',
      value: 'extra',
      filters: [
        { title: 'Популярная', value: 'popular' },
        { title: 'Запоминающиеся слова', value: 'words' },
        { title: 'Красивая музка', value: 'melody' },
        { title: 'Успокаивает', value: 'makeCalm' },
      ],
    },
  ]

  setTracks(tracks: Array<ITrackWithGenres>): void {
    this.tracks = tracks
  }
  setAlbums(albums: Array<IAlbum>): void {
    this.albums = albums
  }
  loadTracks(token: string): void {
    TracksApi.loadAllAlbums(token)
    const accumAlbums: Array<IAlbum> = []
    const accumTracks: Array<ITrackWithGenres> = []
    TracksApi.loadAllAlbums(token).then((albums) => {
      let albumIndex = -1
      albums.forEach((album) => {
        albumIndex++
        accumAlbums.push(album)
        TracksApi.loadAlbumSongs(album, token).then((tracks) => {
          let trackIndex = -1
          tracks.forEach((track) => {
            trackIndex++
            const trackWithGenre: ITrackWithGenres = addGenresForTracks(track)
            accumTracks.push(trackWithGenre)
            if (trackIndex === tracks.length - 1 && albumIndex === albums.length - 1) {
              this.setTracks(accumTracks)
              this.setAlbums(accumAlbums)
            }
          })
        })
      })
    })
  }
}
