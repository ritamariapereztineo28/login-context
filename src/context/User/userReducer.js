export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "LASTNAME":
      return {
        ...state,
        lastname: payload,
      };
    default:
      return state;
  }
};
