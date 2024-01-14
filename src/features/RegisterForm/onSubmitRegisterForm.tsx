import { FormValues } from "@/components/Register/Form"
import { FormikHelpers } from "formik"
import { httpRequest } from "@/components/Register/handlers/formHandlers"
import { SetStateAction } from "react"

async function onSubmitRegisterForm(values: FormValues, actions: FormikHelpers<FormValues>, SET_ERROR_FORM: (value: SetStateAction<string>) => void) {
    actions.setSubmitting(false)
    const { data, reqStatus } = await httpRequest('http://localhost:8000/api/auth/register', 'POST', { email: values.email, password: values.password })
    if (reqStatus.status === 400) {
        if (data.email) SET_ERROR_FORM(data.email[0])
    }
    if (reqStatus.status === 200) {
        SET_ERROR_FORM('')
    }
}

export default onSubmitRegisterForm