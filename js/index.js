var NoStop = true;
var memory_arrays = [];
var memory_values = [];
var memory_id = [];
var memory_flipped = 0;
var AClass = [];
var AClass_Count = 0;
var level;
var TimerCounter = 0;
var Lvl = 0;
var LvlSec = 0;
var LvlAdd = 0;
var Up = 0;
var Num = 0;
var card_1;
var card_2;
var binded;
var goTo2 = false;
var goTo3 = false;
var goTo4 = false;
var goTo5 = false;
var goTo6 = false;
var goTo7 = false;
var goTo8 = false;
var goTo9 = false;

//assign level and start up timer
function assign(postN, postS) {
  document.getElementById("Seconds").innerHTML = postS;
  document.getElementById("Level").innerHTML = postN;
}


//this is the shuffling of every array in this file
//we use prototype

Array.prototype.memory_shuffle = function () {

  //declaration of 3 vars 
  //var i has the length of the array
  var i = this.length,
    j, temp;
  //use loop until all elements of array are finished
  while (--i > 0) {
    //assign number got from random function to j
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;

  }
}

function StartOver(arg) {

  var memory_flipped = 0;
  if (arg == 'im0' || arg == 'im1' || arg == 'im2' || arg == 'im3' || arg == 'im4' || arg == 'im5' || arg == 'im6' || arg == 'im7' || arg == 'im8' || arg == 'im9' || arg == 'im10' || arg == 'im11' || arg == 'im12' || arg == 'im13' || arg == 'im14' || arg == 'im15' || arg == 'im16' || arg == 'im17' || arg == 'im18' || arg == 'im19') {
    if (TimerCounter == 0) {
      TimerCounter = 1;

      //start timer by passing go argument
      TimerStart("go", Lvl, LvlSec);
    }
    //alert(Lvl);
    Flip(arg);
  } else if (arg == "menu") {
    //flip back all flipped cards and shuffle them then go to the level page
    $(".allM").flippyReverse();
    $(".allM").removeClass('allM');
    memory_arrays.memory_shuffle();
    location.href = "#level_page";
    clearInterval(binded);
    LvlSec = 0;
    LvlAdd = 0;
    Lvl = 0;
    assign(Lvl, LvlSec);
    TimerCounter = 0;
    //clear all values and id so that they can be used again later
    memory_values = [];
    memory_id = [];
    AClass_Count = 0;
    AClass = [];
    Refresh();

  } else if (arg == "restart") {
    $(".allM").flippyReverse();
    $(".allM").removeClass('allM');
    memory_arrays.memory_shuffle();
    assign(Lvl, LvlSec);
    clearInterval(binded);
    TimerCounter = 0;
    //clear all values and id so that they can be used again later
    memory_values = [];
    memory_id = [];
    AClass_Count = 0;
    AClass = [];
    Refresh();
  } else if (arg == "imm0") {
    LvlSec = 60;
    LvlAdd = 50;
    Lvl = 1;
    assign(Lvl, LvlSec);
    $(".GetIt").attr('src', 'img/box1.png');
    memory_arrays = ['img/index0.png', 'img/index0.png', 'img/index1.png', 'img/index1.png', 'img/index2.png', 'img/index2.png', 'img/index3.png', 'img/index3.png', 'img/index4.png', 'img/index4.png', 'img/index5.png', 'img/index5.png', 'img/index6.png', 'img/index6.png', 'img/index7.png', 'img/index7.png', 'img/index8.png', 'img/index8.png', 'img/index9.png', 'img/index9.png'];
  } else if (arg == "imm1") {

    LvlSec = 60;
    LvlAdd = 50;
    Lvl = 2;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box1.png');
    memory_arrays = ['img/index0.png', 'img/index0.png', 'img/index1.png', 'img/index1.png', 'img/index2.png', 'img/index2.png', 'img/index3.png', 'img/index3.png', 'img/index4.png', 'img/index4.png', 'img/index5.png', 'img/index5.png', 'img/index6.png', 'img/index6.png', 'img/index7.png', 'img/index7.png', 'img/index8.png', 'img/index8.png', 'img/index9.png', 'img/index9.png'];

  } else if (arg == "imm2") {

    LvlSec = 60;
    LvlAdd = 50;
    Lvl = 3;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box1.png');
    memory_arrays = ['img/index0.png', 'img/index0.png', 'img/index1.png', 'img/index1.png', 'img/index2.png', 'img/index2.png', 'img/index3.png', 'img/index3.png', 'img/index4.png', 'img/index4.png', 'img/index5.png', 'img/index5.png', 'img/index6.png', 'img/index6.png', 'img/index7.png', 'img/index7.png', 'img/index8.png', 'img/index8.png', 'img/index9.png', 'img/index9.png'];
  } else if (arg == "imm3") {

    LvlSec = 40;
    LvlAdd = 20;
    Lvl = 4;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box2.png');
    memory_arrays = ['img/index10.png', 'img/index10.png', 'img/index11.png', 'img/index11.png', 'img/index12.png', 'img/index12.png', 'img/index13.png', 'img/index13.png', 'img/index14.png', 'img/index14.png', 'img/index15.png', 'img/index15.png', 'img/index16.png', 'img/index16.png', 'img/index17.png', 'img/index17.png', 'img/index18.png', 'img/index18.png', 'img/index19.png', 'img/index19.png'];
  } else if (arg == "imm4") {

    LvlSec = 40;
    LvlAdd = 20;
    Lvl = 5;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box2.png');
    memory_arrays = ['img/index10.png', 'img/index10.png', 'img/index11.png', 'img/index11.png', 'img/index12.png', 'img/index12.png', 'img/index13.png', 'img/index13.png', 'img/index14.png', 'img/index14.png', 'img/index15.png', 'img/index15.png', 'img/index16.png', 'img/index16.png', 'img/index17.png', 'img/index17.png', 'img/index18.png', 'img/index18.png', 'img/index19.png', 'img/index19.png'];

  } else if (arg == "imm5") {

    LvlSec = 40;
    LvlAdd = 20;
    Lvl = 6;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box2.png');
    memory_arrays = ['img/index10.png', 'img/index10.png', 'img/index11.png', 'img/index11.png', 'img/index12.png', 'img/index12.png', 'img/index13.png', 'img/index13.png', 'img/index14.png', 'img/index14.png', 'img/index15.png', 'img/index15.png', 'img/index16.png', 'img/index16.png', 'img/index17.png', 'img/index17.png', 'img/index18.png', 'img/index18.png', 'img/index19.png', 'img/index19.png'];
  } else if (arg == "imm6") {

    LvlSec = 30;
    LvlAdd = 10;
    Lvl = 7;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box3.png');
    memory_arrays = ['img/index20.png', 'img/index20.png', 'img/index21.png', 'img/index21.png', 'img/index22.png', 'img/index22.png', 'img/index23.png', 'img/index23.png', 'img/index24.png', 'img/index24.png', 'img/index25.png', 'img/index25.png', 'img/index26.png', 'img/index26.png', 'img/index27.png', 'img/index27.png', 'img/index28.png', 'img/index28.png', 'img/index29.png', 'img/index29.png'];
  } else if (arg == "imm7") {

    LvlSec = 30;
    LvlAdd = 10;
    Lvl = 8;
    assign(Lvl, LvlSec);
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box3.png');
    memory_arrays = ['img/index20.png', 'img/index20.png', 'img/index21.png', 'img/index21.png', 'img/index22.png', 'img/index22.png', 'img/index23.png', 'img/index23.png', 'img/index24.png', 'img/index24.png', 'img/index25.png', 'img/index25.png', 'img/index26.png', 'img/index26.png', 'img/index27.png', 'img/index27.png', 'img/index28.png', 'img/index28.png', 'img/index29.png', 'img/index29.png'];
  } else if (arg == "imm8") {

    LvlSec = 30;
    LvlAdd = 10;
    Lvl = 9;
    assign(Lvl, LvlSec);
    Refresh();
    location.href = "#Full";
    Refresh();
    $(".GetIt").attr('src', 'img/box3.png');
    memory_arrays = ['img/index20.png', 'img/index20.png', 'img/index21.png', 'img/index21.png', 'img/index22.png', 'img/index22.png', 'img/index23.png', 'img/index23.png', 'img/index24.png', 'img/index24.png', 'img/index25.png', 'img/index25.png', 'img/index26.png', 'img/index26.png', 'img/index27.png', 'img/index27.png', 'img/index28.png', 'img/index28.png', 'img/index29.png', 'img/index29.png'];
  }

}

