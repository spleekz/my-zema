import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import { MainCard } from './MainCard'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '240px',
    height: '370px',
  },
  mainContainer: {
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export const MainPage: FC = (): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <MainCard>Случайная песня</MainCard>
      <MainCard>Тексты песен</MainCard>
    </Box>
  )
}
