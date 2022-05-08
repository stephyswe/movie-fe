export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (id: string) => `/auth/${id}`
export const getGenresUrl = (item?: string) => `/genres/${item}`
export const getMoviesUrl = (item: string) => `/movies/${item}`
export const getActorsUrl = (item: string) => `/actors/${item}`
export const getRatingsUrl = (item: string) => `/ratings/${item}`