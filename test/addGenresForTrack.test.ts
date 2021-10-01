import { addGenresForTracks } from '../src/utils/addGenresForTrack'
import { ITrack } from '../src/API/TracksApi'

test('genres array should be added for track', () => {
  const track: ITrack = {
    id_track: 526707,
    track: 'Ариведерчи',
  }
  const trackWithGenre = addGenresForTracks(track)

  expect(trackWithGenre.genres.length).toBe(5)
})
