'use client'
import { AuthCard, } from '@/components/shared/auth';
import { LogoIcon } from '@/components/shared/icons';
import Link from 'next/link';
import { useEffect } from 'react';
import * as Yup from 'yup'
import axios, { AxiosError } from 'axios'
import { DraggableBackWidget, LoaderWidget, ConfettiPopupWidget } from '@/components/shared/general';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import Image from 'next/image';




interface FormValues {
    email: string
}

const ForgetPassword = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<string>('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const [formKey, setFormKey] = useState(0);
    const [countdownFinished, setCountdownFinished] = useState(false)

    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })


    useEffect(() => {
        if (countdownFinished) {
            router.push('/login')
        }
    }, [countdownFinished, router])

    const ForgotPasswordSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('The email field is required.'),
    })

    const submitForm = async (
        values: FormValues,
        { setSubmitting, setErrors }: FormikHelpers<FormValues>,
    ): Promise<any> => {
        setIsLoading(true);
        try {
            const response = await forgotPassword(values)
            setStatus(response.data.status);
            setShowSuccess(true);
            setFormKey(prev => prev + 1); // Reset Formik form
            setCountdown(10);
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(timer)
                        setShowSuccess(false)
                        setCountdownFinished(true)
                    }
                    return prev - 1
                })
            }, 1000)
        } catch (error: Error | AxiosError | any) {
            setStatus('')
            if (axios.isAxiosError(error) && error.response?.status === 422) {
                setErrors(error.response?.data?.errors)
            }
        } finally {
            setSubmitting(false);
            setIsLoading(false);
        }
    }




    return (
        <>
            <ConfettiPopupWidget show={showSuccess} onClose={() => setShowSuccess(false)} countdown={countdown} />
            <AuthCard
                LeftPane={
                    <div className='flex justify-center flex-col items-center gap-y-10  py-5 md:py-10 lg:py-20 h-screen bg-rose-50'>
                        <div className='flex justify-center flex-col items-center gap-y-5 bg-size-[600px] bg-contain bg-top bg-no-repeat  bg-[url(/images/forget-password.png)] md:bg-none lg:bg-none '>
                            <LogoIcon className='fill-rose-500 size-10 mb-30 md:mb-2' type='alone' />
                            <div className='text-center'>
                                <h1 className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-rose-400'>Forgot your password?</h1>
                            </div>
                        </div>


                        <Formik
                            key={formKey}
                            onSubmit={submitForm}
                            validationSchema={ForgotPasswordSchema}
                            initialValues={{ email: '' }}>


                            <Form className='w-full justify-center flex flex-col items-center gap-y-5 '>

                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-full flex justify-center gap-y-2 items-center flex-col'>
                                        <Field id="email" type="email"
                                            name="email"
                                            className='py-3 rounded-lg w-9/12 md:w-6/12 border-none outline-0 shadow px-2  bg-white'
                                            placeholder="Enter your email address" />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-xs text-red-500 flex w-9/12 md:w-6/12"
                                        />

                                    </div>

                                </div>




                                <button disabled={isLoading} type='submit' className="flex justify-center cursor-pointer bg-gradient-to-tr from-rose-400 to-amber-400 font-semibold lg:text-xl py-3 rounded-lg shadow-lg shadow-rose-500/70 transition-all hover:scale-95 w-9/12 md:w-6/12 text-center text-white">
                                    {isLoading ? (
                                        <LoaderWidget className='text-akauntme' />
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>

                                <div>
                                    Just remembered your password? <Link href="/login" className="text-akauntme hover:underline cursor-pointer">Sign in</Link>
                                </div>
                            </Form>

                        </Formik>

                        <DraggableBackWidget iconColor='stroke-rose-500' />



                    </div>
                }

                RightPane={
                    <div className='bg-gradient-to-b from-rose-400 to-amber-400 h-screen py-10'>
                        <div className="flex justify-center items-center text-white py-10">
                            <Image src="/images/forget-password.png" draggable="false" alt='Forget Password' width={1000} height={1000} priority />

                        </div>
                    </div>
                }

            />



        </>
    );
}

export default ForgetPassword;