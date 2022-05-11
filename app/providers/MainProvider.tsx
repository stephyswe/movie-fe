import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/layout/Layout'

import ReduxToast from '@/ui/redux-toast/ReduxToast'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import { store } from '@/store/store'

import AuthProvider from './AuthProvider/AuthProvider'
import HeadProvider from './HeadProvider/HeadProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <AuthProvider Component={Component}>
            <Layout>{children}</Layout>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  )
}
export default MainProvider
