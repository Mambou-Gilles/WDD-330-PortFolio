/*alert('Welcome to Quiz Ninja!');
const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
    ];

let score = 0 // initialize score
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
    alert('Correct!');
    score++;
    } else {
    alert(`Wrong! The correct answer was ${answer}`);
    }}
// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);



this is for the team
function sum(){
    var number = parseInt(prompt("Enter a value to add", 10));
    let total = 0; let count = 1;
    while (count <= number){
        total += count;
        count += 1;
    }
    document.getElementById("Id of Div in HTML").innerHTML = "The sum is" + total;

}
*/

/*const quiz = [
    ["Whatis Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz); */

/*Week 3 - Object Chapter 5*/

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    start: document.getElementById('start'),
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    }
};

const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];
const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz];
        view.hide(view.start);

        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
        
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.score, this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        /*alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);*/
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}
game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);
