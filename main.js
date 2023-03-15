function mafunction(){
   
  fetch('http://192.168.65.126/courapi/DonneMoiLeContenuDeMonSite.php').then((resp) => resp.json())
  .then(function(data) {
     
      console.log(data);
      UpdateDiv("arenne",data[0]);
     
  })
  .catch(function(error) {
      console.log(error);
  });
}
function UpdateDiv(id,text){
  var e = document.getElementById(id).innerHTML = text;
}
function toto() {
  setInterval(mafunction,2000);
}
