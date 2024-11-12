const image = document.querySelector('img');

const uname = document.getElementById('uname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const btnsend = document.getElementById('send');


emptyInput1 = uname.textContent = "";
emptyInput2 = email.textContent = "";
emptyInput3 = message.textContent = "";



// Trying out all HTMLelement API

// Element

// CreateElement
// insertAdjacentElement('afterend') ?
btnsend.addEventListener('click', () => {
    
          if (emptyInput1 === "" || emptyInput2 === "" || emptyInput3 === "") {
                alert('No message can be sent as long you have not filled all the fields')
               
          } else {
               alert('All the fields are filled you can send your message.')
       
     };
     const feedback = document.createElement('p');
     feedback.textContent = "Message sent!"
     btnsend.insertAdjacentElement("afterend", feedback);
});






