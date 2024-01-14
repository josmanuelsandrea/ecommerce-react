import { Formik, Form } from "formik"
import FormField from "./FormField"
import SubmitButton from "./SubmitButton"
import FormErrorMessage from "./FormErrorMessage"
import { signInSchema } from "./handlers/formHandlers"
import onSubmitRegisterForm from "@/features/RegisterForm/onSubmitRegisterForm"
import { useState } from 'react'

export interface FormValues {
    email: string,
    password: string,
}

const FormComponent = () => {
    const initialValues: FormValues = { email: '', password: '' }
    const [ERROR_FORM, SET_ERROR_FORM] = useState('')

    return (
        <div className="flex flex-col">
            <h1 className="font-Inter-Bold text-green-500 uppercase text-2xl">Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={async (values, actions) => {
                    onSubmitRegisterForm(values, actions, SET_ERROR_FORM);
                }} 
                // TODO Redirect the sucessful registered users to the login form or retrieve the jwt tokens in the same function
                // I will handle
            >
                <Form className="font-Inter-Bold text-xl sm:text-2xl">
                    <FormField 
                        FIELD_LABEL="EMAIL"
                        FIELD_NAME="email"
                        FIELD_TYPE="text"
                        FIELD_ID="email"
                        FIELD_PLACEHOLDER="example@here.com"
                    />
                    <FormField 
                        FIELD_LABEL="PASSWORD"
                        FIELD_NAME="password"
                        FIELD_TYPE="password"
                        FIELD_ID="password"
                        FIELD_PLACEHOLDER="*******"
                    />
                    <FormErrorMessage error={ERROR_FORM}/>
                    <SubmitButton />
                </Form>
            </Formik>
        </div>
    )
}

export default FormComponent