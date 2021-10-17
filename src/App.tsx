import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Header } from './components/Header'
import { MainPage } from './pages/Main'
import { Redirect, Route, Switch } from 'react-router'
import { RandomSongPage } from './pages/RandomSong'
import { useStore } from './stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { createGlobalStyle } from 'styled-components'

interface IHashValues {
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
  const { TracksStore } = useStore()
  const clientId = 'f70e10b60ab646a19c33dd8e3e1d1b72'

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000`

  const getHashValues = (hash: string): IHashValues => {
    const hashString = hash.substring(1)
    const hashValuesArray = hashString.split('&')
    const hashValues: IHashValues = hashValuesArray.reduce((acc: IHashValues, current) => {
      const keyAndValue = current.split('=')
      const key = keyAndValue[0] as keyof IHashValues
      const value = keyAndValue[1]
      acc[key] = value
      return acc
    }, {} as IHashValues)

    return hashValues
  }

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getHashValues(window.location.hash)
      axios
        .get(`https://api.spotify.com/v1/artists/6oO3QiWdVj5FZQwbdRtsRh`, {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        })
        .then((res) => console.log(res.data))
    }
  }, [window.location.hash])

  useEffect(() => {
    // TracksStore.loadTracks()
  }, [])

  return (
    <>
      <SignSpotify href={authUrl}>Sign in with Spotify</SignSpotify>
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
