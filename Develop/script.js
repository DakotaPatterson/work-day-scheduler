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

    });
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    $('.time-block').each(function() {

      var currentTime = dayjs().hour();

    });

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    


    //This code is used to display the current date in the header of the page.
      var currentDate = dayjs().format('dddd, MMMM D');
      $('#currentDay').text(currentDate);
  });
