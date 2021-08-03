const students ={};
const housecol ={
    Gryffindor:"Red",
    Hufflepuff:"Blue",
    Ravenclaw:"Yellow",
    Slytherin:"Green"
}

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const btnst = () => {
    document.querySelector("#nameEntry").addEventListener("click", displaySort);   
    console.log("displaySort");  
    // document.querySelector("#frmName").addEventListener("submit", handleNewStudent); 
};

const btnstudent = () => {
    document.querySelector("#frmName").addEventListener("submit", handleNewStudent);  
    console.log("btnstudent");  
  
};
const displaySort = () => {
    
    const sortsec =`<form id="frmName" >
    <div class="btn btn-primary">
        <label for="student" class="student">Student</label>
        <input required type="text" class="studentName" id="student" placeholder="Enter name">
        <button type="submit" id= "newid" class="btn btn-primary">Sort</button>
    </div>
</form>`   
    console.log("displaySort");   
    
    renderToDom("#namesort",sortsec )
};

//console.log ("the number i" + Math.floor(Math.random() * (4 - 1) + 1));
const getRandomArbitrary=()=>{
    const colnum = Math.floor(Math.random() * (4 - 1) + 1);
    let cardcol ="";
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
console.log (`the number is ${colnum} and  color is ${cardcol}`);
}



  const buttonEvents = (event) => {
    document.querySelector("#frmName").addEventListener("submit", handleNewStudent);   
    console.log("buttonevents");
    console.log(document.querySelector("#student").value);
    // const selectedDiv = document.querySelector("#ct");
    // selectedDiv.innerHTML = "Aha";
    // console.log("handleButtonClick");
    //handleButtonClick();
  };

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


  const init = () => {
    // this starts the app
    btnst ();
    var el = document.getElementById('student');
    btnstudent();
    //handleNewStudent();
  };
  
  init();

