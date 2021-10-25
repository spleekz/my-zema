import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { MainPage } from './pages/Main'
import { Redirect, Route, Switch } from 'react-router'
import { RandomSongPage } from './pages/RandomSong'
import { useStore } from './stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { createGlobalStyle } from 'styled-components'
import { getHashValues } from './utils/getHashValues'

export interface IHashValues {
  access_token: string
  expires_in: string
  token_type: string
}

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
const SignSpotify = styled.a``

export const App: FC = observer((): JSX.Element => {
  const { TracksStore, AuthStore } = useStore()

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getHashValues(window.location.hash)
      AuthStore.setAuthValues(access_token, Number(expires_in), token_type)
    }
  }, [window.location.hash])

  useEffect(() => {
    if (AuthStore.access_token) {
      TracksStore.loadTracks(AuthStore.access_token)
    }
  }, [AuthStore.access_token])

  return (
    <>
      <SignSpotify href={AuthStore.authUrl}>Sign in with Spotify</SignSpotify>
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
