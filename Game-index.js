

window.onload = function(){
    document.getElementById("lyrics-bar");
  };





  
  var span = document.querySelector("main-game-board")
  var timer = document.querySelector('.timer');
  var button = document.querySelector(".start-game");
  var score = document.querySelector("#score-bar");
  var words = document.querySelector("#words");
  var spans;
  var userTypedArray = [];
  var points = 0;
  var seconds = 250;
  var catchPhrase = " You lOSE!";
  var myMusic = new sound("/Users/alexanderteodor-mazilu/code/Web-Development-Coursework/labs/Week-7/Sounds-For-Game/Rick Astley - Never Gonna Give You Up (1).mp3 ");
  var backdrop = document.querySelector("#backdrop")
  var intro = new sound("/Users/alexanderteodor-mazilu/code/Web-Development-Coursework/labs/Week-7/Sounds-For-Game/SF2 intro.mp3");




function introMusic(intro) {
  this.sound = document.createElement("audio");
  this.sound.src = "/Users/alexanderteodor-mazilu/code/Web-Development-Coursework/labs/Week-7/Sounds-For-Game/SF2 intro.mp3"
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


};


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
 
  intro.play();
  intro.sound.loop = false; 
  alert(" Clear thy mind! prepare thy fingers! click ready when you are ready!")
}










   document.getElementById("start-button").onclick = function() {
      startGame();
      // this.sound.setAttribute("preload");
      setTimeout(sound(), 18000); 
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
   };














   function spellChek(){
    let textENTER = userTypedArray.value;
    let checker = lyrics.substring(0,textENTER.length);
       if(textENTER.trim() == lyrics.trim()){  //trim to remove all whites spaces in order to match characters
           
          clearInterval(interval);
          textArea.style.borderColor= "orange";
       } else {
          if(textENTER == checker){
              textArea.style.borderColor= "lightgreen";
          } else{
              textArea.style.borderColor= "red";
          }
       }
  
}













  	 function countdown() {
     		points = 0;
     		var timer = setInterval(function(){
     			button.disabled = true;
        		seconds--;
        		timer.innerHTML = seconds;
        		if (seconds === 0) {
        			alert("Game over! Your score is " + points);
        			words.innerHTML = " ";
        			button.disabled = false;
        			clearInterval(timer);
        	
        			
        			button.disabled = false;	
        		}
     		}, 1000);
        }
       

  
     











     function printLyrics(index, lyrics){
     console.log('index ', index);  
        console.log('lyrics ', lyrics);
       console.log('lyrics on index', lyrics[index]);
       document.getElementById("main-game-board").innerHTML = lyrics; 
    }    









    function startGame() {
        document.getElementById("main-game-board").innerHTML =  lyrics[0];
        for( let i = 1; i < lyrics.length; i++)
        {
        // console.log(i)
        //var timer = setTimeout(startGame, 18000)
            document.getElementById("main-game-board").innerHTML = lyrics[0].text;
            setTimeout(()=>printLyrics(i, lyrics[i].text),   i * 3500);
            

             var span = document.createElement("span");
             span.classList.add(".lyrics");
             span.innerHTML = lyrics;
            
            //words.appendChild(span);
                       
  
        }
        spans = document.querySelector(".span");  
    }
    //  var lyricsArray = lyrics.split("");











// TRYING TO DISABLE PROBLEMATIC BUTTONS, CONSIDER ADDEVENTLISTENER ONKEYPRESS which only registers buttons that display characters


    window.onkeydown = function (event) {
      if (event.keyCode === 32) {
          event.preventDefault();
      if (event.keyCode === 13 ) {
          event.preventDefault();
          key.disabled;
          keyPress.disabled;
      if (event.keycode === 16);
          event.preventDefault();
          event.disabled();
          event.keyPress.disabled;
      }
         
      }
  };

    
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
  
  



// String.fromCharCode() function is used to create a string from the given sequence of UTF-16 code units. The syntax of this function is as follows:
  // The event.which property returns which keyboard key or mouse button was pressed for the event.
       function playerOneInput(X) {
         userTypedArray  = String.fromCharCode(X.which); 
         for (var Z = 0; Z < spans.length; Z++) { 
          if (spans[Z].innerHTML === typed) { 
          if (spans[Z].classList.contains("bg")) // if it already has class with the bacground color then check the next one
            continue; 
           } else if (spans[Z].classList.contains("bg") === false && spans[Z-1] === undefined  || spans[Z-1].classList.contains("bg") !== false) {  // if it doesent have class, if it is not first letter or if the letter before it doesent have class (done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
             spans[Z].classList.add("bg");
             break; 
         }  
       }
     }
  

  
  
//   function myWordsFunction() {
//       var x = document.createElement("INPUT");
//       x.setAttribute("type", "text");
//       x.setAttribute("value", userType);
//       document.body.appendChild(x);
//   }
  
  // var wordChecker = 0; 
  // for ( var B = 0; B < spans.length; B++ ) { //checks to see if lyrics are typed
  // if (spans[B].className === "span bg") {
  //   checker++;
  // }
  // if(checker === spans.length) { 
  //   points++;
  //   score.innerHTML = points; 
  //    }
  //   }

  

//WORKING KEY DETECTION, PROBLEM WITH UNWANTED KEYS AND ENTER KEY RESTARTING THE LOOP
 document.onkeydown = function(event) {
   // console.log("KEYDOWN");
   console.log(event);
   var keyPress = event.key; 
   var keyCode = event.keycode;
   var typedWords = document.getElementById("words").innerHTML += keyPress;
   function inputOn(event)
  {

     if(event.keyCode == 16)
     {
        event.preventDefault();
     }
   
   }
 
   userTypedArray.push(typedWords); 
 
   console.log(typedWords);
   for(var M = 0; M < typedWords.length; M++) {
     if ( userTypedArray[0] === lyrics[0]);
     score++;
    
   }
   points++;
    var typedWordsArray = document.getElementById('words');
    typedWords.innerHTML = keyPress; 
 };

var bDrop = document.getElementById("backdrop");

bDrop.addEventListener("mousemove", eventRunner());  

function eventRunner() {
   Document.body.style.backGroundColor = "rgb(e.offsetX+, e.offsetY+, 40)";
  }








 
