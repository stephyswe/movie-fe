import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { ISlide } from '@/ui/slider/slider.types'

import { MovieService } from '@/services/movie/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getMovieUrl } from '@/configs/url.config'

const HomePage: NextPage<IHome> = (props) => {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getMovies()

    const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      subTitle: getGenresList(m.genres),
      title: m.title,
      bigPoster: m.bigPoster,
    }))

    return {
      props: {
        slides,
      } as IHome,
    }
  } catch (error) {
    console.log(errorCatch(error))

    return {
      props: {
        actors: [],
        slides: [],
        trendingMovies: [],
      } as IHome,
    }
  }
}

export default HomePage
