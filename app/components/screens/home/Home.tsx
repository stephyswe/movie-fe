import { FC } from 'react'

import Heading from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to your browser."
    >
      <Heading
        title="Watch movies online"
        className="mb-8 text-xl text-gray-300"
      />
    </Meta>
  )
}

export default Home
