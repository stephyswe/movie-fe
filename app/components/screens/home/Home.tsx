import { FC } from 'react'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import { Meta } from '@/utils/meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }: any) => {
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

      <div className="my-10">
        <SubHeading title="Trending now" />
        {trendingMovies.length && <Gallery items={trendingMovies} />}
      </div>

      <div>
        <SubHeading title="Best actors" />
        {actors.length && <Gallery items={actors} />}
      </div>
    </Meta>
  )
}

export default Home
