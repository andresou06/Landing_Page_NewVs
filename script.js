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
                cercleOne.style.background = 'white';
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
                cercleTwo.style.background = 'white';
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


