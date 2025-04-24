let message=document.querySelector(".xwins");
let game_over=false;
let reset=document.querySelector(".reset");
//1: CurrentPlayer = X
let currentplayer="X";
//2: Select all the boxes
const boxes = document.querySelectorAll(".box");
// This function checks if someone won
function checkWinner() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let win of wins) {
        let [a, b, c] = win;
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[b].textContent === boxes[c].textContent
        ) {
            message.textContent=currentplayer + " wins!";
            game_over = true;
            return;
            
            
        }
    }

    // Check for a tie(no empty cells)
    let isDraw=true;
    for (let box of boxes){
        if (box.textContent===""){
            isDraw=false;
            break;
        }
    }
    if(isDraw){
        message.textContent="It's a Draw!";
        game_over = true;
    }
}

//3: When I click a box, I want something to happen
//When box is clicked
function boxClicked(event){
    if(game_over==true){
        return;
    }
    console.log("Clicked!");
    const box = event.target;
    if(box.textContent !==""){
        return;
    }
    //Mark the cell
    box.textContent=currentplayer;
    checkWinner();
    if(currentplayer=="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X"
    }
    

}
function win(){
    game_over=true;
    return;
}
function resetgame(){
    for(let box of boxes){
        box.textContent="";
    }
    currentplayer = "X";
            message.textContent = "";
            game_over = false;
}
//4: Iterate through all boxes and attack click event
for(let box of boxes){
    box.addEventListener("click", boxClicked);
}
reset.addEventListener("click", resetgame)