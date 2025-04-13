function showSection(id, element) {
  const contactSection = document.getElementById('contact');
  const contactForm = document.getElementById('contactForm');
  const isLeavingContact = contactSection.style.display === 'block' && id !== 'contact';
  
  if (isLeavingContact && contactForm) {
    contactForm.reset();
  }

  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');
}



// Function to toggle between light and dark themes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-icon').classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
  }
}

const projectDetails = {
  "Portfolio Website": {
    desc: "This project is a clean and responsive personal website to showcase skills and projects. Built with HTML, CSS (Bootstrap), and a bit of JavaScript for interactivity.",
    stack: [
     { name: "HTML5", icon: "<img src='https://skillicons.dev/icons?i=html' alt='HTML5' width='32' height='32' class='me-2'/>" },
     { name: "Bootstrap", icon: "<img src='https://skillicons.dev/icons?i=bootstrap' alt='Bootstrap' width='32' height='32' class='me-2'/>" },
     { name: "JavaScript", icon: "<img src='https://skillicons.dev/icons?i=javascript' alt='JavaScript' width='32' height='32' class='me-2'/>" }
     ]
  },
  "To-Do App": {
  desc: "A simple JavaScript to-do list app that uses local storage to remember your tasks. Features include add/delete, mark as complete, and filtering.",
  stack: [
  { name: "HTML5", icon: "<img src='https://skillicons.dev/icons?i=html' alt='HTML5' width='32' height='32' class='me-2'/>" },
  { name: "JavaScript", icon: "<img src='https://skillicons.dev/icons?i=javascript' alt='JavaScript' width='32' height='32' class='me-2'/>" },
  { name: "CSS3", icon: "<img src='https://skillicons.dev/icons?i=css' alt='CSS3' width='32' height='32' class='me-2'/>" }
  ]
  },
  "Weather Dashboard": {
  desc: "Weather app pulling data from the OpenWeatherMap API. Displays temperature, humidity, forecast, and a 5-day trend.",
  stack: [
  { name: "JavaScript", icon: "<img src='https://skillicons.dev/icons?i=javascript' alt='JavaScript' width='32' height='32' class='me-2'/>" },
  { name: "API", icon: "<img src='https://skillicons.dev/icons?i=openapi' alt='API' width='32' height='32' class='me-2'/>" },
  { name: "HTML5", icon: "<img src='https://skillicons.dev/icons?i=html' alt='HTML5' width='32' height='32' class='me-2'/>" }
  ]
  },
  "Expense Tracker": {
  desc: "Track your spending habits with this expense tracker. Includes pie charts, budget categorization, and persistent storage.",
  stack: [
  { name: "JavaScript", icon: "<img src='https://skillicons.dev/icons?i=javascript' alt='JavaScript' width='32' height='32' class='me-2'/>" },
  { name: "Chart.js", icon: "<img src='https://skillicons.dev/icons?i=chartjs' alt='Chart.js' width='32' height='32' class='me-2'/>" },
  { name: "CSS3", icon: "<img src='https://skillicons.dev/icons?i=css' alt='CSS3' width='32' height='32' class='me-2'/>" }
  ]
  }
};

function showProjectDetail(title) {
  const detail = projectDetails[title];
  document.getElementById('projects').style.display = 'none';
  document.getElementById('project-detail').style.display = 'block';
  document.getElementById('project-title').innerText = title;
  document.getElementById('project-desc').innerText = detail?.desc || 'No detailed information available.';

  const stackEl = document.getElementById('project-stack');
  if (detail?.stack?.length > 0) {
    stackEl.innerHTML = `<div class='d-flex align-items-center'><h3>Tech Stack:&nbsp;</h3>${detail.stack.map(s => s.icon).join('')}</div>`;
  } else {
    stackEl.innerHTML = '';
  }
}

function backToProjects() {
  document.getElementById('project-detail').style.display = 'none';
  document.getElementById('projects').style.display = 'block';
}


 // Function to handle the form submission
 document.addEventListener('DOMContentLoaded', function () {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzomqFHbOT_1Oi03xj_Qkg9dB9NTjiAPSKqZb5RhXnxo1ClZ02Exr8188gSAOwkAYbh/exec';
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(result => {
        showAlert(' Message sent successfully!', 'success');
        this.reset();
      })
      .catch(error => {
        console.error(' Submission error:', error.message);
        showAlert(' Failed to send message. Please try again.', 'error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
  });

  // Function to show alert messages
  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = 'alert-box alert-' + (type === 'success' ? 'success' : 'error');
    alertBox.style.display = 'block';

    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
  }

});