//SWITCH OUT FROM USING XML REQUESTS
getProfileInformation("frc2264");
function getProfileInformation(teamNumber) {
    var fff = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/simple?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let ok = new URL(fff);

        fetch(ok)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            
           var PIO = myJson;
           $('#team-name').html(PIO.nickname + " - " + PIO.team_number);
          });
    let eee = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/media/2020?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let okj = new URL(eee);

        fetch(okj)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
//    console.log(myJson[0].details.base64Image);
            var logo = new Image();
//            FIX IT SO THAT IT CHECKS FOR THE LOGO NOT JUST THE FIRST PHOTO
            if( myJson[0] == undefined) {
                var logoCont = document.getElementById('logo');
                var lastLogo = logoCont.lastChild;  
                logoCont.removeChild(lastLogo);
                //ADD A DEFAULT LOGO
            } else { 
            logo.src = 'data:image/png;base64,' + myJson[0].details.base64Image;
            var logoCont = document.getElementById('logo');
            var lastLogo = logoCont.lastChild;  
                //Just in case there is no last logo
                try { 
            logoCont.removeChild(lastLogo);
                } catch(err) {
                    
            }
            logoCont.appendChild(logo);
            }
        });
}

//Add fade ins