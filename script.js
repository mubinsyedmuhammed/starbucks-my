





// Function to handle form submission

function handleSubmit() {
  // Prevent the default form submission behavior

  // Get the form input values
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  // Validate form inputs (example validation)
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    return false;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    return false;
  }

  // Clearing  form inputs after submission
  
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Displaying  a success message 

  alert('Thank you for your message!');
  
}

// Add event listener to the form

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);



//onclick function to redirect to store location 

function redirectToLocationkoramangala() {
    window.location.href = "https://www.google.com/maps?rlz=1C1RXQR_enIN1047IN1047&output=search&q=starbucks+koramangala&entry=mc&sa=X&ved=2ahUKEwiqzvnS8vb_AhWAzzgGHWnjCSkQ0pQJegQIDxAB";
  }

  function redirectToLocationwhitefield()
  {
    window.location.href = "https://www.google.com/maps?rlz=1C1RXQR_enIN1047IN1047&output=search&q=starbucks+koramangala&entry=mc&sa=X&ved=2ahUKEwiqzvnS8vb_AhWAzzgGHWnjCSkQ0pQJegQIDxAB";

  }

  function redirectToLocationHSR()
  {
    window.location.href = "https://www.google.com/maps?rlz=1C1RXQR_enIN1047IN1047&output=search&q=starbucks+koramangala&entry=mc&sa=X&ved=2ahUKEwiqzvnS8vb_AhWAzzgGHWnjCSkQ0pQJegQIDxAB";
 
  }