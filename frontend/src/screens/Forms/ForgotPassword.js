import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MetaData from '../../utils/title/MetaData'
import Loading from '../../components/loaders/Loading'

const ForgotPassword = () => {
    const [inputs, setInputs] = useState({ email: '' });
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
   
       
    return (
        <Fragment>
           
                <Fragment>
                    <MetaData title='forgot-password' />
                    <div className="allTypeFormPage">
                        <div className='mainFormContainer'>
                            <div className="form__header">
                                <h4>Forgot Password</h4>
                            </div>
                            <form className="formClass" method="POST" >
                                <div className="form__control">
                                    <label htmlFor="email">Enter Email</label>
                                    <input type="text" className="email" id='email' name="email" value={inputs.email} onChange={onChange} />
                                </div>
                                <button className='formSubmitBtn'>Forgot Password</button>
                            </form>
                        </div>
                    </div>
                </Fragment>
               
      
            <ToastContainer />
        </Fragment>
    )
}

export default ForgotPassword
