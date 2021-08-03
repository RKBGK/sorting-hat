const students ={};

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const btnst = () => {
    document.querySelector("#btn-start").addEventListener("click", displaySort);   
    console.log("displaySort");     
};
const displaySort = () => {
    
    const sortsec =`<form class="frmName" id ="addStudent">
    <div class="btn btn-primary">
        <label for="student" class="studententry">Student</label>
        <input required type="text" class="studentName" id="student" placeholder="Enter name">
        <button type="submit" id= "newid" class="btn btn-primary">Sort</button>
    </div>
</form>`   
    console.log("displaySort");   
    
    renderToDom("#namesort",sortsec )
};

console.log ("the number i" + Math.floor(Math.random() * (4 - 1) + 1));
const getRandomArbitrary=()=>{
    const colnum = Math.floor(Math.random() * (4 - 1) + 1);
    let cardcol ="";
    switch (colnum) {
        case 1:
            cardcol = "red.img";
            break;
        case 2:
            cardcol = "blue.img";
            break;
        case 3:
            cardcol = "yellow.img";
            break;
        case 4:
            cardcol = "green.img";
    }
console.log (`the number is ${colnum} and  color is ${cardcol}`);
}

const  handleNewStudent = (event) => {
    
    console.log("handleButtonClick");
    const studentHouse = getRandomArbitrary();
    
    const newStudent = {
        name: "test",
        house:studentHouse,
        expelled:false
      };
    console.log(newStudent);
    // const selectedDiv = document.querySelector("#ct");
    // selectedDiv.innerHTML = "nona";
  
  };

const handleStudentSubmit = (event) => {
    event.preventDefault();
    const studentHouse = getRandomArbitrary();
    
    const newStudent = {
        name: "test",
        house:studentHouse,
        expelled:false
      };
    // const newStudent = {
    //   name: document.querySelector("#name").value,
     
  
    console.log(newStudent);
  };

const SubmitFormEvents = () => {
    const studentFormElement = document.querySelector("#addStudent");
    studentFormElement.addEventListener("submit", handleStudentSubmit);
  };


  const buttonEvents = (event) => {
    event.preventDefault();
    document.querySelector("#frmName").addEventListener("submit", handleButtonClick);   
    console.log("buttonevents");
    // const selectedDiv = document.querySelector("#ct");
    // selectedDiv.innerHTML = "Aha";
    // console.log("handleButtonClick");
    //handleButtonClick();
  };

  const  handleButtonClick = (event) => {
    console.log("handleButtonClick");
    const selectedDiv = document.querySelector("#ct");
    selectedDiv.innerHTML = "nona";
  
  };



btnst ();
SubmitFormEvents();