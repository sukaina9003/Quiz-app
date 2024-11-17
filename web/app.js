
const profilePhotoImg = document.getElementById("profilePhotoImg");
const profilePhotoInput = document.getElementById("profilePhotoInput");

profilePhotoImg.addEventListener("click", () => {
  profilePhotoInput.click();
});

profilePhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    profilePhotoImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});
function showCard() {
  var getData = localStorage.getItem("userData");
  var parseData = JSON.parse(getData);
  console.log(parseData);
  document.getElementById("card").style.display = "block";
  var card = document.getElementById("card");
  card.innerHTML = `
<div class="card-body">

        <h6 class="card-header text-secondary mb-3" id="name">Name: ${parseData.name}</h6> 
        
        <p class="card-text text-secondary" id="roll">Roll Number: ${parseData.phoneNumber}</p>
        <p class="card-text text-secondary" id="roll">Email: ${parseData.email}</p>
        <button onclick="redirect()" class="btn btn-danger">
          Log Out
        </button>
      </div>
`;
}

function hideCard() {
  setTimeout(() => {
    document.getElementById("card").style.display = "none";
  }, 4000);
}
function registration() {
  event.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phoneNumber = document.getElementById("phoneNumber");
  var password = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (password.value !== cpassword.value) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Passwords don't match!",
    });
    
  } else if (!regex.test(password.value)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `Password must contain at least one lowercase alphabet i.e. [a-z]
            At least one uppercase alphabet i.e. [A-Z]
            At least one Numeric digit i.e. [0-9]
            At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
            Also, the total length must be in the range [8-15]
            `,
    });
    
    // setTimeout(() => {
    //   window.location.href = "./index.html";
    // }, 2000);
  }else{
    Swal.fire({
        icon: "success",
        title: `Your Account has been Created`,
        showConfirmButton: false,
        timer: 1500
      });
     setTimeout(() => {
        window.location.href = "./Quiz-App/index.html";
      }, 2500);
  }
  
  

  var userData = {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    password: password.value,
    cpassword: cpassword.value,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  // var getData = localStorage.getItem("userData")
  // var parseData = JSON.parse(getData)
  // console.log(parseData)
  
  
}

function getLocalData() {
  var getData = localStorage.getItem("userData");
  var parseData = JSON.parse(getData);
  console.log(parseData);
  var getLocalDataDiv = document.getElementById("getLocalDataDiv");
  getLocalDataDiv.innerHTML = `
     <ul>
        <li>Name: ${parseData.name}</li>
        <li>Email: ${parseData.email}</li>
        <li>Phone Number: ${parseData.phoneNumber}</li>
     </ul>
    `;
}
getLocalData();

function redirect() {
  window.location.href = "../index.html";
}
function login() {
  event.preventDefault();
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  var getData = localStorage.getItem("userData");
  var parseData = JSON.parse(getData);
  if (parseData.email !== email.value) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email...",
      text: "Try another email",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else if (parseData.password !== password.value) {
    Swal.fire({
      icon: "error",
      title: "Incorrect Password",
      footer: '<a href="./index.html">Forgot password?</a>',
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Login Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.href = "./Quiz-App/index.html";
    }, 2000);
  }
}
