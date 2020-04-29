import { axiosWithAuth } from '../utils/axiosWithAuth'


// export const fetchPlants = (props) => dispatch => {
//   dispatch({ type: 'FETCHING_PLANTS' })
//   axiosWithAuth()
//   .get(`/api/${props.id}/plants`)
//   .then(res => addPlantData(res.data))
//   .catch(err => console.log(err))
// }

export const getID = id => {
  return { type: "GET_ID", id: id };
};

export const deletePlant = id => {
  return { type: 'DELETE_PLANT', payload: id }
}

export const plantUpdate = task => {
  return { type: 'UPDATE_PLANT', payload: task}
}


