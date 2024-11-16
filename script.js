// // Buttons Sandbox
// // ContactMe / Download Resume / Availability Calendar 
// //  Portfolio or Project / Language Skill 
// // Social Media/ Linkedin / Toggle change language


// // Header Section

// Language Toggle Button


const toggleLanguage = document.getElementById('toggle');

toggleLanguage.addEventListener('click', () => {
        open("./porto.html");
});

// // ###########################################################
// Contact Me Button
const contactMe = document.getElementById('contact');

contactMe.addEventListener('click', () => {
        open("./contactPage.html")
});

// We will us  POPOVER API to render each button
// #############################################
// Goal button 

// // #######################################################################
// Button of Landing Page

const button_calendar = document.getElementById('calendar');
const button_project = document.getElementById('projects');


const dialog2 = document.getElementById('my-popover2');
const dialog3 = document.getElementById('my-popover3');


const closeButton = document.getElementById('close')

const closeButton3 = document.getElementById('close1')


// ###########################################################


// #############################################################
button_calendar.addEventListener('click', () => {
    dialog2.showModal();
});

closeButton.addEventListener('click', () => {
        dialog2.close();
});
// ######
// // ##########################################################
button_project.addEventListener('click', () => {
        dialog3.showModal();
});

closeButton3.addEventListener('click', () => {
        dialog3.close();
});


// ##################################################

const fullPage = document.querySelector('#fullpage');

function getPics() {}

pic1.addEventListener('click', function() {
        fullPage.style.backgroundImage = "url('Image/refresherweb.png')";
        fullPage.style.display = 'block';
})
pic2.addEventListener('click', function() {
        fullPage.style.backgroundImage = "url('Image/onlinefoodweb.png')";
        fullPage.style.display = 'block';
})


pic3.addEventListener('click', function() {
        fullPage.style.backgroundImage = "url('Image/mediatemplate.png')";
        fullPage.style.display = 'block';
})

// ##################################################################################

// Clicking links

const mail = document.querySelector('.mail');

mail.addEventListener('click', () => {
        open("https://mail.google.com/mail/u/0/?fs=1&to=andreas.sousa0803@gmail.com&su=SUBJECT&body=BODY&tf=cm");
});

const git = document.querySelector('.git');
git.addEventListener('click', () => {
        open("https://github.com/andresou06")
});


const linkdin = document.querySelector('.linkedin');
linkdin.addEventListener('click', () => {
        open("https://www.linkedin.com/in/andreas-sousa-95b77419b/");
});
