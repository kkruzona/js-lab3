let submissions =[
    {
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        passed: true
    },
    {
        name: 'Joe',
        score: 77,
        date: '2018-05-14',
        passed: true
    },
    {
        name: 'Jack',
        score: 59,
        date: '2019-07-05',
        passed: false
    },
    {
        name: 'Jill',
        score: 88,
        date: '2020-04-22',
        passed: true
    }
];

for(let submission of submissions){
    console.log(
        `Name: ${submission.name} 
        Score: ${submission.score} 
        Date: ${submission.date} 
        Passed: ${submission.passed}`)
}

function addSubmission(array, newName, newScore, newDate) {
        let newPerson = {
            name: newName,
            score: newScore,
            date: newDate,
            passed: newScore >= 60 //shorthand way to do the true/false rather than the if statments 
            //for passed because everything evaluates to true or false anyways
        }

        array.push(newPerson);
//         console.log(submissions);
//         if (newPerson.score >= 60){
//             newPerson.passed = true;
//         }
//         else{
//             newPerson.passed = false;
//         }
    }
    addSubmission(submissions, 'Phil', 65, '2020-01-22');


    function deleteSubmissionByIndex(array, index) {
        array.splice(index, 1);
    }
    deleteSubmissionByIndex(submissions, 1);
    console.log(submissions);


    function deleteSubmissionByName(array, name) {
        const index = array.findIndex(submission => submission.name === name);
        array.splice(index, 1);

    }
    deleteSubmissionByName(submissions, 'Jack');
    console.log(submissions);


    function editSubmission(array , index , score) {
        array[index].score = score;
        if (array[index].score >= 60){
            array[index].passed = true;
        }
        else{
            array[index].passed = false;
        }
    }
    editSubmission(submissions, 1, 50);
    console.log(submissions);

    function findSubmissionByName(array , name) {
        const result = array.find(submission => submission.name === name);
        return result
    }
    findSubmissionByName(submissions, 'Phil');

    function findLowestScore(array) {
    let lowestScore = array[0].score;//better to use a real value in the array and the first one is the best starting point
    let lowestScoreResult;
    array.forEach(element => {
        if(element.score < lowestScore){
            lowestScore = element.score;
            lowestScoreResult = element;
        }
    })
        return lowestScoreResult
    }
findLowestScore(submissions);

    function findAverageScore(array) {
        // math for finding averages
        var sum = 0;
        for (let i = 0; i < submissions.length; i++) { //not using var anymore
        sum += submissions[i].score;
        }
        var average = sum / submissions.length;
        return average //very important to pay attention to if the question is asking for return or console
    }
        findAverageScore(submissions);

    function filterPassing(array) {
        const passingScore = array.filter(submissions => submissions.score >= 60);
        return passingScore
    }
    filterPassing(submissions);

    function filter90AndAbove(array) {
        const newArray = array.filter(submissions => submissions.score >= 90);
        return newArray;
    }
    filter90AndAbove(submissions);
