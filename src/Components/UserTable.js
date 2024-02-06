import React from 'react';
import { useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import { useState } from 'react';
import { deleteBakery, getBakery } from '../Api';
import { useNavigate } from 'react-router-dom';


const UserTable = () => {

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

    return ( 
        <>
        <div className="product">
        <h1 className="user" style={{paddingLeft:'80px',paddingTop:'10px'}}>ITEMS LIST</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>ItemName</th>
                        <th>Base Flavour</th>
                        <th>Cream Flavour</th>
                        <th>Quantity</th>
                        <th>Price(per piece)</th>
                        <th>Discount</th>
                        <th>Best Before(from manufacturing)</th>
                    </tr>
                </thead>
                <tbody>
                    {bakery.map((obj) => (
                        <tr key={obj.sno}>
                            <td>{obj.sno}</td>
                            <td>{obj.itemName}</td>
                            <td>{obj.basef}</td>
                            <td>{obj.creamf}</td>
                            <td>{obj.quantity}</td>
                            <td>{obj.price}</td>
                            <td>{obj.discount}</td>
                            <td>{obj.bb}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br></br>
            <button onClick={() => navigate(-1)} className="btn btn-outline-danger" id="delbutton" style={{marginLeft:'950px', width:'120px'}}>
                <span>Back</span>
            </button>
        </div>
        </>
     );
}
 
export default UserTable;