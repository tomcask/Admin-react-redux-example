function gifts(state = [], action) {
  console.log("reducer gifts",action.type, action, state);
  const newstate = {...state};
  switch(action.type){
		case 'EDIT_CATEGORY':
			Object.keys(newstate).map((key)=>{
				newstate[key].category.map((val,i)=>{
					if(val===action.oldname){
						newstate[key].category[i] = action.name;
					}	
				});
			});
			return newstate;
		case 'ADD_GIFT':
			newstate[action.name] = {
				name: action.name,
				category:action.category,
				price: action.price
			}
			return newstate;
		case 'EDIT_GIFT':
			delete newstate[action.oldname];
			newstate[action.name] = {
				category: action.category,
				name: action.name,
				price: action.price
			};
			return newstate;
		case 'REMOVE_GIFT':
			delete newstate[action.name];
			return newstate
		default:
			return state;
	}
}

export default gifts;