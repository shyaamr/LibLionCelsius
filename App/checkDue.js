console.log(shyaamDue);

if (shyaamDue <= 0) {
  alert("Shyaam's book is due today")
  alert(storage.getItem("shyaam"))
}

function dateChange() {
  switch (idName) {
    case "shyaam":
      let shyaamDue = 0
      console.log(shyaamDue);
      break;
    default:
      console.log("no due time");  
}
