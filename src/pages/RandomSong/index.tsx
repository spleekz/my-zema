import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { YourSong } from './YourSong'
import { ChooseFilters } from './ChooseFilters'

const RandomSongpageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const RandomSongPage: FC = observer((): JSX.Element => {
  const { TracksStore } = useStore()

  return (
    <RandomSongpageWrapper>
      {TracksStore.yourTrack ? <YourSong /> : <ChooseFilters />}
    </RandomSongpageWrapper>
  )
})
