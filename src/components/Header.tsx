import React, { FC } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding: 10px 40px;
  background-color: #ffffff;
`
const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 8px;
`

export const Header: FC = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderTitle>Zema</HeaderTitle>
    </HeaderContainer>
  )
}
