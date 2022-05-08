import { FC } from 'react'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Menu from '../MenuContainer/Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres()

  return isLoading ? (
    <div className="mb-6 mx-11">
      <SkeletonLoader count={5} className="mt-6 h-7" />
    </div>
  ) : (
    <Menu
      menu={{
        title: 'Popular genres',
        items: data || [],
      }}
    />
  )
}
export default GenreMenu
