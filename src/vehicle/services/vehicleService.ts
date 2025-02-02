import axiosClient from "@/api/axiosClient";
import { BasicResponse } from "@/types/Basics";
import { VehicleRequest } from "../types/VehicleDto";

export const getVehicleListApi = async (page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/vehicle-api/vehicles/?page=${page}&size=${size}`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getVehicleById = async (id: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/vehicle-api/vehicles/${id}/`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * GET BOITIER NOT ASSIGNED TO A VEHICLE
 * 
 * This function is used to call the API to get all boitiers that are not assigned to a vehicle.
 * 
 * @api GET /vehicle-api/boitier/unassigned/
 * @param page number
 * @param size number
 * @returns BasicResponse
 * @throws Error
 */

export const getBoitierNotAssigned = async (page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/vehicle-api/boitier/unassigned/?page=${page}&size=${size}`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * CREATE NEW VEHICLE
 *@description
 * This function is used to call the API to create a new vehicle.
 * 
 * @api POST /vehicle-api/vehicles/
 * @param vehicleRequest VehicleRequest
 * @returns BasicResponse
 * @throws Error
 */

export const createVehicleAPI = async (vehicleRequest: VehicleRequest): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.post(`/vehicle-api/vehicles/`, vehicleRequest);
        return data;
    } catch (error:any) {
        console.error(error);
        throw error.response.data;
    }

}