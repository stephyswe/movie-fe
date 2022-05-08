import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre/genre.service'

import { getGenreUrl } from '@/configs/url.config'

import { IMenuItem } from '../MenuContainer/menu.types'

export const usePopularGenres = () => {
  const queryData = useQuery(
    'popular genres menu',
    () => GenreService.getAll(),
    {
      select: ({ data }) =>
        data
          .map(
            (genre: any): IMenuItem => ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug),
              title: genre.name,
            })
          )
          .splice(0, 4),
      onError(error) {
        console.log('error', error)
      },
    }
  )

  return queryData
}
