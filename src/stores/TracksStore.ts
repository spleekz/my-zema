import { makeAutoObservable, runInAction } from 'mobx'
import { ITrack, TracksApi } from '../API/TracksApi'

type CategoryValues = 'mood' | 'tempo' | 'extra'
export type FilterValues =
  | 'happy'
  | 'sad'
  | 'calm'
  | 'aggressive'
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
  checked: boolean
}
interface IFilterCategory {
  name: string
  value: CategoryValues
  filters: Array<IFilter>
}
export interface ITracksStore {
  tracks: Array<ITrack>
  filters: Array<IFilterCategory>
  loadTracks(): void
}

export class TracksStore implements ITracksStore {
  constructor() {
    makeAutoObservable(this)
  }

  tracks: Array<ITrack> = []
  filters: Array<IFilterCategory> = [
    {
      name: 'Настроение',
      value: 'mood',
      filters: [
        { title: 'Весёлое', value: 'happy', checked: false },
        { title: 'Грустное', value: 'sad', checked: false },
        { title: 'Спокойное', value: 'calm', checked: false },
        { title: 'Агрессивное', value: 'aggressive', checked: false },
        { title: 'Мечтательное', value: 'dream', checked: false },
      ],
    },
    {
      name: 'Темп',
      value: 'tempo',
      filters: [
        { title: 'Быстрый', value: 'fast', checked: false },
        { title: 'Умеренный', value: 'medium', checked: false },
        { title: 'Медленный', value: 'slow', checked: false },
      ],
    },
    {
      name: 'Дополнительно',
      value: 'extra',
      filters: [
        { title: 'Популярная', value: 'popular', checked: false },
        { title: 'Запоминающиеся слова', value: 'words', checked: false },
        { title: 'Красивая музка', value: 'melody', checked: false },
        { title: 'Успокаивает', value: 'makeCalm', checked: false },
        { title: 'Live', value: 'live', checked: false },
      ],
    },
  ]

  loadTracks(): void {
    const accumTracks: Array<ITrack> = []
    TracksApi.loadAllAlbums().then((albums) => {
      albums.forEach((album, albumIndex) => {
        TracksApi.loadAlbumSongs(album.id_album).then((tracks) => {
          tracks.forEach((track, trackIndex) => {
            accumTracks.push(track)
            if (trackIndex === tracks.length - 1 && albumIndex === albums.length - 1) {
              runInAction(() => {
                this.tracks = accumTracks
              })
            }
          })
        })
      })
    })
  }
}
