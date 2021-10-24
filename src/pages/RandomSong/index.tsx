import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore, RandomTrackStoreContext } from '../../stores/RootStore/RootStoreContext'
import { YourSong } from './YourSong'
import { AllFilters } from './AllFilters'
import { IRandomTrackStore } from '../../stores/RandomTrackStore'

const RandomSongpageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
`

export const RandomSongPage: FC = observer((): JSX.Element => {
  const { createRandomTrackStore } = useStore()
  const [store] = useState<IRandomTrackStore>(createRandomTrackStore)

  return (
    <RandomTrackStoreContext.Provider value={store}>
      <RandomSongpageWrapper>{store.yourTrack ? <YourSong /> : <AllFilters />}</RandomSongpageWrapper>
    </RandomTrackStoreContext.Provider>
  )
})
