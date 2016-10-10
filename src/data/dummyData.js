
const simplyData = {
  "Home" : {
    items: {
      'Carne Asada': { name: 'Carne Asada', price: 7 },
      'Pollo':{ name: 'Pollo', price: 6 },
      'Carnitas':{ name: 'Carnitas', price: 6 }
    }
  },'Burgers': {
    items: {
      'Buffalo Bleu':{ name: 'Buffalo Bleu', price: 8 },
      'Bacon':{ name: 'Bacon', price: 8 },
      'Mushroom and Swiss':{ name: 'Mushroom and Swiss', price: 6 }
    }
  },'Drinks':{
    items: {
      'Lemonade':  { name: 'Lemonade', price: 3 },
      'Root Beer': { name: 'Root Beer', price: 4 },
      'Iron Port': { name: 'Iron Port', price: 5 }
    }
  }
}

exports.getAll = function () {
  return simplyData
}

exports.getCategories = function(){
 return Object.keys(simplyData);
}


exports.getItems = function(data = simplyData){
  let items = {};
  Object.keys(data).map(function(k,i){ // eslint-disable-line  array-callback-return
    Object.keys(data[k].items).map(function(key,j,c){ // eslint-disable-line  array-callback-return
      data[k].items[key].category=[k];
      items[key]= data[k].items[key]
    })
  });
  return items;
}

exports.lookupCategory = function (name) {
  return simplyData[name]
} 

exports.lookupItem = function (category, item) {
  return simplyData[category].items[item]
}
