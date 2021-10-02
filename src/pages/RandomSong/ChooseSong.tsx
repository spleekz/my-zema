import React, { FC } from 'react'
import styled from 'styled-components'
import { TrackFilters } from './TrackFilters'

const ChooseSongPageContainer = styled.div`
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
const Divider = styled.hr`
  margin: 2px;
  border-color: rgba(0, 0, 0, 0.12);
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
const FiltersContainer = styled.div``

export const ChooseSong: FC = (): JSX.Element => {
  return (
    <ChooseSongPageContainer>
      <SongFiltersBox>
        <SongFiltersTitle>Выберите, какую песню хотите услышать</SongFiltersTitle>
        <Divider />
        <FiltersContainer>
          <TrackFilters />
        </FiltersContainer>
      </SongFiltersBox>
      <AlbumsFiltersBox></AlbumsFiltersBox>
    </ChooseSongPageContainer>
  )
}
