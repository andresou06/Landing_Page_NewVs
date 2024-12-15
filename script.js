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