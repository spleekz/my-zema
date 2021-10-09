import React, { FC, useEffect } from 'react'
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
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const ChooseFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const FilterCategoryContainer = styled.div`
  margin: 7px;
`
const FilterCategoryTitle = styled.div`
  font-size: 31px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 13px;
`
const FieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ChooseFilters: FC<TrackFiltersProps> = ({
  values,
  setFieldValue,
  handleChange,
}): JSX.Element => {
  const { TracksStore } = useStore()

  useEffect(() => {
    if (values.mood.length > 1 && values.mood.includes('anyMood')) {
      setFieldValue(
        'mood',
        values.mood.filter((m) => m !== 'anyMood')
      )
    }
  }, [values.mood])

  return (
    <ChooseFiltersContainer>
      <Form>
        {TracksStore.filters.map((category) => {
          return (
            <FilterCategoryContainer key={category.value}>
              <FilterCategoryTitle>{category.name}</FilterCategoryTitle>
              <FieldsContainer>
                {category.value === 'tempo' ? (
                  <RadioGroup
                    sx={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
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
                            <Checkbox />
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
              </FieldsContainer>
            </FilterCategoryContainer>
          )
        })}
        <FilterCategoryContainer>
          <FilterCategoryTitle>Альбом</FilterCategoryTitle>
          <RadioGroup
            sx={{
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <Field
              as={FormControlLabel}
              control={
                <Radio
                  checked={values.isAlbums === 'false'}
                  onChange={(e) => {
                    handleChange(e)
                    setFieldValue('albums', [])
                  }}
                />
              }
              label='Любой'
              name='isAlbums'
              value='false'
            />
            <Field
              as={FormControlLabel}
              control={<Radio checked={values.isAlbums === 'true'} />}
              label='Уточнить'
              name='isAlbums'
              value='true'
            />
          </RadioGroup>
        </FilterCategoryContainer>
        <Button type='submit'>Submit</Button>
      </Form>
    </ChooseFiltersContainer>
  )
}
