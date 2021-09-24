import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { MainPage } from './pages/Main'
import { createStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router'
import { RandomSongPage } from './pages/RandomSong'
import { useStore } from './stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      body: {
        padding: 0,
        margin: 0,
        backgroundColor: '#f3f3f3',
        fontFamily: 'Alegreya Sans SC, sans-serif !important',
      },
      '#root': {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  })
)
const GlobalStyles = () => {
  useStyles()
  return null
}

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
