const students = [];
const studentsExpel = [];
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

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

console.log("the number i" + Math.floor(Math.random() * (4 - 1) + 1));
const getRandomArbitrary = () => {
    const colnum = Math.floor(Math.random() * (4 - 1) + 1);
    let cardcol = "";
    switch (colnum) {
        case 1:
            cardcol = "Gryffindor";
            break;
        case 2:
            cardcol = "Hufflepuff";
            break;
        case 3:
            cardcol = "Ravenclaw";
            break;
        case 4:
            cardcol = "Slytherin";
      
    }
    return cardcol;
    console.log(`the number is ${colnum} and  color is ${cardcol}`);
}


const handleStudentSubmit = (event) => {
    event.preventDefault();
    const studentHouse = getRandomArbitrary();
    let cardimg =  "\\images\\"+studentHouse+".gif";

    const newStudent = {
        name: document.querySelector("#student").value,
        house: studentHouse,
        image: cardimg,
        expelled: 0
    };
    students.push(newStudent);
    cardBuilder(students,"#studentNotExpelled");

    console.log(newStudent);
};

const cardBuilder = (cardArray, divid) => {
    let domString = "";
let imageloc="";
    cardArray.forEach((card, i) => {
        // let imageloc=card.house;
        // console.log = imageloc;
      domString += `
      <div class="card" style="width: 18rem;" id="notexpel">
        <img src="\images\${image} class="card-img-top" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.house}</p>
          <button type="button" id=${i} class="btn btn-primary">Delete</button>
        </div>
      </div>
      `;
    });
    renderToDom(divid, domString);
};

const cardBuilderExpel = (cardArray, divid) => {
    let domString = "";
let imageloc="";
    cardArray.forEach((card, i) => {
        // let imageloc=card.house;
        // console.log = imageloc;
      domString += `
      <div class="card" style="width: 18rem;" id="notexpel">
        <img src="images/nonamearmy.gif class="card-img-top" alt="${card.name}">
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
    students[targetId].expelled=1;
    console.log(students[targetId].expelled);
    studentsExpel.push(students[targetId]);
    if (targetType === "button") {
        students.splice(targetId, 1);
    }

    cardBuilder(students,"#studentNotExpelled");
    cardBuilderExpel(studentsExpel,"#expelled");

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
cardBuilder(students,"#studentNotExpelled");