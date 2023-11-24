import axios, { AxiosError } from "axios";
import { hostName } from "../global";
const API_URL = hostName

const getAllCompany = async () => {
    try {
        const res = await axios.get(`${API_URL}/company`);
        return res.data.data;
    } catch (error) {
        throw error;
    } 
};

const getMyCompany = async (token) => {
    try {
        let config = { headers: { Authorization: `Bearer ${token}`}};
        const res = await axios.get(`${API_URL}/company/my-company`,config);
        return res.data.data;
    }catch (error) {
        console.log(error);
    }
};

const getCompanyById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/company/${id}`);
        return res.data.data;
    } catch (error) {
        throw error;
    } 
};


const getJobByCompany = async (userId) => {
    try {
        const res = await axios.get(`${API_URL}/company/jobs/${userId}`);
        return res.data.data;
    } catch (error) {
        throw error;
    } 
};

export const companyService = {
    getAllCompany,
    getMyCompany,
    getCompanyById,
    getJobByCompany,

};
