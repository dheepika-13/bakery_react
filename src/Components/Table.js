import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteBakery, getBakery } from '../Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Table.css';

const AdminTable = () => {

    const [bakery, setBakery] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadData();
      }, []);
    
      const loadData = () => {
        getBakery().then((result) => {
            setBakery(result.data);
        });
      };

      const handleDelete = (sno) => {
        deleteBakery(sno).then(() => {
            loadData();
            toast.success('Deleted!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).catch((error) => {
            toast.error("Failed to delete", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
      };

    return ( <>
        <div className="product">
            <h1 className="headname"><u>ITEMS LIST</u></h1>
            <button onClick={() => navigate("/add")} className="btn btn-outline-danger" id="delbutton" style={{marginLeft:'950px', marginTop:'-37px', width:'120px'}}>
                            <span>Add Item</span>
                        </button>
            <table id='maintable'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>ItemName</th>
                        <th>Base Flavour</th>
                        <th>Cream Flavour</th>
                        {/* <th>Toppings</th> */}
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Best Before</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {bakery.map((obj) => (
                        <tr key={obj.sno}>
                            <td>{obj.sno}</td>
                            <td>{obj.itemName}</td>
                            <td>{obj.basef}</td>
                            <td>{obj.creamf}</td>
                            {/* <td>{obj.top}</td> */}
                            <td>{obj.quantity}</td>
                            <td>{obj.price}</td>
                            <td>{obj.discount}</td>
                            <td>{obj.bb}</td>
                            <td>
                                <Link to = {`/edit/${obj.itemName}`}>
                                <button className="btn btn-outline-warning" id="editbutton" style={{marginLeft:'0', width:'70px'}}>
                              <span>Edit</span>
                              </button>
                                </Link>
                                <button onClick={() => handleDelete(obj.sno)} className="btn btn-outline-danger" id="delbutton" style={{marginLeft:'75px', marginTop:'-32px', width:'70px'}}>
                            <span>Delete</span>
                        </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br/>
            <button onClick={() => navigate("/")} className="btn btn-outline-danger" id="delbutton" style={{marginLeft:'950px', width:'120px'}}>
                            <span>Logout</span>
                        </button>
        </div>

    
        </> );
}
 
export default AdminTable;