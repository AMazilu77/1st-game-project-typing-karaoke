

window.onload = function(){
    document.getElementById("lyrics-bar");
  };





  
  var span = document.querySelector("main-game-board");
  var timer = document.querySelector('.timer');
  var button = document.querySelector(".start-game");
  var score = document.querySelector("#score-bar");
  var words = document.querySelector("#words");
  var spans;
  var userTypedArray = [];
  var points = 0;
  var seconds = 250;
  var catchPhrase = " You lOSE!";
  var myMusic = new sound("/Sounds-For-Game/Rick Astley - Never Gonna Give You Up (1).mp3 ");
  var backdrop = document.querySelector("#backdrop");
  

let introSong = document.querySelector('audio');

function introMusic() {

}


  function sound(myMusic) {
    this.sound = document.createElement("audio");
    this.sound.src = "/Users/alexanderteodor-mazilu/code/Web-Development-Coursework/labs/Week-7/Sounds-For-Game/Rick Astley - Never Gonna Give You Up (1).mp3";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    };
    this.stop = function(){
        this.sound.pause();
    };
}

document.getElementById("accepted").onclick = function() {
 
 
  introSong.play();
  alert(" Clear thy mind! prepare thy fingers! Scroll down and click ready when you are ready to face Rick!!");
};










   document.getElementById("start-button").onclick = function() {
      startGame();
      // this.sound.setAttribute("preload");
      setTimeout(sound(), 18000); 
      introSong.pause();
      myMusic.play();
       myMusic.sound.loop = false; 
       timer.innerHTML = seconds;
       function countdown() {
      //    if(se conds == 250) { 
      //    var p = 0; p < seconds; seconds -- ;
      //  }
      }
    };









     function spanCreator() { 
       getElementById("main-game-board").innerHTML = lyrics.split(); 
        for (var Z = 0; Z > lyrics.length; Z++) { 
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = lyricsArray[Z];
        lyrics.appendChild(span);
     }
     spans = document.querySelectorAll(".span");
   }














  //  function spellChek(){
  //   let textENTER = userTypedArray.value;
  //   let checker = lyrics.substring(0,textENTER.length);
  //      if(textENTER.trim() == lyrics.trim()){  //trim to remove all whites spaces in order to match characters
           
  //         clearInterval(interval);
  //         textArea.style.borderColor= "orange";
  //      } else {
  //         if(textENTER == checker){
  //             textArea.style.borderColor= "lightgreen";
  //         } else{
  //             textArea.style.borderColor= "red";
  //         }
  //      }
  
// }













  	//  function countdown() {
    //  		points = 0;
    //  		var timer = setInterval(function(){
    //  			button.disabled = true;
    //     		seconds--;
    //     		timer.innerHTML = seconds;
    //     		if (seconds === 0) {
    //     			alert("Game over! Your score is " + points);
    //     			words.innerHTML = " ";
    //     			button.disabled = false;
    //     			clearInterval(timer);
        	
        			
    //     			button.disabled = false;	
    //     		}
    //  		}, 1000);
    //     }
       

  
     











     function printLyrics(index, lyrics){
    //  console.log('index ', index);  
    //     console.log('lyrics ', lyrics);
    //    console.log('lyrics on index', lyrics[index]);
       document.getElementById("main-game-board").innerHTML = lyrics; 
    }    









    function startGame() {
        document.getElementById("main-game-board").innerHTML =  lyrics[0];
        for( let i = 1; i < lyrics.length; i++)
        {
        // console.log(i)
        //var timer = setTimeout(startGame, 18000)
            document.getElementById("main-game-board").innerHTML = lyrics[0].text;
            setTimeout(()=>printLyrics(i, lyrics[i].text),   i * 10000);
            

             var span = document.createElement("span");
             span.classList.add(".lyrics");
             span.innerHTML = lyrics;
            
            //words.appendChild(span);
                       
  
        }
        spans = document.querySelector(".span");  
    }
    //  var lyricsArray = lyrics.split("");
















  const lyrics = [
    {text:"We're no strangers to love", duration:18000}, 
     {text: "you know the rules, and so do I", duration: 2000},
    {text: "A full commitment's what I'm thinking of", duration: 1500},
     {text:"You wouldn't get this from any other guy", duration: 1500},
    {text:"I just wanna tell you how I'm feeling",duration: 1500},
     {text:"Gotta make you understand",duration: 1500},
      {text:"Never gonna give you up",duration: 1500}, 
    {text:"Never gonna let you down",duration: 21500},
     {text:"Never gonna run around and desert you", duration: 1500},
     {text:"Never gonna make you cry",duration: 1500}, 
     {text:"Never gonna say goodbye",duration: 1500}, 
     {text:"Never gonna tell a lie and hurt you", duration: 1500}, 
     {text:"We've known each other for so long", duration: 1500},
     {text:"Your heart's been aching, but You're too shy to say it", duration: 1500},
      {text:"Inside, we both know what's been going on", duration: 1500},
      {text:"We know the game and we're gonna play it", duration: 1500},
      {text:"And if you ask me how I'm feeling",duration: 1500},
       {text:"Don't tell me you're too blind to see",duration: 1500},
       {text:"Never gonna give you up",duration: 1500},
        {text:"Never gonna let you down",duration: 1500},
        {text:"Never gonna run around and desert you",duration: 1500},
         {text:"Never gonna make you cry",duration: 1500},
       {text:"Never gonna say goodbye",duration: 1500},
        {text:"Never gonna tell a lie and hurt you",duration: 1500},
         {text:"Never gonna give you up",duration: 1500},
        {text:"Never gonna let you down", duration: 1500},
       {text: "Never gonna run around and desert you", duration: 1500},
         {text: "Never gonna make you cry", duration: 1500},
         {text: "Never gonna say goodbye",duration: 1500},
         {text:"Never gonna tell a lie and hurt you", duration: 1500},
         {text: "Ooh, give you up Ooh, give you up Never gonna give", duration: 1500},
         {text:"never gonna give (Give you up)", duration: 1500},
         {text: "Never gonna give, never gonna give (Give you up)", duration: 1500},
         {text: "We've known each other for so long", duration: 1500},
          {text:"Your heart's been aching, but You're too shy to say it",duration: 1500},
           {text:"Inside, we both know what's been going on",duration: 1500},
           {text:"We know the game and we're gonna play it",duration: 1500},
           {text: "I just wanna tell you how I'm feeling",duration: 1500},
           {text: "Gotta make you understand", duration: 1500},
            {text:"Never gonna give you up", duration: 1500},
            {text: "Never gonna let you down", duration: 1500},
            {text: "Never gonna run around and desert you", duration: 1500},
            {text: "Never gonna make you cry Never gonna say goodbye",duration: 1500},
             {text:"Never gonna tell a lie and hurt you",duration: 1500},
             {text: "Never gonna give you up", duration: 1500},
             {text: "Never gonna let you down", duration: 1500},
             {text: "Never gonna run around and desert you",duration: 1500},
              {text:"Never gonna make you cry Never gonna say goodbye",duration: 1500},
              {text: "Never gonna tell a lie and hurt you",duration: 1500},
              {text: "Never gonna give you up Never gonna let you down", duration: 1500},
               {text:"Never gonna run around and desert you", duration: 1500},
               {text: "Never gonna make you cry",duration: 1500},
               {text: "Never gonna say goodbye",duration: 1500},
               {text: "Never gonna tell a lie and hurt you", duration: 1500},
              ];
  
  




  

  
  


  

