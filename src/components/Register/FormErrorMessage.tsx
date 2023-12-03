import { FC } from 'react'

interface Props {
    error: string
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FormErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div className='mb-5 text text-red-400 font-Inter'>
        <p>{capitalizeFirstLetter(error[0])}</p>
    </div>
  )
}

export default FormErrorMessage