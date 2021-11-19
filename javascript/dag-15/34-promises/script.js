/*

PROMISES 101

*/

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