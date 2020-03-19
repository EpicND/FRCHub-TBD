let params = new URLSearchParams(document.location.search.substring(1))
let year = params.get("postID"); 
let name = params.get("teamID"); 
console.log(name);
window.onload = function(){
var a = document.getElementById("title");
 document.getElementById("title").innerHTML = "Team " + name + "'s " + year + " season";
//a.classList.toggle("heloo");
};



function getVideo(teamNumber, teamYear) { 
    
//    a.innerHTML = "Team " + name + "'s " + year + " season";

let eee = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/media/" + teamYear + "?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let okj = new URL(eee);

        fetch(okj)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
            for(p=0; p<myJson.length; p++) { 
                if(myJson[p].type == "youtube") { 
                    console.log("https://youtube.com/embed/" + getId(myJson[p].view_url));
                   var viddiv = document.getElementById('vids');
                    var video = document.createElement('iframe');
                    viddiv.appendChild(video);
                    video.src = "https://youtube.com/embed/" + getId(myJson[p].view_url);
//                    break;
                }
            }
        });
}

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
//    console.log(match && match[2].length === 11);
    
}
    


getVideo("frc" + name, year);
//document.getElementById("myImg").src = "";
