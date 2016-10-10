// add category
export function fetchCategories(categories) {
  return {
    type: 'FETCH_CATEGORIES',
    categories,
    idx: categories.length
  }
}


// add category
export function addCategory(nameCategory) {
  return {
    type: 'ADD_CATEGORY',
    nameCategory
  }
}

// edit category
export function editCategory(name, i, oldname) {
  return {
    type: 'EDIT_CATEGORY',
    i,
    name,
    oldname
  }
}

// remove category

export function removeCategory(nameCategory, i) {
  return {
    type: 'REMOVE_CATEGORY',
    i,
    nameCategory
  }
}

export function fetchGifts(gifts) {
  return {
    type: 'FETCH_GIFT',
    gifts
  }
}

// add category
export function addGift(name, price, category) {
  return {
    type: 'ADD_GIFT',
    name,
    price,
    category
  }
}

// edit category
export function editGift(name,price, category, oldname, i) {
  return {
    type: 'EDIT_GIFT',
    i,
    name,
    oldname,
    price,
    category

  }
}

// remove category

export function removeGift(name, i) {
  return {
    type: 'REMOVE_GIFT',
    i,
    name
  }
}