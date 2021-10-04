import React, { FC } from 'react'
import styled from 'styled-components'
import { Field, Form } from 'formik'
import { Button, Checkbox, Radio, RadioGroup } from '@material-ui/core'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { FormControlLabel } from '@material-ui/core'
import { IFormValues } from './AllFilters'
import { FilterValues } from '../../stores/TracksStore'

interface TrackFiltersProps {
  values: IFormValues
  setFieldValue: (
    field: string,
    value: Array<FilterValues>,
    shouldValidate?: boolean | undefined
  ) => void
}

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

export const TrackFilters: FC<TrackFiltersProps> = ({ values, setFieldValue }): JSX.Element => {
  const { TracksStore } = useStore()

  return (
    <FiltersContainer>
      <Form>
        {TracksStore.filters.map((category) => {
          return (
            <FilterCategoryContainer key={category.value}>
              <FilterCategoryTitle>{category.name}</FilterCategoryTitle>
              {category.value === 'tempo' ? (
                <RadioGroup>
                  {category.filters.map((filter) => {
                    return (
                      <Field
                        as={FormControlLabel}
                        control={<Radio checked={values.tempo === filter.value} />}
                        name='tempo'
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
                      control={
                        filter.value === 'anyMood' ? (
                          <Checkbox
                            onChange={() => {
                              if (!values.mood.includes('anyMood')) {
                                setFieldValue('mood', ['anyMood'])
                              } else {
                                setFieldValue('mood', [])
                              }
                            }}
                          />
                        ) : (
                          <Checkbox
                            disabled={category.value === 'mood' && values.mood.includes('anyMood')}
                          />
                        )
                      }
                      checked={values[category.value as 'mood' | 'extra'].some(
                        (v) => v === filter.value
                      )}
                      name={category.value}
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
        })}
        <Button type='submit'>Submit</Button>
      </Form>
    </FiltersContainer>
  )
}
