import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const YourSongPageContainer = styled.div``

export const YourSong: FC = (): JSX.Element => {
  const { TracksStore } = useStore()

  return <YourSongPageContainer>{TracksStore.yourTrack.track}</YourSongPageContainer>
}
