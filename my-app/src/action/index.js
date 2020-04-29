import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchPlants = () => dispatch => {
    dispatch({ type: 'FETCHING_PLANTS' })
        axiosWithAuth()
        .get(`/api/${id}/plants`)
            //make a .get request to recieve the plants that are added to display on the dashboard
}

export const getID = (id) => {
  return { type: "GET_ID", id: id };
};

export const deletePant = id => {
    return { type: 'DELETE_PLANT', payload: id }
}

export const plantUpdate = task => {
    return { type: 'UPDATE_PLANT', payload: task}
}
