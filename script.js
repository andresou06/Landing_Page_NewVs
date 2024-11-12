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


const closeButton2 = document.getElementById('two')

const closeButton3 = document.getElementById('three')


// ###########################################################


// #############################################################
button_calendar.addEventListener('click', () => {
    dialog2.showModal();
});

closeButton2.addEventListener('click', () => {
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

// ###################################################
// dialog 3 Quick Solutions
const leftbtn = document.querySelector('.left-slide');
const rightbtn = document.querySelector('.right_slide');

const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

const arrayImage = [pic1, pic2, pic3];

function showHideImage() {
        
      if(pic2.style.visibility === 'hidden' && pic3.style.visibility === 'hidden') {
        pic1.style.visibility = 'visible';

      } else if ( pic2.style.visibility === 'hidden' && pic1.style.visibility === 'hidden') {
        pic3.style.visibility = 'visible';
      } else if (pic1.style.visibility === 'hidden' && pic3.style.visibility === 'hidden') {
        pic2.style.visibility = 'visible';
      } else {
        return console.log('not working');
      }
}

// leftbtn.addEventListener('click', () => {
//         hidepic21();
// })


// HTMLElement.title

// The tooltip is displayed and disappears via keyboard focus and removal of focus and by the mouse events - mousing over and mousing out.

// The tooltip never receives focus. Focus stays on the owning element.

// The tooltip can be hidden with the Escape key

// The tooltip stays open when hovered

// The tooltip is only hidden via JavaScript and CSS selectors. If JavaScript is not available the tooltip is shown.
