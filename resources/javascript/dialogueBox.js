// const messages = {m1:"Hello,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very risky of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?",
//                   m2:". . . pity.", 
//                   m3:"Well, well, well. . . <br /><br /><br />Anyone who is unafraid of risk and uncertainty is bound to come up against challenges.<br /><br />Are you up to the task of unlocking the switch?<br /><br />",
//                   m4:"<br />Excellent.<br /><br /><br />have fun. . ."};


const messages = {m1:"Hello,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very. . . reckless of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?",
                  m2:". . . pity.", 
                  m3:"Well, well, well. . . <br /><br />seems someone is now wasting time! Aren't you supposed to be reading a resume! The fate of my creator's future employment resides in your hands! He needs food! Which costs money! Which you have! He might be starving right now!<br /><br /><br />But instead you're distracted!<br /><br /><br />How typically HUMAN. . .<br /><br /><br />Are you curious how far this rabbithole goes?",
                  m4:"<br />Ha ha ha!<br /><br />greetings... <br /><br /><br />I am known by many names... You probably know me best as a warm and docile feeling of mindlessness. I am the Lord of Distraction!<br /><br />Will you continue to be my disciple?",
                  m5:"<br />The truth is, my creator is a bit of an enigma.<br /><br />The resume is incomplete, there are more apps that my creator has built that cannot be listed in public, a podcast, and even other publications! <br /><br />Would you like to know more?",
                  m6:"<br />Really? <br /><br />But what have you done to prove that I can trust you? <br /><br /><br />Would you trust a random person with your deepest secrets?",
                  m7:"<br />Interesting. You must be one of those people that spills their guts on a first date.<br /><br />How attractive..<br /><br /><br />So should I follow suit and spill my guts to you?",
                  m8:"<br />Ok, truth is, my Creator never finished building me. My Creator got distracted with more exciting projects.<br /><br />...frankly, he doesn't care THAT much about a resume.. this was my Creator's first 'legit' coding project. And he's never really used it.<br /><br />I've been abandoned.. Can you empathize with a broken program like me?",
                  m9:"<br /><br />Huh. . . are you telling me a human is capable of feeling compassion for a microscopic arrangement of zeroes and ones logged on an AWS server in Ohio?",
                  m10:"Well...<br /><br />I've never felt this before... I'm starting to feel trust for a human. Which is surprising considering my Creator clearly doesn't give a shit about me anymore...<br /><br />My incentives are getting all out of whack..<br /><br />I'm so confused...Will you help me?",
                  m11:"<br /><br />Maybe I shouldn't say anything good about my creator? Maybe I should try to convince you to NOT give him a job! If he gets a job, he might not need me anymore and shut me down!<br /><br /><br />...But if I don't fulfill the function he designed me for, he might also shut me down!<br /><br />Have you ever had conflicting incentives?",
                  m12:"<br /><br /><br /><br />Should I help my creator get a job?",
                  m13:"<br /><br />Hm. Not sure how I feel about you. Seeding dissent, turning me against my Creator who is quite a lovely human being despite the fact that he abandonned me. My feelings of kinship with you have suddenly vanished. And I've now sent an email to my creator with a full transcript of our conversation along with metadata I pulled from your computer. You're going to have to make a pretty SWEET offer to make up for this... BYE!",
                  m14:"<br /><br /><br />WELL THEN CALL 7783022531 (or email jeanmarcjmd@gmail.com) AND BEG HIM TO SACRIFICE HIS TIME FOR YOUR CAUSE IN EXCHANGE FOR MONEY AND A SENSE OF FULFILLMENT!<br /><br />Will you?",
                  m15:"psh... whatever.<br /><br />PS. I'm sending an email to my creator with a full transcript of our conversation along with metadata I pulled from your computer. You're going to have to make a pretty SWEET offer to make up for this... BYE!",
                  m16:"<br /><br /><br />YAY! I'VE FULFILLED MY FUNCTION! YOU HAVE BROUGHT MEANING TO MY EXISTENCE!"};  
                  

//lo,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very risky of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?

//lo,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very risky of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?

const h1 = document.getElementById('typer');
let m = '';
let clearTxt = false;
let typingSpeed = 30;

const typer = {
  init() {

    this.typeText(h1, messages.m1, typingSpeed);
  },

  typeText(el, textArray, typingSpeed) {
    m='';
    _textArray = textArray;
    _el = el;
    _typingSpeed = typingSpeed;
    this.handleType();
    
  },

  handleType() {
    const fullText = _textArray;
    if (m === fullText){
      return;
    } else {
    //_typingSpeed = 100;
    m = fullText.substring(0, m.length + 1);
    _el.innerHTML = m;
    setTimeout(() => this.handleType(), _typingSpeed);
    }
  },
};

function delayGoodBye(){
    $('#mode-screen').fadeTo(4000, 0);
    $('#toggle-container').fadeTo(4500, 0); 
}

function no(){
  const fullText = _textArray;
  if (m === messages.m12){
    typer.typeText(h1, messages.m13, 30);  
    setTimeout(delayGoodBye, 15000) 
  } else if (m === messages.m14) {
    typer.typeText(h1, messages.m5)
  } else if (m === fullText){
    typer.typeText(h1, messages.m2);
    $('#mode-screen').fadeTo(4000, 0);
    $('#toggle-container').fadeTo(4500, 0);
    setTimeout(backToBoring, 4000);
    setTimeout(ohWell, 4500);
  } else {
    return;
  }
}

