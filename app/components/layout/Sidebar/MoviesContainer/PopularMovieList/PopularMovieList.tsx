import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import { MovieService } from '@/services/movie/movie.service'

import MovieList from '../MovieList'

const PopularMovieList: FC = () => {
  const { isLoading, data: popularMovies } = useQuery(
    'Most popular movie in sidebar',
    () => MovieService.getMostPopularMovies(),
    {
      select: (data) => data.slice(0, 3),
    }
  )

  return isLoading ? (
    <div className="mt-11">
      pga
      <SkeletonLoader count={3} className="mb-4 h-28" />
    </div>
  ) : (
    <MovieList
      link="/trending"
      movies={popularMovies || []}
      title="Popular movies"
    />
  )
}

export default PopularMovieList
