export const API_URL = `${process.env.REACT_APP_SERVER_URL}/api`

export const getAuthUrl = (id: string) => `/auth/${id}`
export const getUsersUrl = (string: string) => `/users/${string}`
export const getGenresUrl = (item?: string) => `/genres/${item}`
export const getMoviesUrl = (item: string) => `/movies/${item}`
export const getActorsUrl = (item: string) => `/actors/${item}`
export const getRatingsUrl = (item: string) => `/ratings/${item}`
