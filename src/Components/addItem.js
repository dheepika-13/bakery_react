import React from 'react';
import { useState } from 'react';
import "./addItem.css";
import { useNavigate } from 'react-router-dom';
import { addBakery } from '../Api';
import { toast, ToastContainer } from 'react-toastify';

export default function Form() {

    const navigate = useNavigate();

	const [bakery, setBakery] = useState({
        sno: "",
        // itemId: "",
        itemName: "",
        quantity: "",
        price: "",
        discount: "",
        basef: "",
        creamf: "",
        bb: ""
    });

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
            await addBakery(bakery);

            toast.info(`Item Added!`, {
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
            console.error("Failed To Item:", err);
        }
    };

	const styles = {
		inputt: {
			width: "11cm",
			padding : "6px",
			color : "white"
		},
	};

	return (
		<div className="form">
			<div>
				<h1 className="item">ADD ITEMS</h1>
			</div>

			<form className="deee" onSubmit={handleSubmit}>
				{/* Labels and inputs for form data */}
				
				<input className="inputt" placeholder="S No" style={styles.inputt} name='sno' value={bakery.sno} onChange={handleChange}
					type="text" /><br/>

				<input className="inputt" placeholder="Item Name" style={styles.inputt} name='itemName' value={bakery.itemName} onChange={handleChange}
					type="text" /><br/>

				<input className="inputt" placeholder="Base Flavour" style={styles.inputt} name='basef' value={bakery.basef} onChange={handleChange}
					type="text" /><br />

				<input className="inputt" placeholder="Cream Flavour" style={styles.inputt} name='creamf' value={bakery.creamf} onChange={handleChange}
					 type="text" /><br />

				{/* <input className="inputt" placeholder="Toppings" style={styles.inputt} name='itemName' value={bakery.itemName} onChange={handleChange}
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
					ADD
				</button>
			</form>
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
		</div>
	);
}
