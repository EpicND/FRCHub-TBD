//SWITCH OUT FROM USING XML REQUESTS
var PIO;
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
            $(".team-location").html(PIO.city + ", " + PIO.state_prov);
          });
    let eee = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/media/2020?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let okj = new URL(eee);

        fetch(okj)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
//    console.log(myJson);
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
         let ddd = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/awards?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let okk = new URL(ddd);

        fetch(okk)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            $('.logo').css('border', '2px solid gray');
//            console.log(myJson);
            var awardArray = myJson;
            if(myJson.length == 1) { 
                $(".num-awards").html(myJson.length + " Award")
            } else {
                $(".num-awards").html(myJson.length + " Awards")
            }
            for(var awardIndex = 0; awardIndex < myJson.length; awardIndex++) { 
                if(myJson[awardIndex].award_type == 0) {
                    console.log("Chainmens Award Winner");
                    $('.logo').css('border', '2px solid gold');
                }
                   }
        });
    let ccc = "https://www.thebluealliance.com/api/v3/team/"+ teamNumber + "/years_participated?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
        let okl = new URL(ccc);

        fetch(okl)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            var yearLength = myJson.length;
            var lastYear = myJson[yearLength-1];
            var today = new Date();
            var date = today.getFullYear();
            
            if(lastYear == date) { 
                $(".years-active").html("Competing from " + myJson[0] + " - " + lastYear);
            } else {
                $(".years-active").html("Competed from " + myJson[0] + " - " + lastYear);
            }
            var numberLeft = myJson.length;
            for(var y = 0; y< myJson.length; y++) {
                console.log(numberLeft);
                numberLeft--;
//                console.log(numberLeft);
                console.log(myJson[numberLeft]);
                if(numberLeft == 0) {
                    
                }
            }
        });
}
