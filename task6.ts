function Mark1(x: number, y: number) {
    return x * y;
}

function CalculateAverage(English: number, Science: number, Hindi: number, Accounting: number, Business_studies: number): number {
    const totalMarks = Mark1(English, 1) + Mark1(Science, 1) + Mark1(Hindi, 1) + Mark1(Accounting, 1) + Mark1(Business_studies, 1);
    const numberOfSubjects = 5;
    const average = totalMarks / numberOfSubjects;
    return average;
}

var English: number = 80;
var Science: number = 75;
var Hindi: number = 90;
var Accounting: number = 85;
var Business_studies: number = 88;

var result: number = CalculateAverage(English, Science, Hindi, Accounting, Business_studies);

console.log("The average of 5 subjects is", result);