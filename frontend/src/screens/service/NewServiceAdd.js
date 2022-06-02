import React, { useState, useEffect, Fragment } from 'react'
import './NewServiceAdd.css'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import MetaData from '../../utils/title/MetaData';

const NewServiceAdd = () => {
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({ nomService: '', price: 0, description: '', nom_de_fournisseur: '',localisation:''  });

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];

    const { name, price, sellPrice, description, category, Stock } = inputs

    const createProductSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("price", price);
        myForm.set("sellPrice", sellPrice);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.set("Stock", Stock);
        images.forEach((image) => {
            myForm.append("images", image);
        });
        
    };
    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    
    return (
        <Fragment>
             <Fragment>
                    <MetaData title='Add New Product' />
                    <div className='adminDashboard'>
                    
                        <div className="allTypeFormPage">
                            <div className='mainFormContainer addNewProduct'>
                                <div className="form__header">
                                    <h2>Create Service</h2>
                                </div>
                                <form
                                    className="formClass"
                                    encType="multipart/form-data"
                                    onSubmit={createProductSubmitHandler}
                                >

                                    <div className='form__control newp'>
                                        <textarea
                                            placeholder="nomService"
                                            value={inputs.nomService}
                                            onChange={onChange}
                                            cols="30"
                                            rows="1"
                                            name='nomService'
                                            minLength='3'
                                        ></textarea>
                                    </div>
                                    <div className='form__control newp'>
                                        <input
                                            type="number"
                                            placeholder="Price"
                                            required
                                            onChange={onChange}
                                            name='price'
                                            min='1'
                                        />
                                    </div>
                                    <div className='form__control newp'>
                                        <input
                                            type="number"
                                            placeholder="sell price"
                                            required
                                            onChange={onChange}
                                            name='sellPrice'
                                            min='1'
                                        />
                                    </div>
                                    <div className='form__control newp'>
                                        <textarea
                                            placeholder="Product Description"
                                            value={inputs.description}
                                            onChange={onChange}
                                            cols="30"
                                            rows="1"
                                            name='description'
                                            maxLength='200'
                                        ></textarea>
                                    </div>

                                    <div className='form__control newp'>
                                        <select onChange={onChange} name='category' value={inputs.category} >
                                            <option>Choose Category</option>
                                            {categories.map((cate) => (
                                                <option key={cate} value={cate}
                                                >
                                                    {cate}
                                                </option>
                                            ))}

                                        </select>
                                    </div>

                                    <div className='form__control newp'>
                                        <input
                                            type="number"
                                            placeholder="Stock"
                                            required
                                            onChange={onChange}
                                            name='Stock'
                                            min='1'
                                        />
                                    </div>

                                    <div id="createProductFormFile" className='form__control newp'>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={createProductImagesChange}
                                            multiple
                                        />
                                        {<p className='validateError img primg'>{'*image should be < 100kb'}</p>}
                                    </div>

                                   
                                    <button
                                        id="createProductBtn"
                                        className='formSubmitBtn'
                                        type="submit"
                                       
                                    >
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Fragment>
           
     
            <ToastContainer />
        </Fragment>
    )
}

export default NewServiceAdd