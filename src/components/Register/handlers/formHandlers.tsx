import * as Yup from 'yup'
import YupPassword from "yup-password"
YupPassword(Yup) // extending YUP with yup-password to use it with Yup validations

export const signInSchema = Yup.object().shape({
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

export const httpRequest = async (baseURL: string, method: string, data: any, ) => {
    const response = await fetch(baseURL, 
        {
            method,
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(data)
        }
    )
    const data_retrieved = await response.json()
    return { data: data_retrieved, reqStatus: response }
}