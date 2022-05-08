import { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from 'configs/api.config'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },
  async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}
