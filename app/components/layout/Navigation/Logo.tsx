import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.png'

const Logo: FC = () => {
  return (
    <Link href="/">
      <a className="block mb-10 px-layout">
        <Image
          src={logoImage}
          width={247}
          height={34}
          alt="Cinema"
          draggable={false}
        />
      </a>
    </Link>
  )
}
export default Logo
