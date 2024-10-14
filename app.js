const buttons = document.querySelectorAll('.buttons')
const [screens] = document.getElementsByClassName('screen')

const appendScreen = (item) =>{
    const prev = screens.innerHTML
    screens.innerHTML = prev+item;
}

const showANS = (str) =>{
    try{
        const answer = eval(str)
        return answer
    }
    catch(err){
        console.log(err)
        return 'Syntax Error'
    }
}

const resetScreen =()=>{
    screens.innerHTML = '';
}


buttons.forEach(
  function(button){
    button.addEventListener('click' , function(e){
        if(e.target.innerHTML == 'c'){
            resetScreen()
            return
        }
        if(e.target.innerHTML == '='){
           const answer = showANS(screens.innerHTML)
           screens.innerHTML = answer
            return
        }
        appendScreen(e.target.innerHTML)
    })
  }
)


document.addEventListener('keydown', function(event) {
    const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (numberKeys.includes(event.key)) {
      appendScreen(event.key);
    }  if (event.key === 'Backspace') {
      const currentScreenText = screens.innerHTML;
      screens.innerHTML = currentScreenText.slice(0, -1);
    }
    if(event.key === "Enter"){
      const answer = showANS(screens.innerHTML);
      screens.innerHTML = answer;
    }
    if(event.key === "+" && event.shiftKey){
      appendScreen("+")
    }
    if(event.key === "-"){
      appendScreen("-")
    }
    if(event.key === "="){
      const answer = showANS(screens.innerHTML);
      screens.innerHTML = answer;
    }
  });