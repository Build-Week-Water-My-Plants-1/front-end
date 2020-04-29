export const getID = (id) => {
  //console.log("item",item)
  // dipsatch an action here to add an item
  return { type: "GET_ID", id: id };
};
