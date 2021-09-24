import React, { FC } from 'react'
import styled from 'styled-components'

const RandomSongpageWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const RandomSongPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  width: 1250px;
`
const SongFiltersBox = styled.div`
  padding: 20px;
  width: 73%;
  height: 700px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  margin-right: 8px;
`
const SongFiltersTitle = styled.div`
  font-size: 38px;
  font-weight: bold;
`
const AlbumsFiltersBox = styled.div`
  padding: 20px;
  width: 18%;
  height: 700px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  margin-left: 8px;
`

export const RandomSongPage: FC = (): JSX.Element => {
  return (
    <RandomSongpageWrapper>
      <RandomSongPageContainer>
        <SongFiltersBox>
          <SongFiltersTitle>Выберите, какую песню хотите услышать</SongFiltersTitle>
        </SongFiltersBox>
        <AlbumsFiltersBox></AlbumsFiltersBox>
      </RandomSongPageContainer>
    </RandomSongpageWrapper>
  )
}
