import { addGenresForTracks } from '../src/utils/addGenresForTrack'
import { ITrack } from '../src/API/TracksApi'
import { ITrackWithGenres } from '../src/stores/TracksStore'

let track: ITrack
let trackWithGenres: ITrackWithGenres

beforeEach(() => {
  track = {
    id: '5NHsnQXXOxC0Orkp58XLpg',
  } as ITrack
  trackWithGenres = addGenresForTracks(track)
})

test('genres array should be added for track', () => {
  expect(trackWithGenres.genres.length).toBeGreaterThan(0)
})

test('genres array should be correct', () => {
  expect(trackWithGenres.genres).toStrictEqual([
    'popular',
    'drama',
    'medium',
    'words',
    'makeCalm',
    'energetic',
  ])
})
