import React, { useEffect, useState } from 'react';
import "./editItem.css";
import { useNavigate, useParams } from 'react-router-dom';
import { getBakeryByName, getBakeryBySno, updateData } from '../Api';
import { toast, ToastContainer } from 'react-toastify';

const Edit = () => {

	const { itemName } = useParams();

	const navigate = useNavigate();

	const styles = {
		inputt: {
			width: "11cm",
			padding : "6px",
			color : "aliceblue"
		},
	};

	const [bakery, setBakery] = useState({
        // sno: "",
        // itemId: "",
        itemName: itemName,
        quantity: "",
        price: "",
        discount: "",
        basef: "",
        creamf: "",
        bb: ""
    });

    console.log(bakery);

    const loadData = async () => {
        try
        {
            const result = await getBakeryByName(itemName);
            setBakery(result.data[0]);
        }
        catch(err)
        {
            console.err("Failed To Load:",err);
        }
    };
   
    useEffect(() => {
        loadData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBakery((data) => ({
            ...data, [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try
        {
            await updateData(bakery);

            toast.info(`Updated!`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(() => {
                navigate("/data");
            }, 1800);
        }
        catch (err) {
            console.error("Failed To Update Details:", err);
        }
    };


    return ( 
    <>
    <div className="form">
			<div>
				<h1 className="item">EDIT ITEMS</h1>
			</div>

			{/* Calling to the methods */}
			{/* <div className="messages">
				{errorMessage()}
				{successMessage()}
			</div> */}

			<form className="deee" onSubmit={handleSubmit}>
				{/* Labels and inputs for form data */}
				
				<input className="inputt" placeholder="Item Name" style={styles.inputt} name='itemName' value={bakery.itemName} onChange={handleChange}
					 type="text" /><br />

				<input className="inputt" placeholder="Base Flavour" style={styles.inputt} id='basef' name='basef' value={bakery.basef} onChange={handleChange}
					type="text" /><br />

				<input className="inputt" placeholder="Cream Flavour" style={styles.inputt} id='creamf' name='creamf' value={bakery.creamf} onChange={handleChange}
					 type="text" /><br />

				{/* <input className="inputt" placeholder="Toppings" style={styles.inputt} name='itemName' value={bakery.itemName}
				type = "text" /><br /> */}

				<input className = "inputt" placeholder = "Quantity" style={styles.inputt} name='quantity' value={bakery.quantity} onChange={handleChange}
				type = "text" /><br />

				<input className = "inputt" placeholder ="Price (per piece)" style={styles.inputt} name='price' value={bakery.price} onChange={handleChange}
				type="text"/><br />

				<input className = "inputt" placeholder ="Discount" style={styles.inputt} name='discount' value={bakery.discount} onChange={handleChange}
				type="text"/><br />

				<input className = "inputt" placeholder ="Best Before (days from manufacturing)" style={styles.inputt} name='bb' value={bakery.bb} onChange={handleChange}
				type="text"/> 

				<br />
				<button className="btn"
						type="submit">
					SAVE
				</button>
			</form>
		</div>
		<ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    </> );
}
 
export default Edit;