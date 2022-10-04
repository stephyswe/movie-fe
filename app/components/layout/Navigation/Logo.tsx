import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.png'

const Logo: FC = () => {
  return (
    <Link href="/">
      <a className="block pb-10 px-layout">
        <Image
          src={logoImage}
          width={130}
          height={80}
          alt="Cinema"
          draggable={false}
          className="pb-10"
        />
      </a>
    </Link>
  )
}
export default Logo
