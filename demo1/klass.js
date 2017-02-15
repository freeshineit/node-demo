let student = require('./student');
let teacherM = require('./teacher');

// teacherM.add('shine shao');

function add (teacher,students){
    teacherM.add(teacher);

    students.forEach(function(item,index){
        student.add(item);
    });
}

exports.add = add ;