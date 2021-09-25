import React, { FC } from 'react'
import styled from 'styled-components'
import { RadioGroup, FormControlLabel, Checkbox, Radio } from '@material-ui/core'
import { useStore } from '../../stores/RootStore/RootStoreContext'

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
const FilterCategoryContainer = styled.div`
  display: inline-block;
  margin: 7px;
`
const FilterCategoryTitle = styled.div`
  font-size: 31px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 13px;
`

export const RandomSongPage: FC = (): JSX.Element => {
  const { TracksStore } = useStore()

  const filters = TracksStore.filters.map((category) => {
    return (
      <FilterCategoryContainer key={category.name}>
        <FilterCategoryTitle>{category.name}</FilterCategoryTitle>
        {category.value !== 'extra' && (
          <>
            <RadioGroup />
          </>
        )}
        {category.filters.map((filter) => {
          return (
            <>
              {category.value === 'extra' ? (
                <FormControlLabel labelPlacement='top' control={<Checkbox />} label={filter.title} />
              ) : (
                <>
                  <FormControlLabel labelPlacement='top' control={<Radio />} label={filter.title} />
                </>
              )}
            </>
          )
        })}
      </FilterCategoryContainer>
    )
  })

  return (
    <RandomSongpageWrapper>
      <RandomSongPageContainer>
        <SongFiltersBox>
          <SongFiltersTitle>Выберите, какую песню хотите услышать</SongFiltersTitle>
          <Divider />
          <FiltersContainer>{filters}</FiltersContainer>
        </SongFiltersBox>
        <AlbumsFiltersBox></AlbumsFiltersBox>
      </RandomSongPageContainer>
    </RandomSongpageWrapper>
  )
}
