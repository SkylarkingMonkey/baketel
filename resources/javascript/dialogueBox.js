const messages = {m1:"Hello,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very risky of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?",
                  m2:". . . pity.", 
                  m3:"Well, well, well. . . <br /><br /><br />Anyone who is unafraid of risk and uncertainty is bound to come up against challenges.<br /><br />Are you up to the task of unlocking the switch?<br /><br />",
                  m4:"<br />Bah! hahah<br />I'm so pleased you made it this far, but the next part is still under construction! Come back later! Now hit the NO button."};
//lo,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very risky of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?

//lo,<br /><br />I see you are tempted to flip an unlabeled switch.<br /><br /><br />How very risky of you. . . <br /><br /><br />Is it fair to assume that you are unafraid of uncertainty and taking a risk?

const h1 = document.getElementById('typer');
let m = '';
let clearTxt = false;
let typingSpeed = 50;

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

function no(){
  const fullText = _textArray;
  if (m === fullText){
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
    laugh();
  } else if  (m === messages.m1){
    typer.typeText(h1, messages.m3, 50);
  } else {
    return;
  }
}

function setDelayOnText(){
  typer.typeText(h1, messages.m4, 50);  
}

function backToBoring(){
  $('#mode-screen').attr("class", "mode-screen-off");
}

function ohWell(){
 $('#toggle-container').attr("class", "toggle-container-off");
}


function wakeUpAi(){
  setTimeout(initiateAi, 4250);
}

function initiateAi(){
  typer.typeText(h1, messages.m1, 50);
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
