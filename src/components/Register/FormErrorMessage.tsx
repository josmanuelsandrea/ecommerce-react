import { FC } from 'react'

interface Props {
    error: string
}

function capitalizeFirstLetter(string: string) {
  if (string.length > 1){
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else return ''
}

const FormErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div className='mb-5 text-[.8em] text-red-400 font-Inter'>
        <p>{capitalizeFirstLetter(error)}</p>
    </div>
  )
}

export default FormErrorMessage