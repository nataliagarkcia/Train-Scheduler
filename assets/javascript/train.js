



//determines that the train counter start with 0
var trainCount = 0;

//global array that will keep all the inputs / objects
var trainItem = [];


//create a on click function that will run when click on search button
$('#runSearch').on("click", function(){

    //grabs the users inputs in each of the followings and asigns variables to each one

    var tName = $("#TrainName").val().trim();
    var dest = $ ("#destination").val().trim();
    var firstTrainT = $ ("#firstTrainTime").val().trim();
    var freq = $ ('#frequency').val().trim();
	



	
    //im storing the data inside the local storage
	localStorage.setItem("name",tName );
	localStorage.setItem("destination",dest );
	localStorage.setItem("frecuency",freq );
	localStorage.setItem("firstTrain",firstTrainT );

	//2var tr = $('<tr>')


	


	// First Time (pushed back 1 year to make sure it comes before current time)
	//var firstTimeConverted = moment(train.firstTrainT,"hh:mm");
	//console.log(firstTimeConverted);

		// Current Time
	//var currentTime = moment();
	//console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
	//difference time
	//var diffTime = moment().diff(moment(train.firstTrainT), "minutes");

	// Time apart (remainder)
	//var tRemainder = diffTime % (train.freq) ;
	//console.log(tRemainder)

	//var MinutesTillTrain = (train.freq) - tRemainder;
	//console.log("MINUTES TILL TRAIN: " + MinutesTillTrain);

	// Next Train
	//var nextTrain = moment().add(MinutesTillTrain, "minutes")
	//console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm")) 



     //store the values inside the local storage
    

    retrieve();

     //empty the values
    tName = $('#TrainName').val("");
    dest = $('#destination').val("");
    firstTrainT = $('#firstTrainTime').val("");
    freq = $('#frequency').val("");
    
    trainCount ++;

     
    return false;
    });


//retrieves the values from the local storage
function retrieve () {
 

    $('#display').append('<tr>')
    for (var i = 0; i < localStorage.length; i++) { 
        console.log("HERE")
    $('#display').append( '<td>' + localStorage.getItem(localStorage.key(i)) + '</td>');
    }
    $('#display').append('</tr>')
}
