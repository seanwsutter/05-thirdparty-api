// $(document).ready(function () {
var currentTime = dayjs().format("dddd, MMMM D, h:mm:ss A");
var displayCurrentTime = document.querySelector("#currentDay");
// var newBlock = document.querySelector(".px-5")

displayCurrentTime.textContent = currentTime;

var saveBtn = document.querySelector(".fas fa-save")

/* saveBtn click function */
$(".saveBtn").click(function () {
  var block = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();

localStorage.setItem(block, text)
  console.log("stored item", (block, text));
});

/* display conent from storage, prevents default of refreshing page */
function displayTimeBlock() {
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayTimeBlock();

/* checkHour function */
function checkHour() {
  var currentHour = dayjs().hour() // console.log(currentHour);
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log("checking hour:", currentHour);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
checkHour();

// function getBlock() {
//   for (var i = 9; i < 17; i++) {
//     var hourName = "9AM";
//     var hourData = "";
//     newBlock = $(`
  
//   <div id="hour-${i}" class="row time-block ${currentHour}">
//       <div class="col-2 col-md-1 hour text-center py-3">${hourName}</div>
//       <textarea class="col-8 col-md-10 description" rows="3">${hourData}</textarea>
//       <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//         <i class="fas fa-save" aria-hidden="true"></i>
//       </button>
//     </div>
//     `)
//   }
// }
// getBlock()
/* each calendar row has to display currnet hour
indiciate if row is past present future
display entry available */

// function getBlocks() {
// for (var i = 9; i < 17; i++) {
//   var hourName = "9AM";
//   var hourData = ""

//   const newBlock = $(`
  
//   <div id="hour-${i}" class="row time-block ${currentHour}">
//       <div class="col-2 col-md-1 hour text-center py-3">${hourName}</div>
//       <textarea class="col-8 col-md-10 description" rows="3">${hourData}</textarea>
//       <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//         <i class="fas fa-save" aria-hidden="true"></i>
//       </button>
//     </div>
//     `)
// }

// getBlocks()
// }) // jQuery methods go here...

/* comments

// gets hours, loops through time blocks, turns id into integer for comparision
// and if statement to check hours then adjust css

// The.val() method gets the values of elements such as input, select and textarea.
// When called on an empty collection, it returns undefined.

/* Event delegation allows us to attach a single event listener, to a parent element, that
will fire for all descendants matching a selector, whether those descendants exist now or
are added in the future.
Both on() and delegate() functions allow us to perform event delegation. */

// The.each() method is designed to make DOM looping constructs concise and less error - prone.When called it iterates over the DOM elements that are part of the jQuery object.Each time the callback runs, it is passed the current loop iteration, beginning from 0. More importantly, the callback is fired in the context of the current DOM element, so the keyword this refers to the element.

// A page can't be manipulated safely until the document is "ready."
// jQuery detects this state of readiness for you.
// Code included inside $(document).ready() will only run once the page Document Object Model(DOM) is ready for JavaScript code to execute.
// Code included inside $(window).on("load", function () { ... }) will run once the entire page(images or iframes), not just the DOM, is ready.

/* notes

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.

// HINT: What does `this` reference in the click listener function?
// How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
// HINTS: How can the id attribute of each time-block be used to conditionally
// add or remove the past, present, and future classes?

// How can Day.js be used to get the current hour in 24-hour time?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
// HINT: How can the id // attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// A page can't be manipulated safely until the document is "ready."
// jQuery detects this state of readiness for you.
// Code included inside $(document).ready() will only run once the page Document Object Model(DOM) is ready for JavaScript code to execute.
// Code included inside $(window).on("load", function () { ... }) will run once the entire page(images or iframes), not just the DOM, is ready.
  
// event.preventDefault(); 
// .on event handler
// stored 'key' of time block as time
// stored value of textarea (block, value)
// console.log("set item in local storage");

// saveBtn.addEventListener("click"), function () {}

// $('.box-container').on('click', ".box", function () {
// var txt = $(this).attr('box'); 
$('ul').append("<li class='list'>remove " + txt + "</li>")
;});

// $('ul').on('click', '.list', function () $(this).remove();});

Basic syntax is: $(selector).action()

A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:
$(this).hide() - hides the current element.
$("p").hide() - hides all <p> elements.
$(".test").hide() - hides all elements with class="test".
$("#test").hide() - hides the element with id="test". */
