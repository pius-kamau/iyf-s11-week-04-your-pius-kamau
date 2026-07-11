
// STUDENT GRADE TRACKER


let allStudents = [];

function addStudent(name, grades) {
    let student = {
        name: name,
        grades: grades
    };
    allStudents.push(student);
    console.log('Added: ' + name);
}

function findStudent(name) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].name === name) {
            return allStudents[i];
        }
    }
    return null;
}

function getAverage(name) {
    let student = findStudent(name);
    if (student === null) {
        return null;
    }
    
    let total = 0;
    let count = 0;
    
    for (let subject in student.grades) {
        total = total + student.grades[subject];
        count++;
    }
    
    return total / count;
}

function getClassAverage(subject) {
    let total = 0;
    let count = 0;
    
    for (let i = 0; i < allStudents.length; i++) {
        let student = allStudents[i];
        if (student.grades[subject] !== undefined) {
            total = total + student.grades[subject];
            count++;
        }
    }
    
    if (count === 0) {
        return 'No grades found';
    }
    
    return total / count;
}

function getTopStudent() {
    let top = null;
    let highest = -1;
    
    for (let i = 0; i < allStudents.length; i++) {
        let student = allStudents[i];
        let avg = getAverage(student.name);
        
        if (avg > highest) {
            highest = avg;
            top = student;
        }
    }
    
    return top;
}

function getStruggling() {
    let result = [];
    
    for (let i = 0; i < allStudents.length; i++) {
        let student = allStudents[i];
        let avg = getAverage(student.name);
        
        if (avg < 70) {
            result.push(student);
        }
    }
    
    return result;
}

function getLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function makeReportCard(name) {
    let student = findStudent(name);
    if (student === null) {
        return 'Student not found';
    }
    
    let avg = getAverage(name);
    let letter = getLetterGrade(avg);
    
    let report = '\n\n';
    report = report + 'REPORT CARD\n';
    report = report + student.name + '\n';
    report = report + '\n';
    
    for (let subject in student.grades) {
        let grade = student.grades[subject];
        let gradeLetter = getLetterGrade(grade);
        report = report + subject + ': ' + grade + ' (' + gradeLetter + ')\n';
    }
    
    report = report + '\n';
    report = report + 'Average: ' + avg + '\n';
    report = report + 'Grade: ' + letter + '\n';
    report = report + '\n';
    
    return report;
}

console.log('\n GRADE TRACKER TESTS ');

addStudent('Alice', { math: 95, english: 88, science: 92 });
addStudent('Bob', { math: 72, english: 85, science: 78 });
addStudent('Charlie', { math: 60, english: 65, science: 58 });

console.log('\nAverages:');
console.log('Alice: ' + getAverage('Alice'));
console.log('Bob: ' + getAverage('Bob'));
console.log('Charlie: ' + getAverage('Charlie'));

console.log('\nClass averages:');
console.log('Math: ' + getClassAverage('math'));
console.log('English: ' + getClassAverage('english'));
console.log('Science: ' + getClassAverage('science'));

let topStudent = getTopStudent();
console.log('\nTop student: ' + topStudent.name);

let strugglingStudents = getStruggling();
console.log('Needs help:');
for (let i = 0; i < strugglingStudents.length; i++) {
    console.log('  ' + strugglingStudents[i].name);
}

console.log(makeReportCard('Alice'));