function categories(state = [], action) {

	let newState = [...state];
	switch(action.type){
		case 'FETCH_CATEGORIES':
			return action.categories
		case 'EDIT_CATEGORY':
			newState[action.i] = action.name;
			return newState;
		case 'REMOVE_CATEGORY':
			return [
         ...state.slice(0,action.i),
         ...state.slice(action.i + 1)
       ]
    case 'ADD_CATEGORY':
      return [...state, action.nameCategory];
    case 'ADD_GIFT':
    	let res = 0;
      action.category.map((key)=>{
			  res = state.filter((el)=> el===key)
			  if (!res.length){
			    newState = [...newState, key ];
			  }
			});
  		return newState
		default:
			return state;
	}
}

export default categories;