import React, { useState, useEffect, Fragment } from "react";
import "./NewServiceAdd.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import MetaData from "../../utils/title/MetaData";
import { addService } from "../../redux/actions/serviceAction";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PinDropIcon from "@mui/icons-material/PinDrop";
import DescriptionIcon from '@mui/icons-material/Description';
import { useHistory } from "react-router-dom";
const NewServiceAdd = () => {
  const dispatch = useDispatch();
  const categories = ["électricite", "climatisation", "chauffage"];
  const Navigate = useHistory();

  const [data, setData] = useState({
    nomService: "",
    price: 0,
    description: "",
    nom_de_fournisseur: "",
    localisation: "",
    image: "",
  });
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(data, Navigate));
  };

  return (
    <Fragment>
      <Fragment>
        <MetaData title="Add New Product" />
        <div className="allTypeFormPage">
          <div className="mainFormContainer ">
            <div className="form__header">
              <h2>Create Service</h2>
            </div>
            <form
              className="formClass"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="form__control ship">
                <textarea
                  placeholder="nomService"
                  value={data.nomService}
                  onChange={onChange}
                  cols="30"
                  rows="1"
                  name="nomService"
                  minLength="3"
                ></textarea>
              </div>
              <div className="form__control ship">
                <AttachMoneyIcon/>
                <input
                  type="number"
                  placeholder="Price"
                  required
                  onChange={onChange}
                  name="price"
                  min="1"
                />
              </div>
              <div className="form__control ship">
                <DescriptionIcon/>
                <textarea
                  placeholder="Product Description"
                  value={data.description}
                  onChange={onChange}
                  cols="30"
                  rows="1"
                  name="description"
                  maxLength="200"
                ></textarea>
              </div>
              <div className="form__control ship">
                <input
                  type="text"
                  placeholder="nom_de_fournisseur"
                  required
                  onChange={onChange}
                  name="nom_de_fournisseur"
                  value={data.nom_de_fournisseur}
                  min="1"
                />
              </div>

              <div className="form__control ship">
              <PinDropIcon />
                <input
                  type="text"
                  placeholder="localisation"
                  required
                  value={data.localisation}
                  onChange={onChange}
                />
               
              </div>
             
              <div id="createProductFormFile" className="form__control ship">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  name="image"
                  onChange={onChange}
                  value={data.image}
                />
                {}
              </div>

              <button
                id="createProductBtn"
                className="formSubmitBtn"
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </Fragment>

      <ToastContainer />
    </Fragment>
  );
};

export default NewServiceAdd;
