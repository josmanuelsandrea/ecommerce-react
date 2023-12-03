import { Field, ErrorMessage } from "formik"
import { FC } from "react"

interface Props {
    FIELD_LABEL: string,
    FIELD_NAME: string,
    FIELD_TYPE: string,
    FIELD_ID: string,
    FIELD_PLACEHOLDER: string
}

const FormField: FC<Props> = ({ FIELD_NAME, FIELD_TYPE, FIELD_ID, FIELD_LABEL, FIELD_PLACEHOLDER }) => {
    return (
        <div className="flex flex-col my-5">
            <label htmlFor={FIELD_ID} className="text-green-500">{FIELD_LABEL}</label>
            <Field 
                id={FIELD_ID} 
                name={FIELD_NAME} 
                type={FIELD_TYPE} 
                placeholder={FIELD_PLACEHOLDER} 
                className="text-white pl-2 py-1 focus:outline-none font-Inter bg-shark-950 border-shark-500 border-2 rounded" 
            />
            <div className="text-red-400 font-Inter text-sm">
                <ErrorMessage name={FIELD_NAME} />
            </div>
        </div>
    )
}

export default FormField