//WORKING KEY DETECTION, PROBLEM WITH UNWANTED KEYS AND ENTER KEY RESTARTING THE LOOP
 document.onkeypress = function(event) {
   // console.log("KEYDOWN");
   console.log(event);
   var keyPress = event.key; 
   var keyCode = event.keycode;
   var typedWords = document.getElementById("words").innerHTML += keyPress;
   userTypedArray.push(typedWords);
   
   
   
   function inputOn(event)
  {

     if(event.keyCode == 16)
     {
        event.preventDefault();
     }

     if(event.keycode == 32){
       event.preventDefault(); 
       
     } 
     
     if(event.keycode == 13) {
       event.preventDefault(); 
     }
   
   }
 

   points++;
    var typedWordsArray = document.getElementById('words');
    typedWords.innerHTML = keyPress; 
 };


var finalFUCKINGLIST = [];
var input;
function setup() {
  document.getElementById("thebox");
  input = createInput();
  input.changed(newText);
  function enterEvent(e) {
    if(13 === event.which) {
      event.preventDefault();
      finalFUCKINGLIST.push=document.getElementById("thebox").value;
      input.innerHTML=finalFUCKINGLIST.join;
      document.getElementById('thebox').currentTarget.value = " ";
    }

  }
 
}

function newText() {

}






















// function chex(){ 
// finalChecker = document.getElementById("thebox");
// LASTARRAY = [];
// if(onkeypress == 13){
//   finalChecker.push(LASTARRAY);
// }
// console.log(finalChecker);
// }



// var bDrop = document.getElementById("backdrop");

// bDrop.addEventListener("mousemove", eventRunner());  

// function eventRunner() {
//    Document.body.style.backGroundColor = "rgb(e.offsetX+, e.offsetY+, 40)";
//   }





// TRYING TO DISABLE PROBLEMATIC BUTTONS, CONSIDER ADDEVENTLISTENER ONKEYPRESS which only registers buttons that display characters


  //   window.onkeydown = function (event) {
  //     if (event.keyCode === 32) {
  //         event.preventDefault();
  //     if (event.keyCode === 13 ) {
  //         event.preventDefault();
  //         key.disabled;
  //         keyPress.disabled;
  //     if (event.keycode === 16);
  //         event.preventDefault();
  //         event.disabled();
  //         event.keyPress.disabled;
  //     }
         
  //     }
  // };

    
  //   window.addEventListener("keydown", function (event) {
  //     if (event.defaultPrevented) {
  //       return; // Should do nothing if the default action has been cancelled
  //     }
    
  //     var handled = false;
  //     if (event. !== undefined) {
  //       // Handle the event with KeyboardEvent.key and set handled true.
  //     } else if (event.Space !== undefined) {
  //       // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
  //     } else if (event.Space !== undefined) {
  //       // Handle the event with KeyboardEvent.keyCode and set handled true.
  //     }
    
  //     if (handled) {
  //       // Suppress "double action" if event handled
  //       event.preventDefault();
  //     }
  //   }, true);
  
   


  //   function DisabledKey1(e) { 
  //     var e = window.event||e; // Handle browser compatibility
  //     var keyID = e.space;
  //     //space pressed
  //     if (keyID == 32) {
  //         e.preventDefault(); // Prevent the default action
  //         // anotherFunction();
  //     }
  // }
   
   
    // function DisableKeys(  : "Space" )
    // {
    //    if( Event.current.keyCode == " "  ( Event.current.type == EventType.KeyUp || Event.current.type == EventType.KeyDown ) )
    //    {
    //       Event.current.Use();
    //    }
    // }
  
    // function OnGUI()
    // {
    //    DisableKeys( KeyCode.Space );
    // }
 
  



 
