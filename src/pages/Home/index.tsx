import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['05/02'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Zelda',
    system: 'Windows',
    infos: ['05/02'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['05/02'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt consequuntur voluptates expedita ipsa consequatur ea libero eos doloremque assumenda, debitis nemo vero, iure distinctio adipisci. Repudiandae iusto pariatur rem!',
    title: 'Resident Evil 4',
    system: 'Nintendo DS',
    infos: ['05/02'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
