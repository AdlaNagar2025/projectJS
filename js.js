"use strict";
//!modals
let personModal = document.getElementById('personModal');
let personModalData=document.getElementById("personModalData");

//Close Modals
document.querySelectorAll('.close').forEach(elem => {
  elem.addEventListener('click', () => {
    personModal.style.display = 'none';
    document.body.style.overflow = 'auto';});
});

document.getElementById('closepersonModalData').addEventListener('click', () => {
  personModalData.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Open Modals
function openPersonModal() {
  personModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function openPersonDataModal(contentHTML) {
  personModalData.querySelector(".modal-content-data").innerHTML = contentHTML;
  personModalData.style.display = "block";
  document.body.style.overflow = "hidden";
}



let ul = document.querySelector('.data_of_persons') //persons will be appear under ul

//delete all persons
let delete_all=document.getElementById('delete_all');
delete_all.addEventListener('click',()=>{
  ul.innerHTML = "";
})

//add persons
let add_persons = document.querySelector('.persons');
add_persons.className = "persons"
let add_person = document.getElementById('add_person');
add_person.addEventListener('click', () => {
  add()
})

//add icons
const icons_img = 
[ "./image/info.png", "./image/edit.png", "./image/remove.png" ]
   
const  icons_alt =
 ["information",  "edit", "remove"]


function createRightIcons() {
  const container = document.createElement('div');
  container.className = "right_img";

  icons_img.forEach((src, index) => {
  const img = document.createElement('img');
    img.src = src.trim();
    img.alt = icons_alt[index];
    img.className = "icons";
    container.appendChild(img);
  });

  return container;
}





//array of persons
const persons = [
  {
    name: "Fatema",
    phone: "0521234567",
    email:"Fatema@gmail.com",
    image:"./image/fatema.png"
  }, 
  {
    name: "Ali",
    phone: "053123456",
    email:"Ali@gmail.com",
    image:"./image/Ali.jpg"
  },
  {
    name: "Nora",
    phone: "0541234567",
    email:"Nora@gmail.com",
    image:"./image/nora.webp"
  }
]

// div contain data for each person
function createPersonData(person) {
  let divleft = document.createElement('div');

  let name = document.createElement('h3');
  name.textContent = person.name.trim();

  let phone = document.createElement('p');
  phone.textContent = person.phone.trim();

  let email = document.createElement('p');
  email.textContent = person.email.trim();

  divleft.appendChild(name);
  divleft.appendChild(phone);
  divleft.appendChild(email);

  return divleft;
}





function add(){
ul.innerHTML = "";
persons.forEach(eperson=>{
   const person = document.createElement('div')
  const li = document.createElement('li')
  let image=document.createElement('img')
  image.src=eperson.image.trim()
  image.alt=eperson.name.trim()
  image.className ="img-person"
  person.appendChild(image)
  let dataDiv = createPersonData(eperson);
  person.appendChild(dataDiv);
  person.className = "left"
  li.appendChild(person)
  li.appendChild(createRightIcons());
  ul.appendChild(li)
})
}


//Edit && Remove
ul.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    const img = e.target;
    const li = img.closest('li');
    const index = Array.from(ul.children).indexOf(li); // index person that  click

    if (img.alt === 'information') {
      const person = persons[index];
      const contentHTML = createPersonData(person).outerHTML;
      openPersonDataModal(contentHTML);
    }
    else if (img.alt === 'remove') {
      persons.splice(index, 1); 
      add(); 
    }
    
    

   
  }
});




