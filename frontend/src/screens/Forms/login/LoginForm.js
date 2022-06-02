import React, { useState, useEffect, Fragment } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../utils/title/MetaData';
import { LoginAction } from '../../../redux/actions/authAction'
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';


export default function LoginForm() {

    const Navigate = useHistory()
    const [passeye, setPasseye] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();







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
                        <form id="login__form" className="formClass" method="POST" >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"

                                autoFocus
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                value={email}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth

                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                value={password}
                            />
                            <div className='form__control'>
                                <Link to='/forgotpassword'>forget password</Link>
                            </div>
                            <Button
                                className='formSubmitBtn'
                                type='submit'
                                onClick={(e) => {
                                    e.preventDefault(e);
                                    dispatch(LoginAction({ email, password }, Navigate))

                                }}



                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </div>
            </Fragment>

            <ToastContainer />
        </Fragment>
    )
}