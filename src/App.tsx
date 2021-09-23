import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Header } from './components/Header'
import { MainPage } from './pages/Main'
import { createStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router'
import { RandomSongPage } from './pages/RandomSong'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      body: {
        padding: 0,
        margin: 0,
        backgroundColor: '#95A3B3',
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

export const App = (): JSX.Element => {
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
}
