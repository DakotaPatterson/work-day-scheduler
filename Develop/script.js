//Initilizes a variable to be used in the save button function
var removeHidden= $(".saveChanges");
//This makes sure the code is not executed until after the DOM has fully loaded.
$(function () {

    //This adds the event listener for clicks on the save buttons.
    $(".saveBtn").on('click', function() {

      //This is getting the closest ancestor of the element that has the class time-block and grabs the ID.
      var timeBlock = $(this).closest('.time-block').attr('id');
      
      //This is how we are getting the value of textarea 
      var userInput = $(this).siblings('.description').val();

      //This saves the userInput that is retrieved above in the local storage with the key being 
      //the ID retrived in the timeBlock var.
      localStorage.setItem(timeBlock, userInput);

      //This displays the message hidden in the html for 2 seconds if when the save button is clicked
      //the string in userInput is not empty.
      if (userInput !== ""){

      removeHidden.removeClass("hidden");

      var displayInterval = setInterval(function () {
        removeHidden.addClass("hidden");
        clearInterval(displayInterval);
      }, 2000);
    }

    });
    
    //This function takes the classes of time-block and loops through each of them and applies 
    //the code inside the function.
    $('.time-block').each(function() {

      //This takes the string ID associted with each time div and makes the second part after the 
      //hyphon a integer to be set to time.
      var time = parseInt($(this).attr('id').split('-')[1]);

      //This sets the current hour to the variable of currentTime.
      var currentTime = dayjs().hour();

      //This if/else if statement compares the current time to the time of each time-block and 
      //sets either past, present or future css classes to determine the color of each section.
      if (time < currentTime) {
        $(this).addClass('past');
      } else if (time === currentTime){
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }

    });

    //This function gets the userInput that is saved in the local storage.
    $('.time-block').each(function() {
      var timeBlock = $(this).attr('id');
      var savedInput = localStorage.getItem(timeBlock);

      // Set the textarea value with the stored input
      $(this).find('.description').val(savedInput);
  });

    //This code is used to display the current date in the header of the page.
      var currentDate = dayjs().format('dddd, MMMM D');
      $('#currentDay').text(currentDate);
  });
