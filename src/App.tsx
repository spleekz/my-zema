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

const GlobalStyles = createGlobalStyle<{ bodyBgc: string; isBodyBgcDark: boolean }>`
  body {
    margin:0;
    padding:0;
    background:${(props) =>
      props.isBodyBgcDark
        ? `radial-gradient(circle at 59% 36%,#f3f3f3 0%,${props.bodyBgc} 144%)`
        : `radial-gradient(circle at 48% 53%,#f3f3f3 0%,${props.bodyBgc} 70%)`};
    font-family: 'Alegreya Sans SC', sans-serif;
    height: 100vh;
    box-sizing:border-box;
  };
  body > #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  };
  .rswp__active, ._InfoRSWP, .__mvqn38,._DevicesRSWP, .__omb1nz,._ActionsRSWP {
    display: none;
  };
  ._SliderRSWP, .__hpbuwm:hover {
    cursor: pointer;
  };
  .__1q9n52d {
    position: relative;
    right:121px;
    margin-top: 5px;
  }
  .__1q9n52d button {
    width:36px;
    height: 36px;
  }
`
const SignSpotify = styled.a``

export const App: FC = observer((): JSX.Element => {
  const { AppStore, TracksStore, AuthStore } = useStore()

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

  useEffect(() => {
    AppStore.setBodyBgcToDefault()
  }, [])

  return (
    <>
      <SignSpotify href={AuthStore.authUrl}>Sign in with Spotify</SignSpotify>
      <GlobalStyles bodyBgc={AppStore.bodyBgc} isBodyBgcDark={AppStore.isBodyBgcDark} />
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/randomsong' component={RandomSongPage} />
        <Redirect to='/' />
      </Switch>
    </>
  )
})
