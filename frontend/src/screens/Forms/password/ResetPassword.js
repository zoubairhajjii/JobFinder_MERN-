import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import formValidate from '../validation/FormValidation'
import { ToastContainer } from 'react-toastify'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const UpdatePassword = ({ match }) => {
    const history = useHistory();
    const [passeye, setPasseye] = useState(false);
    const [inputs, setInputs] = useState({ password: '', confirmPassword: '' });

    const dispatch = useDispatch();
   
   




    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    return (
        <Fragment>
           
             
                    <Fragment>
                        
                        <div className="allTypeFormPage">
                            <div className='mainFormContainer'>
                                <div className="form__header">
                                    <h2>Reset Password</h2>
                                </div>
                                <form className="formClass" method="POST" >
                                    <div className="form__control">
                                        <label htmlFor="newPassword">New Password</label>
                                        <input type={passeye ? "text" : "password"} className="email" id='password' name="password" value={inputs.password} onChange={onChange} />
                                        <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                                    </div>
                                    <div className="form__control">
                                        <label htmlFor="confirmPaassword">Confirm Password</label>
                                        <input type={passeye ? "text" : "password"} className="email" id='confirmPassword' name="confirmPassword" value={inputs.confirmPassword} onChange={onChange} />
                                        <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                                    </div>
                                    <button className='formSubmitBtn'>Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </Fragment>
              
   
            <ToastContainer/>
        </Fragment>
    )
}

export default UpdatePassword