function Flip(id) {
  var a;
  var aClass;

  //check if we have shuffled at least one time 
  if (NoStop) {

    memory_arrays.memory_shuffle();
    NoStop = false;
  }
  if (memory_values.length < 2) {

    if (id == 'im0') {
      a = memory_arrays[0] + "";
      aClass = "#N1";
    }
    if (id == 'im1') {
      a = memory_arrays[1] + "";
      aClass = "#N2";
    }
    if (id == 'im2') {
      a = memory_arrays[2] + "";
      aClass = "#N3";
    }
    if (id == 'im3') {
      a = memory_arrays[3] + "";
      aClass = "#N4";
    }
    if (id == 'im4') {
      a = memory_arrays[4] + "";
      aClass = "#N5";
    }
    if (id == 'im5') {
      a = memory_arrays[5] + "";
      aClass = "#N6";
    }
    if (id == 'im6') {
      a = memory_arrays[6] + "";
      aClass = "#N7";
    }
    if (id == 'im7') {
      a = memory_arrays[7] + "";
      aClass = "#N8";
    }
    if (id == 'im8') {
      a = memory_arrays[8] + "";
      aClass = "#N9";
    }
    if (id == 'im9') {
      a = memory_arrays[9] + "";
      aClass = "#N10";
    }
    if (id == 'im10') {
      a = memory_arrays[10] + "";
      aClass = "#N11";
    }
    if (id == 'im11') {
      a = memory_arrays[11] + "";
      aClass = "#N12";
    }
    if (id == 'im12') {
      a = memory_arrays[12] + "";
      aClass = "#N13";
    }
    if (id == 'im13') {
      a = memory_arrays[13] + "";
      aClass = "#N14";
    }
    if (id == 'im14') {
      a = memory_arrays[14] + "";
      aClass = "#N15";
    }
    if (id == 'im15') {
      a = memory_arrays[15] + "";
      aClass = "#N16";
    }
    if (id == 'im16') {
      a = memory_arrays[16] + "";
      aClass = "#N17";
    }
    if (id == 'im17') {
      a = memory_arrays[17] + "";
      aClass = "#N18";
    }
    if (id == 'im18') {
      a = memory_arrays[18] + "";
      aClass = "#N19";
    }
    if (id == 'im19') {
      a = memory_arrays[19] + "";
      aClass = "#N20";
    }


    $(aClass).flippy({
      //color_target: "red",
      duration: "700",
      direction: "left",
      verso: "<img src=" + a + " width='100%' height='100%'>",
      onStart: function () {
        $(aClass).addClass('allM');
      }
    });
    if (AClass_Count < 2) {
      AClass[AClass_Count] = aClass;
      AClass_Count++;
    }

    if (memory_values == 0) {
      memory_values.push(a);
      memory_id.push(id);
    } else if (memory_values.length == 1) {
      memory_values.push(a);
      memory_id.push(id);
      if (memory_values[0] == memory_values[1]) {
        //increase the value of timer if there is a match of cards

        Up = Up + LvlAdd;


        //increament value of flipped cards inorder to track when all cards are flipped
        memory_flipped += 2;
        //clear all values and id so that they can be used again
        memory_values = [];
        memory_id = [];
        AClass_Count = 0;
        AClass = [];
        //check if the whole board is finished
        if (memory_flipped == memory_arrays.length) {

          if ((document.getElementById('Level').innerHTML == "9 /10") || (Lvl == 9)) {

            clearInterval(binded);

            //clear all values and id so that they can be used again
            Refresh();
            Alert.renderComplete();
          } else {
            clearInterval(binded);
            Refresh();
            Alert.render();
          }
        }
      } else {
        function flipBack() {
          card_1 = AClass[0];
          card_2 = AClass[1];
          $(card_1).flippyReverse();
          $(card_2).flippyReverse();
          $(card_1).removeClass('allM');
          $(card_2).removeClass('allM');

          //clear all values and id so that they can be used again later
          memory_values = [];
          memory_id = [];
          AClass_Count = 0;
          AClass = [];
        }
        setTimeout(flipBack, 1100);
      }
    }

  }

}
//count down timer function
function TimerStart(trigger, lvlN, lvlS) {
  Num = lvlN;
  Up = lvlS;
  if (trigger == "go") {

    binded = setInterval(Timer, 1000);
  }
}

