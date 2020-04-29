export const initialState = [
  {
    id: 1,
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ID":
      console.log("suc!");
      return [
        {
          id: action.id,
        },
      ];
    //   case "TOGGLE_TOGO":
    //     return state.map((todo) =>
    //       todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //     );
    //   case "CLEAR_TOGO":
    //     const newState = state.filter((i) => i.completed === false);
    //     return newState;

    default:
      return state;
  }
};
