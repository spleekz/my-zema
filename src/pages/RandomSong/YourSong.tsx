import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { makeFirstLetterCapital } from '../../utils/makeFirstLetterCapital'
import { RandomTrackStoreContext, useStore } from '../../stores/RootStore/RootStoreContext'
import SpotifyPlayer from 'react-spotify-web-playback'

const YourSongPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const YourSongContainer = styled.div`
  display: flex;
`
const YourSongImage = styled.img`
  width: 400px;
  height: 400px;
  pointer-events: none;
`
const YourSongInfo = styled.div`
  margin: 12px 0 0 8px;
`
const YourSongName = styled.div`
  font-size: 40px;
  font-weight: bold;
`
const YourSongAlbumName = styled.div`
  margin: -1px 0 0 2px;
  font-size: 19px;
  color: #4b4b4bb3;
`

export const YourSong: FC = (): JSX.Element => {
  const { AuthStore } = useStore()
  const RandomTrackStore = useContext(RandomTrackStoreContext)

  return (
    <YourSongPageContainer>
      <YourSongContainer>
        <YourSongImage src={RandomTrackStore.yourTrack.album_images[0].url} />
        <YourSongInfo>
          <YourSongName>
            {RandomTrackStore.yourTrack.name.includes('.')
              ? RandomTrackStore.yourTrack.name
              : makeFirstLetterCapital(RandomTrackStore.yourTrack.name)}
          </YourSongName>
          <YourSongAlbumName>
            {makeFirstLetterCapital(RandomTrackStore.yourTrack.album_name)}
          </YourSongAlbumName>
        </YourSongInfo>
      </YourSongContainer>
      <SpotifyPlayer token={AuthStore.access_token!} uris={[RandomTrackStore.yourTrack.uri]} />
    </YourSongPageContainer>
  )
}
