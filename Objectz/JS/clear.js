function clearBook(idName) {
  storage.setItem(idName, " ")
  document.getElementById(idName).value = storage.getItem(idName) 
}