function Timer() {
  if (Up == -1) {
    clearInterval(binded);
    Refresh();
    Alert.renderFail();
  } else {
    document.getElementById("Seconds").innerHTML = Up;
    Up--;
  }

}

function Refresh() {
  memory_values = [];
  memory_id = [];
  AClass_Count = 0;
  AClass = [];
  memory_flipped = 0;
}

//Customized AlertBox function
function AlertCustom() {
  this.render = function () {
    var W = window.innerWidth;
    var H = window.innerHeight;
    $('#Case').attr('src', 'img/Win.png');
    $('#But2').attr('src', 'img/Button2.png');
    var Alertback = document.getElementById("AlertBack");
    var Alertbox = document.getElementById("AlertBox");
    Alertback.style.display = "block";
    Alertback.style.height = H + "px";
    Alertbox.style.display = "block";
  }
  this.renderFail = function () {
    var W = window.innerWidth;
    var H = window.innerHeight;
    var Alertback = document.getElementById("AlertBack");
    var Alertbox = document.getElementById("AlertBox");
    $('#Known').attr('src', 'img/Sorry.png');
    $('#Case').attr('src', 'img/Fail.png');
    $('#But2').attr('src', 'img/Button.png');
    $('#But2').attr('onclick', 'Alert.Retry();');
    Alertback.style.display = "block";
    Alertback.style.height = H + "px";
    Alertbox.style.display = "block";
  }
  this.renderComplete = function () {
    var W = window.innerWidth;
    var H = window.innerHeight;
    $('#Case').attr('src', 'img/Win.png');
    $('#But2').attr('src', 'img/Transparent.png');
    $('#But2').removeAttr('onclick');
    var Alertback = document.getElementById("AlertBack");
    var Alertbox = document.getElementById("AlertBox");
    Alertback.style.display = "block";
    Alertback.style.height = H + "px";
    Alertbox.style.display = "block";
  }
  this.Retry = function () {
    document.getElementById('AlertBack').style.display = "none";
    document.getElementById('AlertBox').style.display = "none";
    $(".allM").flippyReverse();
    $(".allM").removeClass('allM');
    memory_arrays.memory_shuffle();
    assign(Lvl, LvlSec);
    TimerCounter = 0;
    //clear all values and id so that they can be used again later
    memory_values = [];
    memory_id = [];
    AClass_Count = 0;
    AClass = [];
  }
  this.Menu = function () {
    document.getElementById('AlertBack').style.display = "none";
    document.getElementById('AlertBox').style.display = "none";
    $(".allM").flippyReverse();
    $(".allM").removeClass('allM');
    memory_arrays.memory_shuffle();
    location.href = "#level_page";
    //clearInterval(binded);
    LvlSec = 0;
    LvlAdd = 0;
    Lvl = 0;
    assign(Lvl, LvlSec);
    TimerCounter = 0;
    //clear all values and id so that they can be used again later
    memory_values = [];
    memory_id = [];
    AClass_Count = 0;
    AClass = [];
  }

}

