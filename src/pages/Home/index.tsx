import Banner from '../../components/Banners'
import { ProductsList } from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../images/resident.png'
import diablo from '../../images/diablo.png'
import zelda from '../../images/zelda.png'
import starWars from '../../images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque? Quo quidem consequatur vel aspernatur a accusantium cumque veritatis tempora, repellendus corporis molestias veniam eaque optio deserunt debitis dolore quibusdam.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque? Quo quidem consequatur vel aspernatur a accusantium cumque veritatis tempora, repellendus corporis molestias veniam eaque optio deserunt debitis dolore quibusdam.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque? Quo quidem consequatur vel aspernatur a accusantium cumque veritatis tempora, repellendus corporis molestias veniam eaque optio deserunt debitis dolore quibusdam.',
    title: 'Resident Evil 4',
    system: 'PS4',
    infos: ['10%', 'R$200,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque? Quo quidem consequatur vel aspernatur a accusantium cumque veritatis tempora, repellendus corporis molestias veniam eaque optio deserunt debitis dolore quibusdam.',
    title: 'Resident Evil 4',
    system: 'Xbox',
    infos: ['10%', 'R$200,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dignissimos iste ratione minima quam minus veritatis dolorum distinctio temporibus quaerat, blanditiis ea dolor rem pariatur magnam sunt eaque fugit totam.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dignissimos iste ratione minima quam minus veritatis dolorum distinctio temporibus quaerat, blanditiis ea dolor rem pariatur magnam sunt eaque fugit totam.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dignissimos iste ratione minima quam minus veritatis dolorum distinctio temporibus quaerat, blanditiis ea dolor rem pariatur magnam sunt eaque fugit totam.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dignissimos iste ratione minima quam minus veritatis dolorum distinctio temporibus quaerat, blanditiis ea dolor rem pariatur magnam sunt eaque fugit totam.',
    title: 'Resident Evil 4',
    system: 'Nintendo DS',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
