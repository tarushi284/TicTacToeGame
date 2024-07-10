// to access the elements
let container=document.querySelector(".container"); //for the entire container
let button=document.querySelectorAll(".btn"); //since there are a lot of buttons
let box=document.querySelector("box"); //for the entire box of buttons
let reset=document.querySelector("#reset"); // for the reset button
let para=document.querySelector(".txt");
let newgame=document.querySelector(".win"); 
let msgContainer=document.querySelector(".text-container");


let turnO=true; //let it be the turn of the person who will write 'O'
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; //2d arrray consisting of all the winning patterns

//function to reset game
const restart=()=>{
    turnO=true;
    enable();
    msgContainer.classList.add("hide");
    
}

//function to manage all the changes when we click a button
button.forEach((btn)=> {
    
    btn.addEventListener("click",()=>{
        
        if(turnO==true){
            btn.innerText="O";
            turnO=false;
        }
        else{
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;
        
        checkWinner();
    });

});

//function to match all the winning patterns and fund out the winner
const checkWinner=() =>{
    for(let pattern of win){
        pos1=button[pattern[0]].innerText;
        pos2=button[pattern[1]].innerText;
        pos3=button[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3){
              
                showWinner(pos1);
            }
            
        }
    } 
    
};

//pattern to display the winner name
const showWinner=(winner)=>
{
    count=0;
    para.innerText=`Congratulations! The winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disbtn();
};


//function to disable all the buttons after the game is complete
const disbtn=()=>
{
    for(let btn of button){
        btn.disabled=true;
    }
};


//function to enable the buttons after reset or new game
const enable= ()=>
{
    for(let btn of button){
        btn.disabled=false;
        btn.innerText="";
    }
};

//the restart button will trigger when we will click the newgame button
 newgame.addEventListener("click",restart);
 reset.addEventListener("click",restart);


 //DEFECT-> the code doesnt contain draw condition when all the 9 chances are played by no one has won. You need to click on the reset
 //button to restart the game.

 