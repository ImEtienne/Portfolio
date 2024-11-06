'use strict'

/**
 *  footer year
 */
const year = document.getElementById('year');
const date = new Date();
year.innerHTML = date.getFullYear();

/* 2 btn introduction */
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Supprime la classe active de tous les boutons
    btns.forEach((b) => {
      b.classList.remove("active");
    });

    // Ajoute la classe active au bouton cliqué
    btn.classList.add("active");
  });
});

/* menu active */
const navLinks = document.querySelectorAll(".nav__link");

window.onscroll = () => {
  // Par défaut, considère que la page est à l'accueil
  let isHome = true;

  // Parcours des sections
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 60; // ajuste la position en fonction de la hauteur du header
    
    // Vérifie si une autre section est dans la vue
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
      isHome = false; // Si une autre section est dans la vue, ce n'est pas la page d'accueil
    }
  });

  // Parcours des liens de navigation et détermine le lien actif en fonction de la section visible
  navLinks.forEach(link => {
    const sectionId = link.getAttribute('href').substring(1); // Ignore le '#'
    const section = document.getElementById(sectionId);
    const sectionTop = section.offsetTop - 60; // ajuste la position en fonction de la hauteur du header

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
      // Ajoute la classe active au lien correspondant à la section visible
      link.classList.add('active');
    } else {
      // Retire la classe active des autres liens
      link.classList.remove('active');
    }
  });

  // Si la page est à l'accueil et que le lien vers l'accueil n'a pas déjà la classe active, ajoute la classe active
const homeLink = document.querySelector('header nav ul li a[href="#home"]');
  if (isHome) {
    homeLink.classList.add('active');
  } 
}



/**
 *  Scroll btn top
 */

const btn = document.querySelector(".bton");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
}

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/** end btn scroll */

/**
 * scroll fixed header
 */
const mainHead = document.querySelector('.main-head');

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (window.scrollY > 100) { // Remplace 100 par le nombre de pixels où tu veux que le header devienne fixe
    mainHead.classList.add('fixed-header');
  } else {
    mainHead.classList.remove('fixed-header');
  }
}

mainHead.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


/**
 *  form Validation
 */
const firstname = document.getElementById('firstname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const object = document.getElementById('object');
const message = document.getElementById('message');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
      firstname: firstname.value,
      username: username.value,
      email: email.value,
      phone: phone.value,
      object: object.value,
      message: message.value
    }

    if (validateInput()) {
      document.getElementById('loader').classList.remove('hidden');
      document.getElementById('sendButton').disabled = true;
      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
          Toastify({
            text: "Message envoyé avec succès",
            duration: 3000, // Durée en millisecondes
            gravity: "top", // Position de la notification (top, bottom)
            position: "center", // Alignement de la notification (left, center, right)
            backgroundColor: "green", // Couleur de fond de la notification
          }).showToast();
          
            resetForm();
          
        } else {
          Toastify({
            text: "Erreur lors de l'envoi du message",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
          }).showToast();
        }
        document.getElementById('loader').classList.add('hidden');
        document.getElementById('sendButton').disabled = false; 
      };
      xhr.send(JSON.stringify(formData));
      } else {
        Toastify({
            text: "Veuillez remplir tous les champs avant d'envoyer le message",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
        }).showToast();
    }
  });
});

// Fonction pour réinitialiser le formulaire
const resetForm = () => {
    // Réinitialise les valeurs des champs
    firstname.value = '';
    username.value = '';
    email.value = '';
    phone.value = '';
    object.value = '';
    message.value = '';

    // Réinitialise les messages d'erreur et de validation
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(div => {
        div.innerHTML = ''; // Efface le contenu
        div.style.display = 'none'; // Cache le div d'erreur
    });

    // Retire les classes d'erreur et de succès
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(control => {
        control.classList.remove('error');
        control.classList.remove('succes');
    });
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  let iconExclamation = document.createElement('i'); 
 
  iconExclamation.classList.add('fa-solid', 'fa-circle-exclamation'); 
  errorDisplay.innerHTML = ''; 

  errorDisplay.appendChild(document.createTextNode(message)); 
  errorDisplay.appendChild(document.createTextNode(' ')); 
  errorDisplay.appendChild(iconExclamation); 

  errorDisplay.style.color = "#ff3860";
  errorDisplay.style.fontSize = "10px";
  errorDisplay.style.marginTop = "3px";

  inputControl.classList.add('error');
  inputControl.classList.remove('succes'); 
}

const setSucces = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  let check = document.createElement('i'); 
 
  check.classList.add('fa-solid', 'fa-circle-check'); 

  errorDisplay.innerText = '';

  errorDisplay.appendChild(document.createTextNode(message)); 
  errorDisplay.appendChild(document.createTextNode(' ')); 
  errorDisplay.appendChild(check); 

  errorDisplay.style.color = "#09c372";
  errorDisplay.style.fontSize = "10px";
  errorDisplay.style.marginTop = "3px";
  inputControl.classList.add('succes');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
  const regex = /^\+\d{1,3}\d{9}$/;;
  return regex.test(phone);
}

const validateInput = () => {
  let isValid = true;
  const firstnameValue = firstname.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const objectValue = object.value.trim();
  const messageValue = message.value.trim();

  if (firstnameValue === '') { 
    setError(firstname, 'The firstname is required');
    isValid = false; 
  } else {
    setSucces(firstname, 'Valide');
  }

  if (usernameValue === '') { 
    setError(username, 'The username is required');
    isValid = false;
  } else {
    setSucces(username, 'Valide');
  }

  if (emailValue === '') {
    setError(email, 'The email is required')
    isValid = false;
  } else if(!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email address')
    isValid = false;
  } else {
    setSucces(email, 'Valide');
  }

  if (phoneValue === '') {
    setError(phone, 'The phone is required')
    isValid = false;
  } else if(!isValidPhone(phoneValue)){
    setError(phone, 'Please provide a valid phone number')
    isValid = false;
  } else {
     setSucces(phone, 'Valide');
  }

  if (objectValue === '') { 
    setError(object, 'The object is required');
    isValid = false;
  } else if( objectValue.length < 5 || objectValue.length > 20) {
    setError(object, 'Message must be at least 15 character')
    isValid = false;
  } else {
    setSucces(object, 'Valide');
  }

  if (messageValue === '') {
    setError(message, 'The message is required')
    isValid = false;
  } else if (messageValue.length < 20){
    setError(message, 'Message must be at least 20 character')
    isValid = false;
  } else {
    setSucces(message, 'Valide');
  }
  return isValid;
};
