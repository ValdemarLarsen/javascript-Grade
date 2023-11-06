let classRoom = {
    whiteBoard: 'normal',
    colorOfWalls: 'white',
    students: [
        {
            fullName: 'John Doe',
            age: '12',
            grade: '8',
            gradeNumber: 10,
            electronics: [
                {
                    brand: 'iphone',
                    model: '8'
                }
            ]
        },
        {
            fullName: 'Jane Doe',
            age: '13',
            grade: '6',
            gradeNumber: 8,
            electronics: [
                {
                    brand: 'iphone',
                    model: '9'
                }
            ]
        },
        {
            fullName: 'Doe Doe',
            age: '11',
            grade: '3',
            gradeNumber: 7,
            electronics: [
                {
                    brand: 'iphone',
                    model: '10'
                }
            ]
        }
    ],
    teachers: [
        {
            fullName: 'Eli',
            yearsOfExperience: '12',
            salary: '10'
        },
        {
            fullName: 'Elsen',
            yearsOfExperience: '5',
            salary: '20'
        },
        {
            fullName: 'Elisa',
            yearsOfExperience: '30',
            salary: '100'
        }
    ]
};

function getGrades() {
    let grades = classRoom.students.map(student => student.gradeNumber); // maps classRoom to get all the grades.
    console.log('Grades:', grades); // Print the array to console.

    let total = grades.reduce((sum, grade) => sum + grade, 0); // Takes all the grades from the variabel and then we sum it up.
    let average = total / grades.length; // Calculates the average grade

    return average;
}

let averageGrade = getGrades();
console.log('Average Grade:', averageGrade); // Logger the average grade to console.
