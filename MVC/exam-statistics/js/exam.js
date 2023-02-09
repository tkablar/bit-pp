class Exam {
    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }
    
    getExamInfo = function() {
        return `${this.subject.getSubjectName()} ${this.student.getStudentData()}`
    }

    hasPassed = function() {
        if(this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }
}