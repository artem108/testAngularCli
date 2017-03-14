import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
// ___________________my js_________________________

window.onload = function() {

var tab1 = {
  title: "Tab1",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo."
}
var tab2 = {
  title: "Tab2",
  content: "Eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do."
}
var tab3 = {
  title: "Tab3",
  content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.Eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
var tabSpace = document.getElementById('tab');
var titleSpace = document.getElementById('title');
var imgDiv = document.getElementById('img');
var btn1 = document.getElementById('1');
var btn2 = document.getElementById('2');
var btn3 = document.getElementById('3');

// ___________this part for button 1 2 3______________________

function btnEvent () {

    btn1.addEventListener( "click" , function tabOne () {
      imgDiv.classList.remove('imgTab2');
      imgDiv.classList.remove('imgTab3');
      imgDiv.classList.add('imgTab1');
      titleSpace.innerHTML = tab1.title;
      tabSpace.innerHTML = tab1.content;
    });

    btn2.addEventListener( "click" , function tabTwo() {
      imgDiv.classList.remove('imgTab1');
      imgDiv.classList.remove('imgTab3');
      imgDiv.classList.add('imgTab2');
      titleSpace.innerHTML = tab2.title;
      tabSpace.innerHTML = tab2.content;
    });

    btn3.addEventListener( "click" , function tabThree () {
      imgDiv.classList.remove('imgTab1');
      imgDiv.classList.remove('imgTab2');
      imgDiv.classList.add('imgTab3');
      titleSpace.innerHTML = tab3.title;
      tabSpace.innerHTML = tab3.content;
    });
};
  btnEvent();

  // ______________ part input search___________________

  document.getElementById('searchBtn').onclick = function () {

    var value = (<HTMLInputElement>document.getElementById('inputValue')).value;

    if (value === "Tab1") {
      imgDiv.classList.remove('imgTab2');
      imgDiv.classList.remove('imgTab3');
      imgDiv.classList.add('imgTab1');
      titleSpace.innerHTML = tab1.title;
      tabSpace.innerHTML = tab1.content;
    } else if (value === "Tab2") {

        imgDiv.classList.remove('imgTab1');
        imgDiv.classList.remove('imgTab3');
        imgDiv.classList.add('imgTab2');
        titleSpace.innerHTML = tab2.title;
        tabSpace.innerHTML = tab2.content;
    } else if (value === "Tab3") {

        imgDiv.classList.remove('imgTab1');
        imgDiv.classList.remove('imgTab2');
        imgDiv.classList.add('imgTab3');
        titleSpace.innerHTML = tab3.title;
        tabSpace.innerHTML = tab3.content;
      } else {
        alert("Sorry, wrong name Tab!")
      }
  };













    };
