import React, { FC } from 'react'
import styled from 'styled-components'
import { Field, Form, Formik } from 'formik'
import { Button, Checkbox } from '@material-ui/core'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { FormControlLabel } from '@material-ui/core'
import { FilterValues } from '../../stores/TracksStore'

interface IFormValues {
  [key: string]: Array<FilterValues>
}

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

export const TrackFilters: FC = (): JSX.Element => {
  const { TracksStore } = useStore()

  const filters = TracksStore.filters.map((category) => {
    return (
      <FilterCategoryContainer key={category.value}>
        <FilterCategoryTitle>{category.name}</FilterCategoryTitle>
        {category.filters.map((filter) => {
          return (
            <Field
              as={FormControlLabel}
              control={<Checkbox />}
              name={category.value}
              value={filter.value}
              labelPlacement='top'
              label={filter.title}
              key={filter.value}
            ></Field>
          )
        })}
      </FilterCategoryContainer>
    )
  })

  const initialFormValues: IFormValues = TracksStore.filters.reduce(
    (acc: IFormValues, category) => {
      acc[category.value] = []
      return acc
    },
    {}
  )
  const handleSubmit = (values: IFormValues) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form>
        {filters}
        <Button type='submit'>Submit</Button>
      </Form>
    </Formik>
  )
}
