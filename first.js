let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");



let turno = true;
let count = 0;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turno){
            box.innerText = "O";
            box.style.backgroundColor = "Blue";
            turno = false;
        }else{
            box.innerText = "X";
            box.style.backgroundColor = "Red";
            turno = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();
        if(count === 9 && !iswinner){
            checkdraw();
        }
    });
});


const checkwinner = () =>{
    for(let pattern of winpatterns){
        let box1val = boxes[pattern[0]].innerText;
        let box2val = boxes[pattern[1]].innerText;
        let box3val = boxes[pattern[2]].innerText;
        if(box1val!="" &&  box2val!="" && box3val!=""){
            if(box1val === box2val && box2val=== box3val){

                showwinner(box1val);

            }
        }

    }
}

const checkdraw = () =>{
    disableboxes();
    console.log("It's a draw");
    msg.innerText = `This is a Draw`;
    msgContainer.classList.remove("hide");

};
const showwinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
};

const resetgame=()=>{
    turno = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "Beige";

    }
};

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};



newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
