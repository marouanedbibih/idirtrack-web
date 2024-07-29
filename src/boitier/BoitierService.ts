import axiosClient from "@/api/axiosClient";
import { BasicResponse } from "@/types/Basics";


/**
 * Service to retrieve List of Pending sims for create a new boitier
 * @param page: number
 * @param size: number
 * @returns Promise<BasicResponse>
 * @throws Error
 */
export const getPendingSims = async (page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/stock-api/sim/pending/?page=${page}&size=${size}`);
        console.log("Response from retrievePendingSims", data);
        return data;
    } catch (error: any) {
        const { data } = error.response.data;
        console.error("Error from retrievePendingSims", data);
        throw data;
    }
}

/**
 * Service to retrieve searched List of Boitiers
 * @param query: string
 * @param page: number
 * @param size: number
 * @returns Promise<BasicResponse>
 * @throws Error
 */

export const searchPendingSims = async (query: string, page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/stock-api/sim/pending/search/?query=${query}&page=${page}&size=${size}`);
        console.log("Response from retrieveSearchSims", data);
        return data;
    } catch (error: any) {
        const { data } = error.response.data;
        console.error("Error from retrieveSearchSims", data);
        throw data;
    }
}