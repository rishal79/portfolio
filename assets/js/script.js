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



function toggleTheme() {
  const root = document.documentElement;
  const theme = root.getAttribute('data-theme');
  root.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
}
function showProjectDetail(title) {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('project-detail').style.display = 'block';
    document.getElementById('project-title').innerText = title;
    document.getElementById('project-desc').innerText = `Detailed information about "${title}" will appear here.`;
  }

  function backToProjects() {
    document.getElementById('project-detail').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
  }


