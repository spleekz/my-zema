import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Header } from './components/Header'
import { MainPage } from './pages/Main'
import { createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      body: {
        padding: 0,
        margin: 0,
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
      <MainPage />
    </>
  )
}
