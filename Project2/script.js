 // This function removes default text when the user clicks in a name field.
function clearText(field, text) {
  // This checks if the field still has the default text.
  if (field.value === text) {
    // This clears the field.
    field.value = "";
  }
}

// This function checks the form before it submits.
function submitForm() {
  // This creates a list for error messages.
  let errors = [];

  // This gets the first name.
  let firstName = document.getElementById("firstName").value.trim();

  // This gets the last name.
  let lastName = document.getElementById("lastName").value.trim();

  // This gets the address.
  let address = document.getElementById("address").value.trim();

  // This gets the city.
  let city = document.getElementById("city").value.trim();

  // This gets the selected state.
  let state = document.getElementById("state").value;

  // This gets the zip code.
  let zip = document.getElementById("zip").value.trim();

  // This gets the area code.
  let areaCode = document.getElementById("areaCode").value.trim();

  // This gets the phone number.
  let phone = document.getElementById("phone").value.trim();

  // This gets the email address.
  let email = document.getElementById("email").value.trim();

  // This gets the confirm email address.
  let confirmEmail = document.getElementById("confirmEmail").value.trim();

  // This gets the comments.
  let comments = document.getElementById("comments").value.trim();

  // This pattern allows letters only.
  let lettersOnly = /^[A-Za-z]+$/;

  // This pattern allows letters and spaces only.
  let lettersSpaces = /^[A-Za-z\s]+$/;

  // This pattern allows address characters.
  let addressPattern = /^[A-Za-z0-9\s.,#-]+$/;

  // This pattern checks for 5 numbers.
  let zipPattern = /^[0-9]{5}$/;

  // This pattern checks for 3 numbers.
  let areaPattern = /^[0-9]{3}$/;

  // This pattern checks for 7 numbers.
  let phonePattern = /^[0-9]{7}$/;

  // This pattern checks for a basic valid email format.
  let emailPattern = /^[^\s@]{1,64}@[^\s@]{1,252}\.[^\s@]+$/;

  // This checks the first name.
  if (firstName === "" || firstName === "First Name" || !lettersOnly.test(firstName)) errors.push("Enter a valid first name.");

  // This checks the last name.
  if (lastName === "" || lastName === "Last Name" || !lettersOnly.test(lastName)) errors.push("Enter a valid last name.");

  // This checks the address.
  if (address === "" || !addressPattern.test(address)) errors.push("Enter a valid address.");

  // This checks the city.
  if (city === "" || !lettersSpaces.test(city)) errors.push("Enter a valid city.");

  // This checks the state.
  if (state === "") errors.push("Select a state.");

  // This checks the zip code.
  if (!zipPattern.test(zip)) errors.push("Enter a valid 5 digit zip code.");

  // This checks the area code.
  if (!areaPattern.test(areaCode)) errors.push("Enter a valid 3 digit area code.");

  // This checks the phone number.
  if (!phonePattern.test(phone)) errors.push("Enter a valid 7 digit phone number.");

  // This checks the email format.
  if (!emailPattern.test(email)) errors.push("You have entered an invalid e-mail address.");

  // This checks that the emails match.
  if (email !== confirmEmail) errors.push("Email addresses must match.");

  // This checks that one meal choice is selected.
  if (!document.querySelector('input[name="meal"]:checked')) errors.push("Select a meal preference.");

  // This checks that at least two contact methods are selected.
  if (document.querySelectorAll('input[name="contact"]:checked').length < 2) errors.push("Select at least two contact methods.");

  // This checks the comment length.
  if (comments.length > 250) errors.push("Comments must be 250 characters or less.");

  // This checks if there are errors.
  if (errors.length > 0) {
    // This displays the errors on the page.
    document.getElementById("errors").innerHTML = errors.join("<br>");

    // This stops the form from submitting.
    return false;
  }

  // This clears the error messages.
  document.getElementById("errors").innerHTML = "";

  // This submits the form.
  document.getElementById("form").submit();
}

// This function resets the form.
function resetForm() {
  // This clears the form fields.
  document.getElementById("form").reset();

  // This clears the first name field.
  document.getElementById("firstName").value = "";

  // This clears the last name field.
  document.getElementById("lastName").value = "";

  // This clears the error messages.
  document.getElementById("errors").innerHTML = "";
}