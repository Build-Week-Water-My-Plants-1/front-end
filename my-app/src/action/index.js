import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getID = (id) => {
  return { type: "GET_ID", id: id };
};

export const deletePant = (id) => {
  return { type: "DELETE_PLANT", payload: id };
};

export const getPlantID = (plantID) => {
  return { type: "GET_PLANT_ID", plantID: plantID };
};

