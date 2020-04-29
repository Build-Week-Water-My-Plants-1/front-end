export const initialState = [
  {
    id: 1,
    plantID: "default",
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ID":
      //console.log("suc!");
      return [
        {
          id: action.id,
        },
      ];
    case "GET_PLANT_ID":
      console.log("suc!");
      return { ...state, plantID: action.plantID };

    default:
      return state;
  }
};
