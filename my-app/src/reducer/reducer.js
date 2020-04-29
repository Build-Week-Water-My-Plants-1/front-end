export const initialState = [
  {
    id: 1,
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

    default:
      return state;
  }
};
