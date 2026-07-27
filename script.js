const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const search = document.getElementById("search");

let students = JSON.parse(localStorage.getItem("students")) || [];

// Show Data on Page Load
displayStudents(students);

// Add Student
form.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        email: document.getElementById("email").value,
        semester: document.getElementById("semester").value,
        section: document.getElementById("section").value

    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents(students);

    form.reset();

});

// Display Function

function displayStudents(data){

    studentList.innerHTML = "";

    if(data.length===0){

        studentList.innerHTML =

        `<tr>

            <td colspan="4">

            No Student Found

            </td>

        </tr>`;

        return;

    }

    data.forEach((student,index)=>{

        studentList.innerHTML +=

        `

        <tr>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.semester}</td>

            <td>

                <button
                class="delete"
                onclick="deleteStudent(${index})">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// Delete Student

function deleteStudent(index){

    if(confirm("Do you want to delete this student?")){

        students.splice(index,1);

        localStorage.setItem("students",JSON.stringify(students));

        displayStudents(students);

    }

}

// Search Student

search.addEventListener("keyup",function(){

    const value = search.value.toLowerCase();

    const filteredStudents = students.filter(function(student){

        return(

            student.name.toLowerCase().includes(value) ||

            student.roll.toLowerCase().includes(value)

        );

    });

    displayStudents(filteredStudents);

});
function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString("en-IN");

    const date = now.toLocaleDateString("en-IN",{

        weekday:"long",

        day:"numeric",

        month:"long",

        year:"numeric"

    });

    document.getElementById("liveTime").innerHTML =
    "🕒 " + time;

    document.getElementById("liveDate").innerHTML =
    "📅 " + date;

}

updateClock();

setInterval(updateClock,1000);