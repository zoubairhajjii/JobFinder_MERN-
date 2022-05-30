import React, { useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import formValidate from '../validation/FormValidation';
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../utils/title/MetaData';
import Loading from '../../../components/loaders/Loading';

export default function LoginForm() {
    const [passeye, setPasseye] = useState(false);
    const [err, setErr] = useState({})
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const { email, password } = inputs;
    let history = useHistory();

    const dispatch = useDispatch();

    

   
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    return (
        <Fragment>
           
                    <Fragment>
                        <MetaData title='login' />
                        <div className='allTypeFormPage'>
                            <div className="mainFormContainer">
                                <div className="form__header">
                                    <h2>login</h2>
                                    <p>Not have an account ? <Link to='/signup'>signup</Link></p>
                                </div>
                                <span></span>
                                <form id="login__form" className="formClass" method="POST">
                                    <div className="form__control">
                                        <label htmlFor="username">Email</label>
                                        <input type="text" id="email" name="email" value={inputs.email} onChange={onChange} />
                                    </div>
                                    <div className="form__control password">
                                        <label htmlFor="password">Password</label>
                                        <input type={passeye ? "text" : "password"} id="password" className="password" name="password" value={inputs.password} onChange={onChange} />
                                        <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                                    </div>
                                    <div className='form__control'>
                                        <Link to='/password/forgot'>forget password</Link>
                                    </div>
                                    <button className='formSubmitBtn' >Login</button>
                                </form>
                            </div>
                        </div>
                    </Fragment>
                
            <ToastContainer />
        </Fragment>
    )
}