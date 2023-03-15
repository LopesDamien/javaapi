
function mafunction(){
    alert("APPEL API"); 

    fetch('http://192.168.65.126/courapi/DonneMoiLeContenuDeMonSite.php')
      .then((resp) => resp.json())
      .then(function(data) {
        // data est la réponse http de notre API.
        console.log(data);
        document.getElementById("arenne").innerHTML = data[0];
    })
      .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error);
      });
  }

  var bouton = document.querySelector("#lebouton");
  bouton.addEventListener("click", mafunction);