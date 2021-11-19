/*

PROMISES 101

*/


/*
const teacherIsNice = false;

const willWeGetTheAnswersToTheExam  = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(teacherIsNice){
				const answer = [3,1,4,2];
				resolve(answer);
			}

			else{
				reject("AINT NO BODY GOT TIME FOR THAT");
			}
		}, 3000);

		
	});
}

willWeGetTheAnswersToTheExam()
.then((data) => {
	alert("Promise fulfilled");
	console.log("Here's the answers", data)
})
.catch((err) => {
	alert("Promise Unfulfilled");
	console.log("Reason:" ,err);
});
*/


const getJSON = (url) => {

	return new Promise((resolve, rejeect) => {
			// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Attach a event listener to the request
	request.addEventListener('readystatechange', () => {
		// Check if readyState is 4 (=== DONE)
		if (request.readyState === 4) {

			// Was request successful (200 = OK)?
			if (request.status === 200) {
				// Request returned successful!
				console.log("Request was OK");

				// take a STRING and PARSE it into a JavaScript Object (Array)
				const data = JSON.parse(request.responseText);

				resolve(data)

			} else {
				// Something went wrong with the request
				console.log("Request was *NOT* OK!");

				rejeect("ERROR! Could not get DATA")
			}
		}
	});

	// Set request to GET data from url
	request.open('GET', url);

	// Send request
	request.send();

	// Done?
	console.log("Request sent!");

	})

}


getJSON('data/dogs.json')
	.then(dogs => {
		console.log("GOT DOGS", dogs)
	})
	.catch(err => {
		console.log(err)
	})