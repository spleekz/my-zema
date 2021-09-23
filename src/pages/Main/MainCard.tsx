import React, { FC } from 'react'
import { Card, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface MainCardProps {
  children: string
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '240px',
    height: '370px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const MainCard: FC<MainCardProps> = ({ children }): JSX.Element => {
  const classes = useStyles()
  return (
    <Box>
      <Card className={classes.card} sx={{ backgroundColor: '#ffe7f9' }}>
        <Typography sx={{ fontSize: '1.7rem' }}>{children}</Typography>
      </Card>
    </Box>
  )
}
