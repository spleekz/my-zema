import React, { FC } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const MainPageWrapper = styled.div`
  flex: 1 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
`
const MainPageContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CardContainer = styled.div`
  width: 400px;
  height: 400px;
  font-size: 37px;
  background-color: #ffffff;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`
const CardSection = styled.div`
  display: flex;
  justify-content: space-around;
`

export const MainPage: FC = (): JSX.Element => {
  const history = useHistory()

  return (
    <MainPageWrapper>
      <MainTitle>Выбирайте</MainTitle>
      <MainPageContainer>
        <CardSection>
          <CardContainer onClick={() => history.push('/randomsong')}>Случайная песня</CardContainer>
          <CardContainer>Тексты песен</CardContainer>
        </CardSection>
      </MainPageContainer>
    </MainPageWrapper>
  )
}
