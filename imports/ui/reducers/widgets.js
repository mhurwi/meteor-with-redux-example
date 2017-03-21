function widgets(state = [], action) {
  switch (action.type) {
    case 'GET_WIDGETS':
      return action.payload;
    case 'CREATE_WIDGET':
      const { name, _id } = action.payload;

      return [
        ...state,
        { name, _id }
      ]
    default:
      return state
  }
}

export default widgets
