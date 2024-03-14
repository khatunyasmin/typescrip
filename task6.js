function Mark1(x, y) {
    return x * y;
}
function CalculateAverage(English, Science, Hindi, Accounting, Business_studies) {
    var totalMarks = Mark1(English, 1) + Mark1(Science, 1) + Mark1(Hindi, 1) + Mark1(Accounting, 1) + Mark1(Business_studies, 1);
    var numberOfSubjects = 5;
    var average = totalMarks / numberOfSubjects;
    return average;
}
var English = 80;
var Science = 75;
var Hindi = 90;
var Accounting = 85;
var Business_studies = 88;
var result = CalculateAverage(English, Science, Hindi, Accounting, Business_studies);
console.log("The average of 5 subjects is", result);
