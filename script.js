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
            passed: true
        }

        array.push(newPerson);
        console.log(submissions);
        if (newPerson.score >= 60){
            newPerson.passed = true;
        }
        else{
            newPerson.passed = false;
        }

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
        console.log(result);
    }
    findSubmissionByName(submissions, 'Jill');

//     function findLowestScore(array) {
//         // trying to find lowest score related to other scores in the array
//         array.forEach(function(submission, index) {
//             console.log(submission, index);
//         })
//         array.forEach(function(submissions.score, index) {
//             console.log(submissions.score, index);

// }}};
// findLowestScore(submissions);
//     // console.log(submissions);

    function findAverageScore(array) {
        // math for finding averages
        var sum = 0;
        for (var i = 0; i < submissions.length; i++) {
        sum += submissions[i].score;
        }
        var average = sum / submissions.length;
        console.log(average);
    }
        findAverageScore(submissions);

    function filterPassing(array) {
        const passingScore = array.filter(submissions => submissions.score > 60);
        console.log(passingScore);
    }
    filterPassing(submissions);

    function filter90AndAbove(array) {
        const newArray = array.filter(submissions => submissions.score > 90);
        console.log(newArray);
    }
    filter90AndAbove(submissions);


















    
    // addSubmission(newPerson);
    // addSubmission = ('Phil', 60, '2020-01-22')


// function addSubmission(array, newName , newScore , newDate){
//     let newPerson =[
//         {
//             name: newName,
//             score: newScore,
//             date: newDate
//         }
//     ];
//     submissions = submissions.push(newPerson);
//     console.log(submissions);
// }
// addSubmission('Phil', 60, '2020-01-22');

// if (this.passed.value >= 60){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// function deleteSubmissionByIndex(array , index){
    
// }


// function addSubmission(array, newName , newScore , newDate){
//     let newPerson =[
//         {
//             name: 'Phil',
//             score: 60,
//             date: '2020-01-22',
//         }
//     ];
//     submissions = submissions.push(newPerson);
//     console.log(submissions);
//     if (submissions.passed >= 60){
//     return true;
//     }
//     else{
//     return false;
//     }
// }