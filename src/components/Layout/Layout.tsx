import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <div className="mx-10">
        {children}
    </div>
  )
}

export default Layout