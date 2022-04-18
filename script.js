const player1 =  document.querySelector('.player-1')
const player2 =  document.querySelector('.player-2')
const player1btn  =  document.querySelector('.btn-player-1')
const player2btn  =  document.querySelector('.btn-player-2')
const resert = document.querySelector('.resert')
const gameLevel = document.querySelector('#game-level')


let player1Score = 0
let player2Score = 0
let level = +gameLevel.value
let gameOver = true


player1btn.addEventListener('click', ()=>{
    if(gameOver){
        player1Score++
        player1.textContent = player1Score
        if(player1Score == level){
            gameOver = false
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
    }
})

player2btn.addEventListener('click', ()=>{
    if(gameOver){
        player2Score++
        player2.textContent = player2Score
        if(player2Score == level){
            gameOver = false
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
    }
})



gameLevel.addEventListener('change', ()=> {
    level = +gameLevel.value
    resertFunc()
})

resert.addEventListener('click', ()=>{
    resertFunc()
})


function resertFunc() {
    player1.textContent = 0
    player2.textContent = 0
    player1.style.color = 'white'
    player2.style.color = 'white'
    player1Score = 0
    player2Score = 0
    gameOver = true
}