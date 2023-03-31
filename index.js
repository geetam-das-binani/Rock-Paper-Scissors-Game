const userscore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');
const resultdiv_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const reset=document.querySelector('#reset > button')
let userscore = 0;
let computerscore = 0;



let computerchoice = () => {
    let choices = ['r', 'p', 's'];
    let choice = (Math.floor(Math.random() * 3));
    return choices[choice]

}
let ConvertToWord = (letter) => {
    if (letter == 'r') return 'Rock'
    if (letter == 'p') return 'Paper'
    return 'Scissor'
}
let win = (userchoice, compchoice) => {
    userscore++;
    userscore_span.innerHTML = userscore;
    let win_glow = document.getElementById(userchoice);

    resultdiv_p.innerHTML = `${ConvertToWord(userchoice)}(User) beats ${ConvertToWord(compchoice)}(Comp)`
    win_glow.classList.add('green-glow');
    setTimeout(() => {
        win_glow.classList.remove('green-glow');
    }, 400);

}
let lose = (userchoice, compchoice) => {
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    let lose_glow = document.getElementById(userchoice);
    resultdiv_p.innerHTML = `${ConvertToWord(userchoice)}(User) looses ${ConvertToWord(compchoice)}(Comp)`
    lose_glow.classList.add('red-glow');
    setTimeout(() => {
        lose_glow.classList.remove('red-glow');
    }, 400);
}
let draw = (userchoice, compchoice) => {
let draw_glow=document.getElementById(userchoice);
    resultdiv_p.innerHTML = `Match draw! None Won`
    draw_glow.classList.add('gray-glow');
    setTimeout(() => {
        draw_glow.classList.remove('gray-glow');
    }, 400);


}

let game = (userchoice) => {
    compchoice = computerchoice();
    if ((userchoice + compchoice == 'rs') || (userchoice + compchoice == 'pr') || (userchoice + compchoice == 'sp')) {
        win(userchoice, compchoice);
    }
    else if ((userchoice + compchoice == 'rp') || (userchoice + compchoice == 'ps') || (userchoice + compchoice == 'sr')) {
        lose(userchoice, compchoice);
    }
    else if ((userchoice + compchoice == 'rr') || (userchoice + compchoice == 'pp') || (userchoice + compchoice == 'ss')) {
        draw(userchoice, compchoice);
    }
    
    
    
}
rock_div.onclick = () => {
    game('r');
}

paper_div.onclick = () => {
    game('p');
}

scissor_div.onclick = () => {
    game('s');
}
reset.addEventListener('click',()=>{
    userscore=0;
    computerscore=0;
    userscore_span.innerHTML=userscore;
   computerscore_span.innerHTML=computerscore;
})
