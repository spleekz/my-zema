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
const YourSongImage = styled.img``
const YourSongInfo = styled.div`
  margin: 12px 0 0 8px;
`
const YourSongName = styled.div`
  font-size: 40px;
  font-weight: bold;
`
const YourSongAlbumName = styled.div`
  margin: -1px 0 0 2px;
  color: #4b4b4bb3;
`

export const YourSong: FC = (): JSX.Element => {
  const { TracksStore } = useStore()

  return (
    <YourSongPageContainer>
      <YourSongContainer>
        <YourSongImage src={TracksStore.yourTrack.albumImage} />
        <YourSongInfo>
          <YourSongName>{TracksStore.yourTrack.track}</YourSongName>
          <YourSongAlbumName>{TracksStore.yourTrack.albumName}</YourSongAlbumName>
        </YourSongInfo>
      </YourSongContainer>
    </YourSongPageContainer>
  )
}
