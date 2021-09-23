import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    padding: '6px 6px 6px 18px',
  },
})
export const Header: FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <AppBar
      position='relative'
      sx={{ backgroundColor: '#ffffff', color: '#666666', boxShadow: 'none' }}
      className={classes.header}
    >
      <Typography sx={{ fontSize: '2.5rem' }}>Zema</Typography>
    </AppBar>
  )
}
