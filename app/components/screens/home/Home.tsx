import { FC } from 'react'

import Heading from '@/ui/heading/Heading'
import Slider from '@/ui/slider/Slider'

import { Meta } from '@/utils/meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides }: any) => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to your browser."
    >
      <Heading
        title="Watch movies online"
        className="mb-8 text-xl text-gray-300"
      />

      {slides.length && <Slider slides={slides} />}
    </Meta>
  )
}

export default Home
