/*

PROMISES 101

*/

const teacherIsNice = true;

const willWeGetTheAnswersToTheExam  = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(teacherIsNice){
				resolve();
			}

			else{
				reject();
			}
		}, 3000);

		
	});
}

willWeGetTheAnswersToTheExam()
.then(() => {
	alert("Promise fulfilled");
})
.catch(() => {
	alert("Promise UNfulfilled");
});