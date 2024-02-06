import axios from "axios";
import Signup from "./Components/signup";

const url = 'http://localhost:8080';

const loginAdmin = (username,password) => axios.post(url+'/checkLogin', {username, password});

const getBakery = () => axios.get(`${url}/fetchdata`);

const deleteBakery = (id) => axios.delete(`${url}/DeleteBakeryData/${id}`);

const getBakeryByName = (itemName) => axios.get(`${url}/getFieldByData/${itemName}`);

const updateData = (bakery) => axios.put(`${url}/updateBakeryData`, bakery);

const signUpAdmin = (signUp) => axios.post(url+'/addUser', signUp);

const addBakery = (bakery) => axios.post(url+'/saveBakeryData', bakery);

export {loginAdmin, getBakery, deleteBakery, getBakeryByName, updateData, signUpAdmin, addBakery};