function choose() {
  document.getElementById('AlertBack').style.display = "none";
  document.getElementById('AlertBox').style.display = "none";
  $(".allM").flippyReverse();
  $(".allM").removeClass('allM');
  TimerCounter = 0;
  memory_values = [];
  memory_id = [];
  AClass_Count = 0;
  AClass = [];
  memory_arrays.memory_shuffle();

  if (Lvl == 1) {
    LvlSec = 60;
    LvlAdd = 50;
    Lvl = 2;
    memory_arrays = ['index0.png', 'index0.png', 'index1.png', 'index1.png', 'index2.png', 'index2.png', 'index3.png', 'index3.png', 'index4.png', 'index4.png', 'index5.png', 'index5.png', 'index6.png', 'index6.png', 'index7.png', 'index7.png', 'index8.png', 'index8.png', 'index9.png', 'index9.png'];
    assign(Lvl, LvlSec);

  } else if (Lvl == 2) {
    LvlSec = 60;
    LvlAdd = 50;
    Lvl = 3;
    assign(Lvl, LvlSec);
    memory_arrays = ['index0.png', 'index0.png', 'index1.png', 'index1.png', 'index2.png', 'index2.png', 'index3.png', 'index3.png', 'index4.png', 'index4.png', 'index5.png', 'index5.png', 'index6.png', 'index6.png', 'index7.png', 'index7.png', 'index8.png', 'index8.png', 'index9.png', 'index9.png'];
  } else if (Lvl == 3) {
    LvlSec = 40;
    LvlAdd = 20;
    Lvl = 4;
    assign(Lvl, LvlSec);
    memory_arrays = ['index10.png', 'index10.png', 'index11.png', 'index11.png', 'index12.png', 'index12.png', 'index13.png', 'index13.png', 'index14.png', 'index14.png', 'index15.png', 'index15.png', 'index16.png', 'index16.png', 'index17.png', 'index17.png', 'index18.png', 'index18.png', 'index19.png', 'index19.png'];
  } else if (Lvl == 4) {
    LvlSec = 40;
    LvlAdd = 20;
    Lvl = 5;
    assign(Lvl, LvlSec);
    memory_arrays = ['index10.png', 'index10.png', 'index11.png', 'index11.png', 'index12.png', 'index12.png', 'index13.png', 'index13.png', 'index14.png', 'index14.png', 'index15.png', 'index15.png', 'index16.png', 'index16.png', 'index17.png', 'index17.png', 'index18.png', 'index18.png', 'index19.png', 'index19.png'];
  } else if (Lvl == 5) {
    LvlSec = 40;
    LvlAdd = 20;
    Lvl = 6;
    assign(Lvl, LvlSec);
    memory_arrays = ['index10.png', 'index10.png', 'index11.png', 'index11.png', 'index12.png', 'index12.png', 'index13.png', 'index13.png', 'index14.png', 'index14.png', 'index15.png', 'index15.png', 'index16.png', 'index16.png', 'index17.png', 'index17.png', 'index18.png', 'index18.png', 'index19.png', 'index19.png'];
  } else if (Lvl == 6) {
    LvlSec = 30;
    LvlAdd = 10;
    Lvl = 7;
    assign(Lvl, LvlSec);
    memory_arrays = ['index20.png', 'index20.png', 'index21.png', 'index21.png', 'index22.png', 'index22.png', 'index23.png', 'index23.png', 'index24.png', 'index24.png', 'index25.png', 'index25.png', 'index26.png', 'index26.png', 'index27.png', 'index27.png', 'index28.png', 'index28.png', 'index29.png', 'index29.png'];
  } else if (Lvl == 7) {
    LvlSec = 30;
    LvlAdd = 10;
    Lvl = 8;
    assign(Lvl, LvlSec);
    memory_arrays = ['index20.png', 'index20.png', 'index21.png', 'index21.png', 'index22.png', 'index22.png', 'index23.png', 'index23.png', 'index24.png', 'index24.png', 'index25.png', 'index25.png', 'index26.png', 'index26.png', 'index27.png', 'index27.png', 'index28.png', 'index28.png', 'index29.png', 'index29.png'];
  } else if (Lvl == 8) {
    LvlSec = 30;
    LvlAdd = 10;
    Lvl = 9;
    assign(Lvl, LvlSec);
    memory_arrays = ['index20.png', 'index20.png', 'index21.png', 'index21.png', 'index22.png', 'index22.png', 'index23.png', 'index23.png', 'index24.png', 'index24.png', 'index25.png', 'index25.png', 'index26.png', 'index26.png', 'index27.png', 'index27.png', 'index28.png', 'index28.png', 'index29.png', 'index29.png'];
  }
}

var Alert = new AlertCustom();

document.onclick = function (e) {
  var tagerted = (window.event) ? event.srcElement : e.target;
  StartOver(tagerted.id);

};
