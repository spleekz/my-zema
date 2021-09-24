import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { MainPage } from './pages/Main'
import { Redirect, Route, Switch } from 'react-router'
import { RandomSongPage } from './pages/RandomSong'
import { useStore } from './stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    background-color: #f3f3f3;
    font-family: 'Alegreya Sans SC', sans-serif;
    height: 100vh;
    box-sizing:border-box;
  };
  body > #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`

export const App = observer((): JSX.Element => {
  const { TracksStore } = useStore()

  useEffect(() => {
    TracksStore.loadTracks()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/randomsong' component={RandomSongPage} />
        <Redirect to='/' />
      </Switch>
    </>
  )
})
