function whenClicked() {
    //clearing the large city and capital fields
    let lgtcity = document.getElementById('lrgCity');
    let capital = document.getElementById('capital');
    lgtcity.innerHTML = "";
    capital.innerHTML = "";
    
    let nameOfState = document.getElementById("citi").value;
    let upprCaseStateName = nameOfState ? nameOfState.trim().toUpperCase() : '';
    //check empty input
    if (upprCaseStateName === '' || upprCaseStateName.trim() === '') {
        alert("PLEASE ENTER A STATE");
        return;
    }

    //Server Interaction with XMLHttpRequest
    const http = new XMLHttpRequest();
    const url = "http://services.groupkt.com/state/get/USA/all";
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        //Checkign for ready state and status 
        if (http.readyState === 4 ) {
            //state change
            if (http.status !== 200) {
                //error
                alert('REQUEST FAILED. TRY AGAIN.');
                return;
            } else {
                //success
                //Declarations
                let parsedRes = http.responseText ? JSON.parse(http.responseText) : null;
                let restResp = parsedRes ? parsedRes.RestResponse : null;
                let totalStates = restResp ? restResp.result.length : 0;
                let stateFound = false;
                //Checking the result array from JSON for valid State
                for (let indx = 0; indx < totalStates; indx++) {
                    let stateAbbr = restResp.result[indx].abbr ? restResp.result[indx].abbr.toUpperCase() : '';
                    let stateName = restResp.result[indx].name ? restResp.result[indx].name.toUpperCase() : '';
                    if (upprCaseStateName === stateAbbr || upprCaseStateName === stateName) {
                        stateFound = true;
                        if (restResp.result[indx].largest_city === undefined) {
                            lgtcity.innerHTML = "NOT FOUND";
                        } else {
                            lgtcity.innerHTML = restResp.result[indx].largest_city.toUpperCase();
                        }
                        capital.innerHTML = restResp.result[indx].capital.toUpperCase();
                        break;
                    }
                }

                //Alerts invalid state entry 
                if (stateFound === false) {
                    alert("PLEASE ENTER A VALID STATE");
                }
            }
            
        }
    }
}