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

function getAwards(teamNumber, teamYear) {
             let ddd = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/awards/" + teamYear +"?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let okk = new URL(ddd);

        fetch(okk)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
            var awardDiv = document.getElementById("numAwards");
            if(myJson.length == 1) {
                awardDiv.innerHTML = "In " + teamYear + ", team " + name + " won " + myJson.length + " award";
            } else { 
            awardDiv.innerHTML= "In " + teamYear + ", team " + name + " won " + myJson.length + " awards";
            }
            
            
            $(".awardList").empty();
            for(var y = myJson.length; y>-1; ) {
                console.log(y);
                var row = document.createElement('div');
                row.classList.toggle("row");
                for(c = 0; c<4; c++) { 

                        
                        var indBox = document.createElement('div');
                        indBox.classList.toggle("season-ind");
                        var post = document.createElement('div');
                        post.classList.toggle("post");
                        post.classList.toggle("inline-centering");


                            var a = document.createElement('a');
                            a.classList.toggle("post-year");
                            a.classList.toggle("fw");
                            post.appendChild(a);

                            var a = document.createElement('a');
                            a.classList.toggle("post-year");
                            var br = document.createElement("br");
                            post.appendChild(br);
                            post.appendChild(a);
                            
                      indBox.appendChild(post);
                        row.appendChild(indBox);
                       
                    }
                    y=y-4; 
                    
                }
                
                
                var box = document.getElementById('awardList');
                box.appendChild(row);

//              
            });
//            makeTextRight();
        

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
getAwards("frc" + name, year);
//document.getElementById("myImg").src = "";
