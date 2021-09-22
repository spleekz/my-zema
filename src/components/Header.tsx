import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    padding: '10px',
    fontSize: '30px',
  },
})

export const Header: FC = (): JSX.Element => {
  const classes = useStyles()
  return <AppBar className={classes.header}>Zema</AppBar>
}
