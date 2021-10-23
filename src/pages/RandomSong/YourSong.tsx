import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const YourSongPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const YourSongContainer = styled.div`
  display: flex;
`
const YourSongImage = styled.div<{ imageSrc: string }>`
  width: 250px;
  height: 250px;
  background-image: ${(props) => `url(${props.imageSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  const { TracksStore } = useStore()

  return (
    <YourSongPageContainer>
      <YourSongContainer>
        <YourSongImage imageSrc={TracksStore.yourTrack.album_images[0].url} />
        <YourSongInfo>
          <YourSongName>{TracksStore.yourTrack.name}</YourSongName>
          <YourSongAlbumName>{TracksStore.yourTrack.album_name}</YourSongAlbumName>
        </YourSongInfo>
      </YourSongContainer>
    </YourSongPageContainer>
  )
}
