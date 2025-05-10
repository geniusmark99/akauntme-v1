'use client'
import * as Yup from 'yup'
import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'next/navigation'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { useAuth } from '@/hooks/auth'
import { Suspense, useState } from 'react'
import { LoaderWidget } from '@/components/shared/general'
import { LogoIcon } from '@/components/shared/icons'

interface Values {
    email: string
    password: string
    password_confirmation: string
}

const PasswordReset = () => {
    const query = useSearchParams()
    const { resetPassword } = useAuth({ middleware: 'guest' });
    const [isLoading, setIsLoading] = useState(false);


    const submitForm = async (
        values: Values,
        { setSubmitting, setErrors }: FormikHelpers<Values>,
    ): Promise<any> => {
        try {
            setIsLoading(true);

            await resetPassword(values)
        } catch (error: Error | AxiosError | any) {
            if (axios.isAxiosError(error) && error.response?.status === 422) {
                setErrors(error.response?.data?.errors)
            }
        } finally {
            setSubmitting(false);
            setIsLoading(false);

        }
    }

    const ForgotPasswordSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('The email field is required.'),
        password: Yup.string().required('The password field is required.'),
        password_confirmation: Yup.string()
            .required('Please confirm password.')
            .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
    })

    return (
        <Suspense>

            <div className='flex justify-center w-full flex-col items-center gap-y-10  h-screen bg-rose-50'>
                <div className='flex justify-center flex-col items-center gap-y-5'>
                    <div className='flex justify-center flex-col items-center'>
                        <LogoIcon className='fill-rose-500 size-10 mb-30 md:mb-2' type='alone' />
                        <p className='font-[500] text-rose-600'>Akauntme</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-rose-400'>Password reset</h1>
                    </div>
                </div>

                <Formik
                    onSubmit={submitForm}
                    validationSchema={ForgotPasswordSchema}
                    initialValues={{
                        password: '',
                        password_confirmation: '',
                        email: query.get('email') ?? '',
                    }}
                >
                    <Form className="space-y-4 w-[80%]  sm:w-[300px] md:w-[400px] mx-10">


                        <div className='w-full flex justify-center items-center'>
                            <div className='w-full flex justify-center gap-y-2 items-center flex-col'>
                                <Field id="email" type="email"
                                    name="email"
                                    className='py-3 rounded-lg w-full border-none outline-0 shadow px-2  bg-white'
                                    placeholder="Enter your email address" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-xs text-red-500 flex w-full"
                                />

                            </div>

                        </div>

                        <div className='w-full flex justify-center items-center'>
                            <div className='w-full flex justify-center gap-y-2 items-center flex-col'>
                                <Field id="password"
                                    name="password"
                                    type="password"
                                    className='py-3 rounded-lg w-full border-none outline-0 shadow px-2 bg-white'
                                    placeholder="Enter your password" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-xs text-red-500 flex w-full"
                                />

                            </div>

                        </div>

                        <div className='w-full flex justify-center items-center'>
                            <div className='w-full flex justify-center gap-y-2 items-center flex-col'>
                                <Field id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    className='py-3 rounded-lg w-full border-none outline-0 shadow px-2 bg-white'
                                    placeholder="Confirm your password" />
                                <ErrorMessage
                                    name="password_confirmation"
                                    component="div"
                                    className="text-xs text-red-500 flex w-full"
                                />

                            </div>

                        </div>

                        <button disabled={isLoading} type='submit' className="w-full flex justify-center cursor-pointer bg-gradient-to-tr from-rose-400 to-amber-400 font-semibold lg:text-xl py-3 rounded-lg shadow-lg shadow-rose-500/70 transition-all hover:scale-95 text-center text-white">
                            {isLoading ? (
                                <LoaderWidget className='text-rose-500' />
                            ) : (
                                'Reset password'
                            )}
                        </button>



                    </Form>
                </Formik>

            </div>
        </Suspense>

    )
}

export default PasswordReset
