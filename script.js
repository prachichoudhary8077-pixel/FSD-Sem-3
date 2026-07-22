function saveData(){
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let branch = document.getElementById("branch").value;
    if(roll=="" || name=="" || branch==""){
        alert("Fill All The Fields");
        return;
    }
    let student = JSON.parse(localStorage.getItem("student")) || [];
    student.push({
        roll: roll,
        name: name,
        branch: branch,
    });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Data Saved");
    document.getElementById("roll").value="";
    document.getElementById("name").value="";
    document.getElementById("branch").value="";
}
function showData(){

}