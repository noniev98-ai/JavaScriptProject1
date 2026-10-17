const menu= document.getElementById('menu');
const menuButton= document.getElementById('menuButton');
const alertbutton = document.getElementById('alertButton');
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('IncrementNum');
const decrementButton = document.getElementById('DecrementNum');
const usernameInput = document.getElementById('usernme');
const greetButton = document.getElementById('greetButton');
const greetingMessage =  document.getElementById('greetmessage');
const resetbutton = document.getElementById('resetButton');
const ctrdisplay = document.getElementById('ctrtxt');
const addParagraphButton = document.getElementById('AddParagraphbutton');
const paragraphContainer = document.getElementById('ParagraphContainer');


menuButton.addEventListener('click', function (){
    if(menu.style.display== 'none'){
        menu.style.display = 'block';
        } else {
            menu.style.display='none';
        }
})

alertbutton.addEventListener('click', function() {
    alert('Hello , This is an alert message!');
})

let ctr = Number(counterDisplay.textContent);

incrementButton.addEventListener('click', function() {
    ctr += 1;
    counterDisplay.textContent= ctr;
})

decrementButton.addEventListener('click', function(){
    ctr -= 1;
    counterDisplay.textContent=ctr;
})





function isValidName(name){
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
}

greetButton.addEventListener('click', function() {
   
   const username = usernameInput.value.trim();

      if(username=='')
            {greetingMessage.textContent="Please Enter your name";}
    else if
      (isValidName(username))
         {greetingMessage.textContent = "Hello, " + username;}  
    else 
         {greetingMessage.textContent="Invalid Input. Please use letters only.";}
    
             
});


resetbutton.addEventListener('click', function() {
   location.reload();   
})


addParagraphButton.addEventListener('click', function() {
    const newParagpraph = document.createElement('p');
    newParagpraph.textContent = "Congratulation on Learning Prartical Javascript!";
    paragraphContainer.appendChild(newParagpraph);
    });


























































































































































































































































































