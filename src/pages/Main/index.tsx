import { Card, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '240px',
    height: '370px',
    padding: '15px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  mainContainer: {
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export const MainPage: FC = (): JSX.Element => {
  const history = useHistory()

  const classes = useStyles()

  return (
    <Box className={classes.mainContainer}>
      <Box onClick={() => history.push('/randomsong')}>
        <Card className={classes.card} sx={{ backgroundColor: '#ffffff', borderRadius: '7px' }}>
          <Typography sx={{ fontSize: '1.7rem', color: '#666666 ' }}>Случайная песня</Typography>
        </Card>
      </Box>
      <Box>
        <Card className={classes.card} sx={{ backgroundColor: '#ffffff', borderRadius: '7px' }}>
          <Typography sx={{ fontSize: '1.7rem', color: '#666666 ' }}>Тексты песен</Typography>
        </Card>
      </Box>
    </Box>
  )
}
