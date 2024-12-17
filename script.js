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

const event_template = document.querySelector('#event_circle');
const blog_template = document.querySelector('#blog_circle');


cercleOne.addEventListener('click', () => {
        event_template.style.display = 'block';
        blog_template.style.display = 'none';
        if (event_template.style.display = 'block') {
                cercleOne.style.background = 'blue';
        } else {
                cercleOne.style.background = 'transparent';
        }
        
        if (event_template.style.display != 'block') {
                cercleOne.style.background = 'transparent';
        }
})

cercleTwo.addEventListener('click', () => {
        event_template.style.display = 'none';
        blog_template.style.display = 'block';
        if (blog_template.style.display = 'block') {
                cercleTwo.style.background = 'blue';
        }
})




blog_template.addEventListener('drag', () => {
        event_template.style.display = 'block';
        blog_template.style.display = 'none';
})



event_template.addEventListener('drag', () => {
        event_template.style.display = 'none';
        blog_template.style.display = 'block';
})


// ####################################################

// Scroll event between sections 

//######################################"""""

const home_sec = document.querySelector('#home');
const work_sec = document.querySelector('#work');
const contact_sec = document.querySelector('#about');
const blog_sec = document.querySelector('#blog');


// home_sec.addEventListener('click', () => {
//         home_sec.scroll(work_sec);
// })


// #############################################

//  FAQ

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

// focus is not working 

work_sec.addEventListener('mouseover', () => {
        answ1.style.display = 'none';
        answ2.style.display = 'none';
        answ3.style.display = 'none';
})

// focus is not working