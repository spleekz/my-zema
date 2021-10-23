import React, { FC } from 'react'
import styled from 'styled-components'
import { ChooseFilters } from './ChooseFilters'
import { ChooseAlbums } from './ChooseAlbums'
import { Formik } from 'formik'
import { FilterValues } from '../../stores/TracksStore'
import { useStore } from '../../stores/RootStore/RootStoreContext'

export interface IFormValues {
  mood: Array<FilterValues>
  extra: Array<FilterValues>
  tempo: FilterValues
  isAlbums: 'true' | 'false'
  albums: Array<string>
}

const AllFiltersPageContainer = styled.div`
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

export const AllFilters: FC = (): JSX.Element => {
  const { TracksStore } = useStore()

  const initialFormValues: IFormValues = {
    mood: ['anyMood'],
    extra: [],
    tempo: 'anyTempo',
    isAlbums: 'false',
    albums: [],
  }
  const handleSubmit = (values: IFormValues) => {
    const formData: Array<FilterValues> = [...values.mood, ...values.extra, values.tempo].filter(
      (filter) => filter !== 'anyTempo' && filter !== 'anyMood'
    )

    TracksStore.getAllowedTracks(formData, values.albums)
  }
  return (
    <AllFiltersPageContainer>
      <Formik initialValues={initialFormValues} onSubmit={handleSubmit} enableReinitialize>
        {({ values, setFieldValue, handleChange }) => {
          return (
            <>
              <SongFiltersBox>
                <SongFiltersTitle>Выберите, какую песню хотите услышать</SongFiltersTitle>
                <Divider />
                <ChooseFilters
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              </SongFiltersBox>
              {values.isAlbums === 'true' && <ChooseAlbums />}
            </>
          )
        }}
      </Formik>
    </AllFiltersPageContainer>
  )
}
