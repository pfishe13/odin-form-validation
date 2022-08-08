const form = (() => {
  const initializeForm = () => {
    const formContainer = document.getElementById('main-form-container');
    const form = document.createElement('form');
    formContainer.appendChild(form);

    // Sign Up Header
    const header = document.createElement('h1');
    header.textContent = 'Sign Up';
    form.appendChild(header);

    // Email
    const emailDiv = document.createElement('div');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'userEmail');
    emailLabel.textContent = 'Email';
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'userEmail');
    emailDiv.appendChild(emailLabel);
    const emailSpan = document.createElement('span');
    emailSpan.classList.add('error');
    emailDiv.appendChild(emailSpan);
    emailDiv.appendChild(email);
    email.addEventListener('input', function (e) {
      if (email.validity.valid) {
        emailSpan.textContent = '';
        emailSpan.className = 'error';
      } else {
        showError(email, emailSpan, 'Input needs to be a valid email address');
      }
    });

    form.appendChild(emailDiv);

    // Password
    const passDiv = document.createElement('div');
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'userPass');
    passwordLabel.textContent = 'Password';
    const pass = document.createElement('input');
    pass.id = 'pass';
    pass.setAttribute('type', 'password');
    pass.setAttribute('name', 'userPass');
    pass.setAttribute('minlength', '7');
    passDiv.appendChild(passwordLabel);
    const passwordSpan = document.createElement('span');
    passwordSpan.classList.add('error');
    passDiv.appendChild(passwordSpan);
    passDiv.appendChild(pass);
    pass.addEventListener('input', function (e) {
      if (pass.validity.valid) {
        passwordSpan.textContent = '';
        passwordSpan.className = 'error';
      } else {
        showError(
          pass,
          passwordSpan,
          'Password needs to be atleast 7 characters'
        );
      }
    });
    form.appendChild(passDiv);

    // Password Confirmation
    const pass2Div = document.createElement('div');
    const password2Label = document.createElement('label');
    password2Label.setAttribute('for', 'userPass2');
    password2Label.textContent = 'Confirm Password';
    const pass2 = document.createElement('input');
    pass2.setAttribute('type', 'password');
    pass2.setAttribute('name', 'userPass2');
    pass2Div.appendChild(password2Label);
    const password2span = document.createElement('span');
    password2span.classList.add('error');
    pass2Div.appendChild(password2span);
    pass2Div.appendChild(pass2);
    pass2.addEventListener('input', function (e) {
      const pass1 = document.getElementById('pass').value;
      if (pass2.value === pass1) {
        pass2.classList.remove('invalid');
        password2span.textContent = '';
        password2span.className = 'error';
      } else {
        pass2.classList.add('invalid');
        showError(pass2, password2span, 'Passwords need to match');
      }
    });
    form.appendChild(pass2Div);

    // Country
    const countryDiv = document.createElement('div');
    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('for', 'userCountry');
    countryLabel.textContent = 'Country';
    const country = document.createElement('input');
    country.setAttribute('type', 'text');
    country.setAttribute('name', 'userCountry');
    countryDiv.appendChild(countryLabel);
    const countrySpan = document.createElement('span');
    countrySpan.classList.add('error');
    countryDiv.appendChild(countrySpan);
    countryDiv.appendChild(country);
    // country.addEventListener('input', function (e) {
    //   if (country.validity.valid) {
    //     countrySpan.textContent = '';
    //     countrySpan.className = 'error';
    //   } else {
    //     showError(country, countrySpan, 'Must live in the United States');
    //   }
    // });
    form.appendChild(countryDiv);

    // Zip Code
    const zipDiv = document.createElement('div');
    const zipLabel = document.createElement('label');
    zipLabel.setAttribute('for', 'userZip');
    zipLabel.textContent = 'Zip Code';
    const zip = document.createElement('input');
    zip.setAttribute('type', 'text');
    zip.setAttribute('inputmode', 'numeric');
    zip.setAttribute('name', 'userZip');
    zip.setAttribute('pattern', '[0-9]{5}');
    zipDiv.appendChild(zipLabel);
    const zipSpan = document.createElement('span');
    zipSpan.classList.add('error');
    zipDiv.appendChild(zipSpan);
    zipDiv.appendChild(zip);
    zip.addEventListener('input', function (e) {
      if (zip.validity.valid) {
        zipSpan.textContent = '';
        zipSpan.className = 'error';
      } else {
        showError(zip, zipSpan, 'Enter a 5 digit zip code');
      }
    });
    form.appendChild(zipDiv);

    // Submit Button
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Sign Up');
    form.appendChild(submit);
  };

  const showError = (inputElement, span, message) => {
    span.textContent = message;
    if (inputElement.validity.valueMissing) {
      span.textContent = 'Cannot leave blank';
    }
    span.className = 'error active';
  };

  return { initializeForm };
})();

form.initializeForm();
