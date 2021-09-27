import React, { FC } from 'react'
import styled from 'styled-components'
import { Field, Form, Formik } from 'formik'
import { Button, Checkbox, Radio, RadioGroup } from '@material-ui/core'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { FormControlLabel } from '@material-ui/core'
import { FilterValues } from '../../stores/TracksStore'

interface IFormValues {
  checkbox: Array<FilterValues>
  radio: FilterValues
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
        {category.value === 'tempo' ? (
          <RadioGroup>
            {category.filters.map((filter) => {
              return (
                <Field
                  as={FormControlLabel}
                  control={<Radio />}
                  name='radio'
                  value={filter.value}
                  labelPlacement='top'
                  label={filter.title}
                  key={filter.value}
                />
              )
            })}
          </RadioGroup>
        ) : (
          category.filters.map((filter) => {
            return (
              <Field
                as={FormControlLabel}
                control={<Checkbox />}
                name='checkbox'
                value={filter.value}
                labelPlacement='top'
                label={filter.title}
                key={filter.value}
              />
            )
          })
        )}
      </FilterCategoryContainer>
    )
  })

  const initialFormValues: IFormValues = {
    checkbox: [],
    radio: 'medium',
  }
  const handleSubmit = (values: IFormValues) => {
    const formData: Array<FilterValues> = [...values.checkbox, values.radio]
    alert(JSON.stringify(formData, null, 2))
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
