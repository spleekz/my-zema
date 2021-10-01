import { makeAutoObservable, runInAction } from 'mobx'
import { ITrack, TracksApi, IAlbum } from '../API/TracksApi'

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
  | 'live'

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
  tracks: Array<ITrack>
  filters: Array<IFilterCategory>
  loadTracks(): void
}

export class TracksStore implements ITracksStore {
  constructor() {
    makeAutoObservable(this)
  }

  albums: Array<IAlbum> = []
  tracks: Array<ITrack> = []
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
      ],
    },
    {
      name: 'Темп',
      value: 'tempo',
      filters: [
        { title: 'Быстрый', value: 'fast' },
        { title: 'Умеренный', value: 'medium' },
        { title: 'Медленный', value: 'slow' },
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
        { title: 'Live', value: 'live' },
      ],
    },
  ]

  loadTracks(): void {
    const accumAlbums: Array<IAlbum> = []
    const accumTracks: Array<ITrack> = []
    TracksApi.loadAllAlbums().then((albums) => {
      albums.forEach((album, albumIndex) => {
        accumAlbums.push(album)
        TracksApi.loadAlbumSongs(album.id_album).then((tracks) => {
          tracks.forEach((track, trackIndex) => {
            accumTracks.push(track)
            if (trackIndex === tracks.length - 1 && albumIndex === albums.length - 1) {
              runInAction(() => {
                this.albums = accumAlbums
                this.tracks = accumTracks
              })
            }
          })
        })
      })
    })
  }
}
