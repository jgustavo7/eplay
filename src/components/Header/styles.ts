import styled from 'styled-components'
import { Cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const HeaderBar = styled.header`
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
`


export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;
  cursor: pointer;
`