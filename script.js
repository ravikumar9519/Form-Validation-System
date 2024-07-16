document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("reg-form");
  if (form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault();

          let firstName = document.getElementById("firstName");
          let lastName = document.getElementById("lastName");
          let email = document.getElementById("inputEmail4");
          let password = document.getElementById("password");
          let conpassword = document.getElementById("verify-password");
          let city = document.getElementById("inputCity");
          let state = document.getElementById("inputState");

          let isValid = true;

          if (!isValidInput(firstName.value, 50)) {
              setError(firstName, "First name must start with a capital letter and contain no spaces or special characters, and be up to 50 characters.");
              isValid = false;
          } else {
              setSuccess(firstName);
          }

          if (!isValidInput(lastName.value, 50)) {
              setError(lastName, "Last name must start with a capital letter and contain no spaces or special characters, and be up to 50 characters.");
              isValid = false;
          } else {
              setSuccess(lastName);
          }

          if (!validateEmail(email.value)) {
              setError(email, "Please enter a valid email address.");
              isValid = false;
          } else {
              setSuccess(email);
          }

          if (!validatePassword(password.value)) {
              setError(password, "Passwords Should Have Letter, Special symbols, Numbers And Length >=8");
            
              isValid = false;
          } else {
              setSuccess(password);
          }

          if (!validateConfPassword(password.value, conpassword.value)) {
            setError(conpassword, "Passwords do not match.");
            isValid = false;
          } else {
              setSuccess(conpassword);
          }

          if (!isValidInput(city.value, 50)) {
              setError(city, "City must start with a capital letter and contain no spaces or special characters, and be up to 50 characters.");
              isValid = false;
          } else {
              setSuccess(city);
          }

          if (!isValidState(state.value)) {
              setError(state, "Please select a state from India.");
              isValid = false;
          } else {
              setSuccess(state);
          }

          if (isValid) {
              alert("Form submitted successfully!");
              form.submit();
          }
      });
  } else {
      console.error("Form element not found!");
  }
});

function isValidInput(input, maxLength) {
  const nameRegex = /^[A-Z][a-zA-Z]*$/;
  return nameRegex.test(input) && input.length <= maxLength;
}

function isValidState(state) {
  const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];
  return indianStates.includes(state);
}

function validateConfPassword(password, conpassword) {
  return password === conpassword;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 8;
}

function setError(element, message) {
  element.classList.remove("success");
  element.classList.add("error");
  let errorElement = element.nextElementSibling;
  if (errorElement) {
      errorElement.innerText = message;
  }
}

function setSuccess(element) {
  element.classList.remove("error");
  element.classList.add("success");
  let errorElement = element.nextElementSibling;
  if (errorElement) {
      errorElement.innerText = "";
  }
}

function populateStates() {
  const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];
  let stateSelect = document.getElementById("inputState");

  indianStates.forEach(state => {
      let option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
  });
}

populateStates();
