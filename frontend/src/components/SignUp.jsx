import { useFormik } from 'formik';
import * as Yup from 'yup'
//import apiCalls from '../services/api.js';
import authServices from '../services/auth.js'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Loader } from '../common/Loader.jsx';
export const Signup = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sumbitUserInfo, setSubmitUserInfo] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik(
        {
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: Yup.object({
                firstName: Yup.string().max(15, "First Name Must be 25 characters or less")
                    .required("First Name Required"),
                lastName: Yup.string().max(15, "First Name Must be 25 characters or less")
                    .required("Last name Required"),
                email: Yup.string().email("Invalid email").required("Required"),
                password: Yup.string().min(8).required("require at least 8 characters"),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password")], "Password does not match")
                    .required("Confirm Password is required"),
            }),
            onSubmit: async (values) => {
                console.log("sign up details ", values);
                let apiResponse;
                setLoading(true);
                apiResponse = await authServices.registerUser(values);
                console.log(apiResponse);
                if (apiResponse?.ok) {
                    setIsRegistered(true)
                } else if (apiResponse?.status === 409) {
                    setError("User already exists");
                } else {
                    setError("An error occurred")
                }
                setLoading(false);
            }
        }
    );
    return (
        <div className='flex items-center justify-center'>
            {!isRegistered ? <form onSubmit={formik.handleSubmit}>
                <div className=''>
                    <h2 className='font-bold mb-5'>Please create an account</h2>
                    {error ? <div>
                        <p className='text-red-600'>{error}</p>
                        <h3 className='mx-2 mt-3'>You can <Link to={'/login'} className='text-blue-600'>Login</Link> to see your profile</h3>
                    </div> : null}
                    <div className=' my-3' >
                        {sumbitUserInfo && formik.errors.firstName ? <p className='text-red-600 mb-2'>{formik.errors.firstName}</p> : null}
                        <input id='firstName'
                            name='firstName'
                            type='text'
                            placeholder='First Name'
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className='border-0 px-2 '
                            style={{ height: "50px", backgroundColor: "#F3F3F3" }}
                        >
                        </input>
                    </div>

                    <div className='input-container my-3'>
                        {sumbitUserInfo && formik.errors.lastName ? <p className='text-red-600 mb-2'>{formik.errors.lastName}</p> : null}
                        <input id='lastName'
                            name='lastName'
                            type='text'
                            placeholder='Last Name'
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className=' border-0 px-2 '
                            style={{ height: "50px", backgroundColor: "#F3F3F3" }}
                        >
                        </input>
                    </div>
                    <div className='input-container my-3 '>
                        {sumbitUserInfo && formik.errors.email ? <p className='text-red-600 mb-0'>{formik.errors.email}</p> : null}
                        <input id='email'
                            name='email'
                            type='text'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className=' border-0 px-2'
                            style={{ height: "50px", backgroundColor: "#F3F3F3" }}

                        >
                        </input>
                    </div>
                    <div className='input-container my-3'>
                        {sumbitUserInfo && formik.errors.password ? <p className='text-red-600 mb-0'>Password {formik.errors.password}</p> : null}
                        <input id='password'
                            name='password'
                            type='password'
                            placeholder='Create your password'
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className=' border-0 px-2'
                            style={{ height: "50px", backgroundColor: "#F3F3F3" }}
                        >
                        </input>
                    </div>
                    <div className='input-container my-3 h-50'>
                        {sumbitUserInfo && sumbitUserInfo && formik.errors.confirmPassword ? <p className='text-red-600 mb-0'>Password mismatched</p> : null}
                        <input id='confirmPassword'
                            name='confirmPassword'
                            type='password'
                            placeholder='Confirm your password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            className='w-100 border-0 px-2'
                            style={{ height: "50px", backgroundColor: "#F3F3F3" }}
                        >
                        </input>
                    </div>
                    <button type='submit'
                        className={`w-[200px] border-0 my-3 px-3 text-white h-[50px] ${loading ? "bg-cyan-600" : "bg-[#6237DE]"}`}
                        // style={{ height: "50px", backgroundColor: "#6237DE" }}
                        onClick={() => { setSubmitUserInfo(true); }}
                        disabled={loading ? true : false}
                    >Create Account</button>
                    {loading ? <div className="flex itemx-center justify-center mt-5"> <Loader /></div> : <></>}
                    <p>Already have an account? Please <a href='/login' className='text-blue-600'>Login</a></p>
                </div>

            </form> :
                <div className='mt-5 App'>
                    <Navigate to={"/login"} replace={true} />
                </div>
            }
        </div>
    )
}