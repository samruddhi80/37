var gameState=0;
var contestantCount;
var database;
var quiz,question,contestant;
var allContestants;

function setup()
{
  canvas = createCanvas(4000,4000);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw()
{
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
