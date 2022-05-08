import { FC } from 'react'

interface IHeading {
  title: string
  className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <h1
      className={`font-semibold text-white text-opacity-80 ${
        className?.includes('xl') ? '' : 'text-3xl'
      }`}
    >
      {title}
    </h1>
  )
}
export default Heading
