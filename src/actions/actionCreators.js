// add comment
export function addCategory(nameCategory) {
  return {
    type: 'ADD_CATEGORY',
    nameCategory
  }
}

// remove comment

export function removeCategory(nameCategory, i) {
  return {
    type: 'REMOVE_CATEGORY',
    i,
    nameCategory
  }
}
