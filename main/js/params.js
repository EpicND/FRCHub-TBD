
function directLink(){
if(document.getElementById('in-3').value !== "" && isTeam == true){
  window.location.href = 'main/profile.html'+'?teamID=' + document.getElementById("in-3").value;
}

}