// How a event listner works??

function ownAddEventListner(typeofEvent,callbackFunction){

	var eventThatOccur = {
		eventType: "keypress",
		key: "S",
		durationPress: 3
	}

	if (eventThatOccur.eventType === typeofEvent) {
		callbackFunction(eventThatOccur);
	}
}

ownAddEventListner("keypress",function(e){
	console.log(e)
});