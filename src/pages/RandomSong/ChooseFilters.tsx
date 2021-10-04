import React, { FC } from 'react'
import styled from 'styled-components'
import { TrackFilters } from './TrackFilters'
import { ChooseAlbums } from './ChooseAlbums'

const ChooseFiltersPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  width: 1250px;
  height: 790px;
`
const SongFiltersBox = styled.div`
  padding: 20px;
  width: 73%;
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

export const ChooseFilters: FC = (): JSX.Element => {
  return (
    <ChooseFiltersPageContainer>
      <SongFiltersBox>
        <SongFiltersTitle>Выберите, какую песню хотите услышать</SongFiltersTitle>
        <Divider />
        <TrackFilters />
      </SongFiltersBox>
      <ChooseAlbums />
    </ChooseFiltersPageContainer>
  )
}
