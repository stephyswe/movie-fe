import Home from '@/screens/home/Home'

import { NextPageAuth } from '@/shared/types/auth.types'

const HomePage: NextPageAuth = () => {
  return <Home />
}

HomePage.isOnlyAdmin = true

export default HomePage
