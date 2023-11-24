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


const updateCompany =  async (token, form) => {
    try {
        let config = { headers: { Authorization: `Bearer ${token}`}};
        let data = form;
        const res = await axios.post(`${API_URL}/company`, data ,config );
        return res.data;
    } catch(error) {
        const axiosError = error;
        if (axiosError && axiosError.response && axiosError.response.status === 403) {
            throw new Error("no_permistion");
        }
        else   {
            throw error;
        }

    }
}

export const companyService = {
    getAllCompany,
    getMyCompany,
    getCompanyById,
    getJobByCompany,
    updateCompany,

};
