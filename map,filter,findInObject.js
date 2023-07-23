const student = [
    { id: 21, name: 'Khadiza' },
    { id: 31, name: 'Chowdhury' },
    { id: 41, name: 'Onny' },
    { id: 71, name: 'buri' },
    { id: 91, name: 'bura' }
];


const allStudent = student.map(value => value.id);
const allStudentName = student.map(value => value.name);

console.log(allStudent, allStudentName);

const oldStudent = student.filter(s => s.id>40);
console.log(oldStudent);

// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

const studentA = [
    { id: 21, name: 'Khadiza' },
    { id: 23, name: 'Chowdhury' },
    { id: 22, name: 'Onny' },
    { id: 24, name: 'buri' }
]


function getFields(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(studentA, "name");
console.log(result);