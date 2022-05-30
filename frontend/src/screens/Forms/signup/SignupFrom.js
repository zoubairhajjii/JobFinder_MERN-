import React, { useState, useEffect, Fragment } from 'react'
import '../AllForm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../utils/title/MetaData';
import {useHistory}  from "react-router-dom";
import {Registration} from "../../../redux/actions/authAction"

export default function SignupForm() {
    const Navigate = useHistory()

    const [passeye, setPasseye] = useState(false);
    const [err, setErr] = useState({})
    const [avatar, setAvatar] = useState('/profile.png');
    const dispatch = useDispatch();
    const  [data,setData]=useState({
        name:'',
        prenom:'',
        email:'',
        password:'',
        Telephone:'',
        Profession:'',
        Adresse:'',
        Age:'' ,     
        position:'',
        tarif:'',
        role:''
      })
      const onChange=(e)=>{
        setData({
          ...data,[e.target.name]:e.target.value }) }
    
    
          const handleSubmit = (e)=>{
            e.preventDefault();
            dispatch(Registration(data,Navigate))

   

    
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
                                    <form id="signup__form" className="formClass" method="POST" onSubmit={handleSubmit}  >
                                        <div className="form__control">
                                            <label htmlFor="name">name</label>
                                            <input type="text" id="name" name="name" value={data.name} onChange={onChange} maxLength='40' />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="prenom">prenom</label>
                                            <input type="text" id="prenom" name="prenom" value={data.prenom} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="email">email</label>
                                            <input type="text" id="email" name="email" value={data.email} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control password">
                                            <label htmlFor="password">password</label>
                                            <input type={passeye ? "text" : "password"} id="password" className="password" name="password" value={data.password} onChange={onChange} minLength='8' />
                                            <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
                                        </div>
                                       
                                        <div className="form__control">
                                            <label htmlFor="Telephone">Telephone</label>
                                            <input type="text" id="Telephone" name="Telephone" value={data.Telephone} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="Profession">Profession</label>
                                            <input type="text" id="Profession" name="Profession" value={data.Profession} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="Adresse">Adresse</label>
                                            <input type="text" id="Adresse" name="Adresse" value={data.Adresse} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="Age">Age</label>
                                            <input type="text" id="Age" name="Age" value={data.Age} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="position">position</label>
                                            <input type="text" id="position" name="position" value={data.position} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="tarif">tarif</label>
                                            <input type="text" id="tarif" name="tarif" value={data.tarif} onChange={onChange} />
                                           
                                        </div>
                                        <div className="form__control">
                                            <label htmlFor="role">role</label>
                                            <input type="text" id="role" name="role" value={data.role} onChange={onChange} />
                                           
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