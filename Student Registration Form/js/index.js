// Calling Function For Show The Data 

showData();

// Add Data 

const addBtn = document.querySelector("#form button");

addBtn.onclick = () => {
    let student_name = document.getElementById("student_name").value;
    let father_name = document.getElementById("father_name").value;
    let mobile_no = document.getElementById("mobile_no").value;
    let email = document.getElementById("email").value;
    let photo = document.getElementById("photo").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let html = document.getElementById('html').checked?document.getElementById('html').value:'';
    let css = document.getElementById('css').checked?document.getElementById('css').value:'';
    let java_script = document.getElementById('java_script').checked?document.getElementById('java_script').value:'';
    let node_js = document.getElementById('node_js').checked?document.getElementById('node_js').value:'';

    if(student_name.trim() != 0 || father_name.trim() != 0 || mobile_no.trim() != 0 || gender.trim() != 0 || email.trim() != 0){

        let storage = localStorage.getItem("students");
        if (storage == null) {
            arr = [];
        }else{
            arr = JSON.parse(storage);
        }
        arr.push ({
            "name" : student_name,
            "father_name" : father_name,
            "mobile_no" : mobile_no,
            "email" : email,
            "photo" : photo,
            "gender": gender,
            "html": html,
            "css": css,
            "java_script": java_script,
            "node_js" : node_js
        });
        localStorage.setItem("students" , JSON.stringify(arr));
        alert("Data Added Suceesfully");
    }
    showData();
}

// Show The Data 

function showData() {
    
    let storage = localStorage.getItem("students");
    if(storage == null){
        arr = [];
    }else {
        arr = JSON.parse(storage);
    }
    if (arr) {
        for(let i=0; i<arr.length; i++){
            let addDiv = document.createElement('div');
            addDiv.className = "card";
            addDiv.innerHTML = `<div class="top"> <img src="${arr[i].photo}" alt=""> </div> <div> <div class="name"> <p class="p1"><b> ${arr[i].name} </b></p> </div> <div class="details"> <P><b>Fathers Name :</b> ${arr[i].father_name} </P>
            <P><b>Email :</b> ${arr[i].email} </P> <p><b>Gender :</b> ${arr[i].gender} </p> <p><b>Mobile No :</b> ${arr[i].mobile_no} </p> <p><b>Skills : </b> ${arr[i].html}  ${arr[i].css} ${arr[i].java_script}  ${arr[i].node_js}</p> </div> </div>`;
            document.getElementById("showData").appendChild(addDiv);
        }
    }
}