export const selectedOrRemove = (id, selectedItems) => {
  //if image id doesn't exist add it else remove it
  const index = selectedItems.indexOf(id);
  if (index > -1) {
    selectedItems = selectedItems.filter((item) => item !== id);
  } else {
    selectedItems.push(id);
  }
  return selectedItems;
};
