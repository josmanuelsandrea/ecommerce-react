import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import YupPassword from "yup-password"
YupPassword(Yup)

interface MyFormValues {
    email: string,
    password: string,
}

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Type a correct email form.').required('This field is required'),
    password: Yup
        .string()
        .password()
        .required('This field is required')
        .min(8, 'Password must be at least 8 characters')
        .minNumbers(1, 'At least one number')
        .minLowercase(1, 'At least one lowercase letter')
        .minUppercase(1, 'At least one uppercase letter')
        .minSymbols(1, 'At least one symbol')
})

const FormComponent = () => {
    const initialValues: MyFormValues = { email: '', password: '' }
    return (
        <div className="flex flex-col">
            <h1 className="font-Inter-Bold text-green-500 uppercase text-2xl">Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={(values, actions) => {
                    console.log({ values, actions })
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }}
            >
                <Form className="font-Inter-Bold text-xl sm:text-2xl">
                    <div className="flex flex-col my-5">
                        <label htmlFor="email" className="text-green-500">EMAIL</label>
                        <Field id="email" name="email" placeholder="Email" className="text-white pl-2 py-1 focus:outline-none font-Inter bg-shark-950 border-shark-500 border-2 rounded" />
                        <div className="text-red-400 font-Inter text-sm">
                            <ErrorMessage name="email" />
                        </div>
                    </div>
                    <div className="flex flex-col my-5">
                        <label htmlFor="password" className="text-green-500">PASSWORD</label>
                        <Field id="password" name="password" type="password" placeholder="Password" className="text-white pl-2 py-1 focus:outline-none font-Inter bg-shark-950 border-shark-500 border-2 rounded" />
                        <div className="text-red-400 font-Inter text-sm">
                            <ErrorMessage name="password" />
                        </div>
                    </div>
                    <div className="flex">
                        <button type="submit" className="w-full text-white border-shark-500 border-2 hover:bg-green-500 hover:border-green-500">REGISTER</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormComponent