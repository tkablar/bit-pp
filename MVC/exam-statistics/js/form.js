
function collectData() {

    var subject = document.getElementById("subject").value;

    var nameOfStudent = document.getElementById("name-surname").value.trim().split(" ");

    var [studentName, ...studentSurnameArr] = nameOfStudent;

    var studentSurname = studentSurnameArr.join(" ");

    var grade = document.getElementById("grade").value;

    // console.log(studentName);
    // console.log(studentSurnameArr);
    // console.log(nameOfStudent);
    // console.log(studentSurname);


    var student = new Student(studentName, studentSurname);
    var subject1 = new Subject(subject);
    var exam = new Exam(subject1, student, grade);

    return exam;
}



function validateData() {
    var exam = collectData();

    // console.log(exam);

    if(document.getElementById("subject").value != "JavaScript" && document.getElementById("subject").value != "Web") {
        alert("Please select subject!");
        return;
    }

    if(document.getElementById("name-surname").value == ""
        || exam.student.name[0] !== exam.student.name[0].toUpperCase()
        || exam.student.surname[0] !== exam.student.surname[0].toUpperCase()) {
        
        alert("Both name and surname should be provided and both should start with capitals.");
        return;
            
    } 
    
    if(document.getElementById("grade").value == "" || document.getElementById("grade").value > 10 || document.getElementById("grade").value <= 0) {
        alert("Please enter numeric value from 1 to 10.");
        return;
    }

    updateList();
}

var examList = [];

function updateList() {

    var subject = document.getElementById("subject" ).value;
    var nameOfStudent = document.getElementById("name-surname").value;
    var grade = document.getElementById("grade").value;
    var passedOrNot = new Exam(subject, nameOfStudent, grade).hasPassed();

    // console.log(passedOrNot);
    var canAdd = true;

    for(var i = 0; i < examList.length; i++) {
        // console.log(examList);

        console.log("uslo je u for")
        if(subject == examList[i].subject && nameOfStudent == examList[i].name) {
            canAdd = false;
        }
    }

    if (canAdd) {
        if(passedOrNot) {
            $("#passed-list").append(`<li>${subject} ${nameOfStudent} ${grade}</li>`);
        } else {
            $("#failed-list").append(`<li>${subject} ${nameOfStudent} ${grade}</li>`);
        }

        examList.push({"subject": `${subject}`, "name" : `${nameOfStudent}`,"grade" : `${grade}`});
        updateStatistics();
    }

    

    
}

function updateStatistics() {

    var total = Number($('#counter').html());
    $("#counter").html(++total);

    var subject = document.getElementById("subject").value;
    var nameOfStudent = document.getElementById("name-surname").value;
    var grade = document.getElementById("grade").value;

    var passedOrNot = new Exam(subject, nameOfStudent, grade).hasPassed();
    var passed = Number($('#passed-counter').html());
    var failed = Number($("#failed-counter").html());

    if(passedOrNot) {
        $("#passed-counter").html(++passed);
        
    } else {
        $("#failed-counter").html(++failed);
    }

    var passPercent = Math.round(passed/total *100)
    var failPercent = Math.round(failed/total *100)

    $("#passed-percent").html(passPercent + "%");
    $("#failed-percent").html(failPercent + "%");

}