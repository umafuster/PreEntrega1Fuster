import React, { useState } from 'react';

// CSS
import "./ShopPage.css";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// MUI
import TextField from '@mui/material/TextField';

// Componentes
import MessageSucces from '../../Components/MessageSuccess/MessageSuccess';


const styles = {
    containerShop: {
      textAlign: "center",
      paddingTop: 20,
      color: black,
    },
  };

const initialState = {
    name: "",
    lastName: "",
    mail: "",
};

const ShopPage = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseId] = useState("");

    const handleOnChange = (e) => {
        const { value, name} = e.target;
        setValues({ ...values, [name]: value});
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            values,
        });
        setValues(initialState);
        setPurchaseId(docRef.id);
    }
    return (
        <div style={styles.containerShop}>
            <h1 className='shop-title'>Shop</h1>
            <form className='form-container' onSubmit={handleOnSubmit}>
                <TextField
                    placeholder='Name'
                    name='name'
                    value={values.name}
                    onChange={handleOnChange}
                    required
                />

                <TextField
                    placeholder='Last Name'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleOnChange}
                    required
                />

                <TextField
                    placeholder='Mail'
                    name='mail'
                    value={values.mail}
                    onChange={handleOnChange}
                    required
                />
                <button className='btn-submit'>Sumbit</button>
            </form>
            {purchaseID && <MessageSucces purchaseID={purchaseID} />}
        </div>
    )
}


export default ShopPage;