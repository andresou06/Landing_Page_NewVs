
// ####################################################

// Scroll event between sections 

//######################################"""""

const home_sec = document.querySelector('#home');
const work_sec = document.querySelector('#work');
const contact_sec = document.querySelector('#about');
const blog_sec = document.querySelector('#blog');
//####################################################


const svg_btn = document.querySelector('.svg_btn');

const nested_headers = document.querySelector('.nested_headers');

const closed_btn = document.querySelector('.close_header');

svg_btn.addEventListener('click', () => {
        nested_headers.showModal()
})

closed_btn.addEventListener('click', () => {
        nested_headers.close();
})

const videoSpeed = document.querySelector('video');

videoSpeed.playbackRate = 0.90;


// #######################################################
// Work section
// ####################################################

const cercleOne = document.querySelector('#cercleOne');
const cercleTwo = document.querySelector('#cercleTwo');
const cercleThree = document.querySelector('#cercleThree');

const resto = document.querySelector("#resto_circle")
const event_template = document.querySelector('#event_circle');
const blog_template = document.querySelector('#blog_circle');


cercleOne.addEventListener('click', () => {
        
        resto.style.display = 'none';
        event_template.style.display = 'block';
        blog_template.style.display = 'none';
        cercleOne.style.background = 'red'
        cercleTwo.style.background = 'white'
        
})

cercleTwo.addEventListener('click', () => {
        resto.style.display = "none";
        event_template.style.display = 'none';
        blog_template.style.display = 'block';
        cercleOne.style.background = 'white'
        cercleTwo.style.background = 'red'
        cercleThree.style.background = 'white';

})

cercleThree.addEventListener('click', () => {
        
        resto.style.display = "block"
        event_template.style.display = 'none';
        blog_template.style.display = 'none';
        cercleOne.style.background = 'white';
        cercleTwo.style.background = 'white';
        cercleThree.style.background = 'red';

})



blog_template.addEventListener('drag', () => {
        event_template.style.display = 'block';
        blog_template.style.display = 'none';
})



event_template.addEventListener('drag', () => {
        event_template.style.display = 'none';
        blog_template.style.display = 'block';
})


cercleOne.addEventListener('mouseover', () => {
        resto.style.display = "none";
        event_template.style.display = 'block';
        blog_template.style.display = 'none';
         cercleOne.style.background = 'red';
        cercleTwo.style.background = 'white';
        cercleThree.style.background = 'white';

      
})

cercleTwo.addEventListener('mouseover', () => {
         resto.style.display = "none";
        event_template.style.display = 'none';
        blog_template.style.display = 'block';
         cercleOne.style.background = 'white';
        cercleTwo.style.background = 'red';
        cercleThree.style.background = 'white';

        
})

cercleThree.addEventListener('mouseover', () => {
        resto.style.display = "block"
        event_template.style.display = 'none';
        blog_template.style.display = 'none';
        cercleOne.style.background = 'white';
        cercleTwo.style.background = 'white';
        cercleThree.style.background = 'red';

})


// ################################################
// Pop DIALOG



// #############################################

//  FAQ Mouseover 

const quest1 = document.querySelector('#quest1');
const quest2 = document.querySelector('#quest2');
const quest3 = document.querySelector('#quest3');

const answ1 =document.querySelector('#asw1');
const answ2 =document.querySelector('#asw2');
const answ3 =document.querySelector('#asw3');

quest1.addEventListener('click', () => {
        answ1.style.display = 'block';
        answ2.style.display = 'none';
        answ3.style.display = 'none';

})


quest1.addEventListener('mouseover', () => {
        answ1.style.display = 'block';
        answ2.style.display = 'none';
        answ3.style.display = 'none';
})
//############################################""
quest2.addEventListener('click', () => {
        answ1.style.display = 'none';
        answ2.style.display = 'block';
        answ3.style.display = 'none';

})


quest2.addEventListener('mouseover', () => {
        answ1.style.display = 'none';
        answ2.style.display = 'block';
        answ3.style.display = 'none';
})

//#############################################

quest3.addEventListener('click', () => {
        answ1.style.display = 'none';
        answ2.style.display = 'none';
        answ3.style.display = 'block';

})


quest3.addEventListener('mouseover', () => {
        answ1.style.display = 'none';
        answ2.style.display = 'none';
        answ3.style.display = 'block';
        
})


// Things to do to Improve 

// ###################################################
// To Detect sections when scrolling



// focus is not working

// #################################################
// To make a Carrousel



// ############################################################