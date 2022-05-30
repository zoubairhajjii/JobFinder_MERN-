import React, { useState, useEffect, Fragment } from 'react'
import '../AllForm.css'
import { useHistory } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../utils/title/MetaData';

export default function SignupForm() {
    const history = useHistory();
    const [passeye, setPasseye] = useState(false);
    const [err, setErr] = useState({})
    const [avatar, setAvatar] = useState('/profile.png');

    const [inputs, setInputs] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    const { name, email, password, confirmPassword } = inputs;

    const dispatch = useDispatch();

   

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    return (
        <Fragment>
          
                  
                        <Fragment>
                            <MetaData title='signup' />
                            <div className='allTypeFormPage'>
                                <div className="mainFormContainer">
                                    <div className="form__header">
                                        <h2>Signup</h2>
                                        <p>Already have an account ? <Link to='/Login'>login</Link></p>
                                    </div>
                                    <form id="signup__form" className="formClass" method="POST" >
                                        <div className="form__control">
                                            <label htmlFor="name">name</label>
                                            <input type="text" id="name" name="name" value={inputs.name} onChange={onChange} maxLength='40' />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="name">Email</label>
                                            <input type="text" id="email" name="email" value={inputs.email} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="profile">profile image</label>
                                            {<p className='validateError img'>{'*image should be < 100kb'}</p>}
                                            <input type="file"
                                                name="avatar"
                                                id='profile'
                                                accept="image/*"  />

                                        </div>
                                        <div className="form__control password">
                                            <label htmlFor="password">Password</label>
                                            <input type={passeye ? "text" : "password"} id="password" className="password" name="password" value={inputs.password} onChange={onChange} minLength='8' />
                                            <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                                        </div>
                                        <div className="form__control password">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input type={passeye ? "text" : "password"} id="confirmPassword" className="confirmPassword" name="confirmPassword" value={inputs.confirmPassword} onChange={onChange} />
                                            <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                                        </div>
                                        <button className='formSubmitBtn' >Register</button>
                                    </form>
                                </div>
                            </div>
                        </Fragment>
                   
          
            <ToastContainer />
        </Fragment>
    )
}