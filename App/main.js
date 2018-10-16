var storage = window.localStorage;
var shyaamDue

function updateLib(idName) {
  var element = document.getElementById(idName);
  storage.setItem(idName, element.value)
  console.log(storage.getItem(idName))
  dateChange()
  }

}