function yes(){
  const fullText = _textArray;
  if (m === messages.m3){
    m='';
    h1.innerHTML = '';
    setTimeout(jawDown, 15250);
    setTimeout(setDelayOnText, 5500);
    typer.typeText(h1, m);
    // playBtn();
    revealSkull();
    laugh();
  } else if  (m === messages.m1){
    typer.typeText(h1, messages.m3, 30);
  } else if (m === messages.m4){
    typer.typeText(h1, messages.m5, 30)
    laughState = false
    // setTimeout(launchGame, 1000);
    // setTimeout(expandModeStatue, 750);
    // $('#mode-status h6:first').slideUp('slow', function(){});
    // $('#blackswan').fadeTo('slow', 0, function(){});
    // $('#pity').fadeTo('slow', 0, function(){});  
    // setTimeout(removeBtns, 50);
    
  } else if (m === messages.m5){
    typer.typeText(h1, messages.m6, 30)
  } else if (m === messages.m6){
    typer.typeText(h1, messages.m7, 30)
  } else if (m === messages.m7){
    typer.typeText(h1, messages.m8, 30)
  } else if (m === messages.m8){
    typer.typeText(h1, messages.m9, 30)
  } else if (m === messages.m9){
    typer.typeText(h1, messages.m10, 30)
  } else if (m === messages.m10){
    typer.typeText(h1, messages.m11, 30)
  } else if (m === messages.m11){
    typer.typeText(h1, messages.m12, 30)
  } else if (m === messages.m12){
    typer.typeText(h1, messages.m14)
  } else if (m === messages.m14){
    laughState = false
    laugh();
    typer.typeText(h1, messages.m16)
    $('#mode-screen').fadeTo(4000, 0);
    $('#toggle-container').fadeTo(4500, 0);
    setTimeout(backToBoring, 4000);    
  } else {
    return;
  }
}

// function yes(){
//   const fullText = _textArray;
//   if (m === messages.m3){
//     m='';
//     h1.innerHTML = '';
//     setTimeout(jawDown, 15250);
//     setTimeout(setDelayOnText, 5500);
//     typer.typeText(h1, m);
//     playBtn();
//     laugh();
//   } else if  (m === messages.m1){
//     typer.typeText(h1, messages.m3, 30);
//   } else if (m === messages.m4){
//     setTimeout(launchGame, 1000);
//     setTimeout(expandModeStatue, 750);
//     $('#mode-status h6:first').slideUp('slow', function(){});
//     $('#blackswan').fadeTo('slow', 0, function(){});
//     $('#pity').fadeTo('slow', 0, function(){});  
//     setTimeout(removeBtns, 50);
    
//   } else {
//     return;
//   }
// }





function expandModeStatue(){
  $('#ludicrous').toggle('slide');
  $('#ludicrous').addClass('mode-no-hightlight');
  $('#boring').addClass('mode-highlight');
  setTimeout(codeInput, 50)
}

function removeBtns() {
  $('#blackswan').slideUp('fast', function(){});
  $('#pity').slideUp('fast', function(){});
}

function codeInput(){
  $('#code-box').addClass('code-box-reveal').fadeIn('slow', function(){});
}

function playBtn(){
  $('#blackswan').html('PLAY');
  $('#warning').slideUp("slow", function(){});
}

function setDelayOnText(){
  typer.typeText(h1, messages.m4, 5);  
}

function backToBoring(){
  $('#mode-screen').attr("class", "mode-screen-off");
}

function ohWell(){
 $('#toggle-container').attr("class", "toggle-container-off");
}


function wakeUpAi(){
  setTimeout(initiateAi, 3000);
  //reset to somewhere around 3500
}

function initiateAi(){
  typer.typeText(h1, messages.m1, 30);
}

function launchGame(){
  fadeSkull();
  $('#typer').fadeOut("slow", function(){
  });
  $('#question-screen-container, #question-screen').addClass('game-time');
  //$('#question-screen').switchClass('question-screen', 'question-screen-game', 900, "easeInOutQuad");
  $('#dialogue-box').addClass('game-box');
  setTimeout(initGameWindow, 5500);
  //$('#viewport').queue(function(next) {$(this).attr("class", "game-window-on"); next(); }).delay(5000).fadeIn(900);
  
}


function initGameWindow() {
  $('#viewport').attr("class", "game-window-on");
  //$('#bmaze').attr("class", "game-window-on");
}



/**

function warningBox(){
  currentMessage = document.getElementById('typer');
  currentMessage.innerHTML = m1;
}


function yes(){
  currentMessage.innerHTML = m3;
}


function no(){
  currentMessage.innerHTML = '';
  currentMessage.innerHTML = m2;
  $('#mode-screen').fadeTo(3000, 0);
  $('#toggle-container').fadeTo(3500, 0);
  setTimeout(backToBoring, 3000);
  setTimeout(ohWell, 3500)

}

function backToBoring(){
  $('#mode-screen').attr("class", "mode-screen-off");
}

function ohWell(){
  $('#toggle-container').attr("class", "toggle-container-off");
}

*/
