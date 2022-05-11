import { FC } from 'react'

const SubHeading: FC<{ title: string }> = ({ title }) => {
  return <h2 className="mb-5 text-xl font-semibold text-white">{title}</h2>
}

export default SubHeading
