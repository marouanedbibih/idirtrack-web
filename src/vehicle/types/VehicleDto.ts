export interface Vehicle {
    id: number | null;
    matricule: string;
    type: string;
    client?: Client
}

export interface Client {
    id: string;
    name: string;

}

export interface VehicleRequest {
    matricule: string;
    type: string;
    clientMicroserviceId: number | null;
    boitiersIds: number[];
  }