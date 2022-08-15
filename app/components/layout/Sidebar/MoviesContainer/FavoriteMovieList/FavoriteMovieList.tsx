import { FC } from 'react'

import { useFavorites } from '@/screens/favorites/useFavorites'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'
import { useAuth } from '@/hooks/useAuth'

const FavoriteMovieList: FC = () => {
  const { isLoading, favoritesMovies } = useFavorites()
  const { user } = useAuth()

  if (!user) return <NotAuthFavorites />

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="mb-4 h-28" />
    </div>
  ) : (
    <MovieList
      link="/favorites"
      movies={favoritesMovies?.slice(0, 3) || []}
      title="Favorites"
    />
  )
}

export default FavoriteMovieList
