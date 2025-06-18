const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const usernameVal = userName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === "") {
    setError(usernameVal, "Username is required");
  } else {
    setSucess(userName);
  }

  if (emailVal === "") {
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    setError(email, "Please Enter a valid Email");
  } else {
    setSucess(email);
  }

  if (passwordVal === "") {
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    setError(password, "Password must be atleast 8 Characters long");
  } else {
    setSucess(password);
  }

  if (cpasswordVal === "") {
    setError(cpassword, "Confirm password is required");
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "Confirm Password does not match! ");
  } else {
    setSucess(cpassword);
  }
}

function setError(element, message) {
  const inputgroup = element.parentElement;
  const errorElenent = inputgroup.querySelector(".error");

  errorElenent.innerText = message;
  inputgroup.classList.add("error");
  inputgroup.classList.remove("sucesss");
}

function setSucess(element) {
  const inputgroup = element.parentElement;
  const errorElenent = inputgroup.querySelector(".error");

  errorElenent.innerText = "";
  inputgroup.classList.add("sucesss");
  // inputgroup.classlist.add("sucesss");
  inputgroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// const validateEmail = (email) => {
//   return structuredClone(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>[\]\\.,;:\s@"]+)*)|(."+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1.3}\])|((a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
// ^(([^<>()[\]\\.,;:\s@"]+(\.[^<>[\]\\.,;:\s@"]+)*)|(."+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1.3}\])|((a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
