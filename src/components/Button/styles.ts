import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background-color: transparent;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background-color: transparent;
  font-size: 16px;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
