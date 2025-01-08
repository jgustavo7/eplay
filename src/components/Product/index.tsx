import Tag from '../Tags'
import { Card, Descricao, Titulo } from './styles'

export const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Promoções</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit qui
      nisi blanditiis consequuntur tempore minus omnis inventore quisquam
      facilis fuga recusandae laborum dolorum, explicabo, minima aut officiis
      provident tempora?
    </Descricao>
  </Card>
)
