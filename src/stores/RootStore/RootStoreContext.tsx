import React, { createContext, FC, useContext } from 'react'
import { IRootStore, RootStore } from './RootStore'
import { IRandomTrackStore, RandomTrackStore } from '../RandomTrackStore'
import { TracksStore } from '../TracksStore'

interface RootStoreProviderProps {
  children: React.ReactNode
}

const RootStoreContext = createContext<IRootStore>(new RootStore())
export const RandomTrackStoreContext = createContext<IRandomTrackStore>(
  new RandomTrackStore(new TracksStore())
)

export const RootStoreProvider: FC<RootStoreProviderProps> = ({ children }): JSX.Element => {
  const rootStore = new RootStore()

  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
}

export const useStore = (): IRootStore => useContext(RootStoreContext)
