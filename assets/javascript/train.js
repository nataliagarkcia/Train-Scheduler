//determines that the train counter start with 0
var trainCount = 0;

$(document).on("click", function(){

    //grabs the users inputs in each of the followings and asigns variables to each one
    var tName = $ ("#TrainName").val().trim();
    var dest = $ ("#destination").val().trim();
    var firstTrainT = $ ("#firstTrainTime").val().trim();
    var freq = $ ('#frequency').val().trim();

 

    //console logs all the previous inputs    
    console.log(tName);
    console.log(dest);
    console.log(firstTrainT);
    console.log(freq);

	 //store the values inside the local storage
	 localStorage.setItem("name",  tName);
	 localStorage.setItem("destination",  dest);
	 localStorage.setItem("train time",  firstTrainT);
	 localStorage.setItem("frequency", freq);

	 //empty the values
	  tName = $('#trainName').val("");
	  dest = $('#place').val("");
	  firstTrainT = $('#trainTime').val("");
	  freq = $('#freq').val("");

	 
	return false;
	});

	