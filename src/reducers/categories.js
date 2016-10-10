function categories(state = [], action) {
  console.log("reducer categories\n\n", state, action);

	switch(action.type){
		case 'FETCH_CATEGORIES':
			return action.categories
		case 'EDIT_CATEGORY':
			const newState = [...state];
			newState[action.i] = action.name;
			return newState;
		case 'REMOVE_CATEGORY':
			return [
         ...state.slice(0,action.i),
         ...state.slice(action.i + 1)
       ]
    case 'ADD_CATEGORY':
      return [...state, action.nameCategory];
		default:
			return state;
	}
}

export default categories;