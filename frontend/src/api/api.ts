import axios, { AxiosError } from "axios";
import { ILoginRequest, ILoginResponse } from "./types/login";

export async function apiLogin(body: ILoginRequest):Promise<ILoginResponse|AxiosError>{
    try {
        const response = await axios.post("/login", body);
        return response.data;
    } catch (error) {
        let err = error as AxiosError
        return err;
    }
}

export async function apiGetJobs(params: string | object) {
    try {
        const response = await axios.post(`/list` + params);
        return response.data;
    } catch (error) {
        let err = error as AxiosError
        return err;
    }
}

export async function apiGetDetail(id: string | undefined) {
    try {
        const response = await axios.post(`/detail/${id}`);
        return response.data;
    } catch (error) {
        let err = error as AxiosError
        return err;
    }
}