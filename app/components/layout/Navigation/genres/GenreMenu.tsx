import { FC } from 'react'

import Menu from '../MenuContainer/Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres()

  return isLoading ? (
    <div className="mb-6 mx-11">Loading...</div>
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

{/* <Menu menu={{ title: 'Popular genre', items: data || [] }} /> */}