export default (state, action) => {
  const { payload, type } = action;
  console.log(state);
  console.log(payload);
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "APELLIDO":
      return {
        ...state,
        apellido: payload,
      };
    default:
      return state;
  }
};
