import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import styles from '../styles/Home.module.scss'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home page</h1>
		</Layout>
	)
}

export default Home
