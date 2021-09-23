import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    padding: '6px',
  },
})
export const Header: FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <AppBar position='relative' sx={{ backgroundColor: '#c0e8ff' }} className={classes.header}>
      <Typography sx={{ fontSize: '2.5rem' }}>Zema</Typography>
    </AppBar>
  )
}
