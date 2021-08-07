import {
    students
} from "./data.js";

const studentsExpel = [];
const houses = [{
        houseN: "Gryffindor",
        colorN: "#00ffff",
        img: "./images/Gryffindor.png"
    },
    {
        houseN: "Hufflepuff",
        colorN: "#7fff00",
        img: "./images/Hufflepuff.png"
    },
    {
        houseN: "Ravenclaw",
        colorN: "#ff1493",
        img: "./images/Ravenclaw.png"
    },
    {
        houseN: "Slytherin",
        colorN: "#ffd700",
        img: "./images/Slytherin.png"
    }

]
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const randomHouse = () => {

    const randomIndex = houses[Math.floor(Math.random() * houses.length)];
    return randomIndex;
    //return houses[Math.floor(Math.random(Object.keys(houses).length))];
}
const btnst = () => {
    document.querySelector("#btn-start").addEventListener("click", displaySort);
    document.querySelector("#namesort").addEventListener("submit", handleStudentSubmit);
    document.querySelector("#studentNotExpelled").addEventListener("click", expelCard);
};
const displaySort = () => {

    const sortsec = `<form class="frmName" id ="addStudent">
    <div class="btn btn-primary">
        <label for="student" class="studententry">Student</label>
        <input required type="text" class="studentName" id="student" placeholder="Enter name">
        <button type="submit" id= "newid" class="btn btn-primary">Sort</button>
    </div>
</form>`
    console.log("displaySort");

    renderToDom("#namesort", sortsec)
};

const handleStudentSubmit = (event) => {
    event.preventDefault();
    const {houseN, colorN, img} = randomHouse();
    const newStudent = {
        name: document.querySelector("#student").value,
        houseN: houseN,
        colorN: colorN,
        img: img,
        expelled: 0
    };
    console.log("newStudent");
    console.log(newStudent);
    students.push(newStudent);
    cardBuilder(students, "#studentNotExpelled");

    console.log(event);
};

const cardBuilder = (cardArray, divid) => {
    let domString = "";
    let imageloc = "";
    cardArray.forEach((card, i) => {
        

        domString += `      
      <div class="card" style="width: 18rem;background-color:${card.colorN};" id="notexpel">
        <img src="${card.img}" class="card-img-top" width="30" height="200" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.houseN}</p>
          <button type="button" id=${i} class="btn btn-primary">Delete</button>
        </div>
      </div>
      `;
    });
    renderToDom(divid, domString);
    console.log(domString);
};

const cardBuilderExpel = (cardArray, divid) => {
    let domString = "";
    let imageloc = "";
    cardArray.forEach((card, i) => {

        domString += `
      <div class="card" style="width: 18rem;" id="notexpel">
        <img src="./images/nonamearmy.png" class="card-img-top" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text"> Aha reveal yourself</p>
        </div>
      </div>
      `;
    });
    renderToDom(divid, domString);
};

const filterStudents = (array, expelstat) => {
    return array.filter((studentObject) => student.expelled === expelstat);
};
const expelCard = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    console.log(targetId);
    students[targetId].expelled = 1;
    console.log(students[targetId].expelled);
    studentsExpel.push(students[targetId]);
    if (targetType === "button") {
        students.splice(targetId, 1);
    }

    cardBuilder(students, "#studentNotExpelled");
    cardBuilderExpel(studentsExpel, "#expelled");

    // const safeStudents = filterStudents(students,0);
    // const expelledtudents = filterStudents(students,1);
    // cardBuilder(safeStudents,"#studentNotExpelled");
    // cardBuilder(expelledtudents,"#expelled");
    // safeStudents.forEach((student,i) => {
    //     console.log(student)
    // });
    // expelledtudents.forEach((student,i) => {
    //     console.log(student)
    // });
    //cardBuilder(students,"#studentNotExpelled");
    //if (targetType === "button") {
    //   students.splice(targetId, 1);
    //cardBuilder(students,"#studentNotExpelled");
    // }
};


btnst();
cardBuilder(students, "#studentNotExpelled");