
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
  
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});



const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');


function validateName(name) {
   
    if (name.length < 2) {
        return 'Name must be at least 2 characters';
    }
    if (name.length > 100) {
        return 'Name must be less than 100 characters';
    }
    return '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email address';
    }
    if (email.length > 255) {
        return 'Email must be less than 255 characters';
    }
    return '';
}

function validateMessage(message) {
    if (message.length < 10) {
        return 'Message must be at least 10 characters';
    }
    if (message.length > 1000) {
        return 'Message must be less than 1000 characters';
    }
    return '';
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

nameInput.addEventListener('blur', () => {
    const error = validateName(nameInput.value.trim());
    nameError.textContent = error;
});

emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value.trim());
    emailError.textContent = error;
});

messageInput.addEventListener('blur', () => {
    const error = validateMessage(messageInput.value.trim());
    messageError.textContent = error;
});


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    

    const nameErrorMsg = validateName(name);
    const emailErrorMsg = validateEmail(email);
    const messageErrorMsg = validateMessage(message);
    

    nameError.textContent = nameErrorMsg;
    emailError.textContent = emailErrorMsg;
    messageError.textContent = messageErrorMsg;
    

    if (nameErrorMsg || emailErrorMsg || messageErrorMsg) {
        return;
    }
    

    contactForm.reset();
    
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    

    successMessage.classList.add('show');
    

    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
    

    console.log('Form submitted:', { name, email, message });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


