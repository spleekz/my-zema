import React, { FC, useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { makeFirstLetterCapital } from '../../utils/makeFirstLetterCapital'
import { RandomTrackStoreContext, useStore } from '../../stores/RootStore/RootStoreContext'
import { useColor } from 'color-thief-react'
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
  margin: 1px 0 0 8px;
`
const SongNaming = styled.div`
  margin-bottom: 30px;
`
const YourSongName = styled.div<{ explicit: boolean }>`
  display: flex;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  ${(props) =>
    props.explicit &&
    css`
      &:after {
        content: 'e';
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        position: relative;
        top: 4px;
        left: 0px;
        color: #eeeeee;
        background-color: #b1b1b1;
        font-size: 19px;
  font-weight: bold;
        text-transform: uppercase;
        margin: 0 0 0 5px;
        padding: 1px;
      }
    `}
`
const YourSongAlbumName = styled.div`
  margin: -1px 0 0 3px;
  font-size: 21px;
  color: #4b4b4bb3;
`
const PlayerContainer = styled.div`
  display: inline-block;
  width: 200px;
`

export const YourSong: FC = (): JSX.Element => {
  const { AppStore, AuthStore } = useStore()
  const RandomTrackStore = useContext(RandomTrackStoreContext)
  const bodyBgc = useColor(RandomTrackStore.yourTrack.album_images[2].url, 'hex', {
    crossOrigin: 'anonymous',
  }).data

  useEffect(() => {
    if (bodyBgc) {
      AppStore.setBodyBgc(bodyBgc)
    }
  }, [bodyBgc])

  return (
    <YourSongPageContainer>
      <YourSongContainer>
        <YourSongImage src={RandomTrackStore.yourTrack.album_images[0].url} />
        <YourSongInfo>
          <SongNaming>
            <YourSongName explicit={RandomTrackStore.yourTrack.explicit}>
            {RandomTrackStore.yourTrack.name.includes('.')
              ? RandomTrackStore.yourTrack.name
              : makeFirstLetterCapital(RandomTrackStore.yourTrack.name)}
          </YourSongName>
          <YourSongAlbumName>
            {makeFirstLetterCapital(RandomTrackStore.yourTrack.album_name)}
          </YourSongAlbumName>
          </SongNaming>
          <PlayerContainer>
          <SpotifyPlayer
            token={AuthStore.access_token!}
            uris={[RandomTrackStore.yourTrack.uri]}
            initialVolume={0.2}
              styles={{
                bgColor: 'transparent',
                sliderHeight: 8,
              }}
            autoPlay
          />
          </PlayerContainer>
        </YourSongInfo>
      </YourSongContainer>
    </YourSongPageContainer>
  )
}
