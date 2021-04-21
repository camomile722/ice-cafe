var wholeForm = document.querySelector('.form-container');
var allInputs = document.querySelectorAll('.form-container input, .form-container .select');
var male = document.querySelector('.male');
var female = document.querySelector('.female');

function validate() {

  isValid = true;

  for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].classList.remove('is-invalid');
    allInputs[i].nextElementSibling.classList.remove('is-invalid');

    switch (allInputs[i].name) {

      //--------------FIRST AND LASTNAME VALIDATION

      case 'firstname':
      case 'lastname':
        if (allInputs[i].value === '') {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
        }
        break;

      case 'select':
        if (allInputs[i].value == "0") {
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          isValid = false;
        }
        break;

        ///--------EMAIL  VALIDATION

      case 'email':

        if (allInputs[i].value === "") {
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          isValid = false;
        }

        var regExpEmail = /.+@.+\..+/;
        if (!regExpEmail.test(allInputs[i].value) && (allInputs[i].value !== "")) {
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
          isValid = false;
        }
        break;
        //---------------PHONE VALIDATION
      case 'phone':
        if (allInputs[i].value === "") {
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          isValid = false;
        }
        var regExpPhone = /^\+4\d\d\d{9,16}$/;
        if (!regExpPhone.test(allInputs[i].value) && (allInputs[i].value !== "")) {
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = 'Bitte geben Sie eine gültige Telefonnummer ein <br> Beispiel: +491739992211';
          isValid = false;
        }
        break;
        //---------------AGB VALIDATION
      case 'agb':
        if (!allInputs[i].checked) {
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          isValid = false;
        }
        break;
        //---------------GENDER VALIDATION
      case 'gender':
        if (!male.checked && !female.checked) {
          male.nextElementSibling.classList.add('is-invalid');
          isValid = false;
        }
        default:
    }
  }
  return isValid;
}
//------------Prevent the Form from submit
wholeForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (validate() == true) {
    console.log('submit');
  } else {
    console.log('please change inputs');
  }
});

for (var i = 0; i < allInputs.length; i++) {
  allInputs[i].classList.remove('is-invalid');
  allInputs[i].nextElementSibling.classList.remove('is-invalid');

  allInputs[i].addEventListener('change', function(evt) {
    //remove text from gender
    male.nextElementSibling.classList.remove('is-invalid');
    //remove border red from all inputs
    evt.target.classList.remove('is-invalid');
    //remove text for allInputs, but not for agb
    if (evt.target.name !== 'agb')
      evt.target.nextElementSibling.classList.remove('is-invalid');
    else {
      evt.target.nextElementSibling.classList.remove('is-invalid');
    }
  })
}
