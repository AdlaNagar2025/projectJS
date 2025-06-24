"use strict";
//!modals
const personModal = document.getElementById('personModal'); //form
const personModalData=document.getElementById("personModalData"); //info

//Close Modals
function closePersonModal(){
 document.querySelectorAll('.close').forEach(elem => {
  elem.addEventListener('click', () => {
    personModal.style.display = 'none';
    document.body.style.overflow = 'auto';});
})};

function closePersonDataModal() {
document.getElementById('closepersonModalData').addEventListener('click', () => {
  personModalData.style.display = 'none';
  document.body.style.overflow = 'auto';
})};

// Open Modals
function openPersonModal() {
  personModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function openPersonDataModal(contentHTML) {
  personModalData.querySelector(".modal-content-data").innerHTML = contentHTML;
  personModalData.style.display = "flex";
  document.body.style.overflow = "hidden";
}


let ul = document.querySelector('.data_of_persons') //persons will be appear under ul

//delete all persons
let delete_all=document.getElementById('delete_all');
delete_all.addEventListener('click',()=>{
  ul.innerHTML = "";
  persons.length=0;
  updatePersonCount();

})

//add persons
let add_persons = document.querySelector('.persons');
let add_person = document.getElementById('add_person'); //icon+in main_div
add_person.addEventListener('click', openPersonModal);


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



const persons=[
  {
  name: "Fatema",
  phone: "0521234561",
  email: "Fatema@gmail.com",
  address:"Roma",
  age: 21,
  comment: "I am fatema ",
    image: "./image/default.jpg"
  },
  {
  name: "Nora",
    phone: "0521234562",
    email: "Nora@gmail.com",
    address: "Roma",
  age:21,
    comment: "I am nora ", 
    image: "./image/default.jpg"
  },
  {
  name: "Ali",
    phone: "0521234563",
    email: "Ali@gmail.com",
  address:"Moroco",
  age: 25,
  comment: "I am Ali",
    image:"./image/default.jpg"

},
{
  name:"Adam",
  phone: "0521234564" ,
  email: "Adam@gmail.com",
  address: "London",
  age: 27,
  comment: "I am Adam",
  image: "./image/default.jpg"
}
]


// Add persons to array
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const p_name = document.getElementById('inputName').value.trim();
  const p_phone = document.getElementById('inputPhone').value.trim();
  const p_address = document.getElementById('inputAddress').value.trim();
  const p_email = document.getElementById('inputEmail').value.trim();
  const p_age = document.getElementById('inputAge').value.trim();
  const p_comment = document.getElementById('comment').value.trim();
  const p_image = document.getElementById('inputImage').value.trim();

  if(!p_name || !p_phone)
  {
      alert("Please Enter your name and your phone")
      return;
  }
  else{
    const cardperson = {
      name: p_name,
      phone: p_phone,
      email: p_email !==""? p_email:"",
      address: p_address !== "" ? p_address : "",
      age: p_age !== "" ? p_age : "",
      comment: p_comment !== "" ? p_comment : "",
      image: p_image !== "" ? p_image : "./image/default.jpg"
    }
 
    persons.push(cardperson);
    add();

    // ניקוי השדות
    this.reset();

    personModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    updatePersonCount();
}});



// div contain data for each person
function createPersonData(person) {
  let divleft = document.createElement('div');
  
  let name = document.createElement('h3');
  name.textContent = person.name.trim();

  let phone = document.createElement('p');
  phone.textContent = person.phone.trim();

  let age = document.createElement('p');
  age.textContent = String(person.age).trim();
  

  let address = document.createElement('p');
  address.textContent = person.address.trim();

  let comment = document.createElement('p');
  comment.textContent = person.comment.trim();

  let email = document.createElement('p');
  email.textContent = person.email.trim();

  divleft.appendChild(name);
  divleft.appendChild(age);
  divleft.appendChild(phone);
  divleft.appendChild(address);
  divleft.appendChild(email);
  divleft.appendChild(comment);

  return divleft;
}




//add persons to html
function add(){
  ul.innerHTML = "";
  persons.sort((a, b) => a.name.localeCompare(b.name)) //orginaze the array 
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
      updatePersonCount();
    }
  }
});



// To change the  number of people
let counter = document.getElementById('countpersons');
function updatePersonCount() {
  counter.textContent=persons.length +" people"
}

//To search 
const  searchpeople = document.getElementById('searchpeople');

searchpeople.addEventListener('input', () => {
  const value = searchpeople.value.trim().toLowerCase(); //letters
  const filtered = persons.filter(person => person.name.toLowerCase().startsWith(value));
  showFilteredList(filtered);
});

function showFilteredList(filteredPersons) {
  ul.innerHTML = "";
  filteredPersons.forEach(eperson => {
    const person = document.createElement('div');
    const li = document.createElement('li');
    let image = document.createElement('img');
    image.src = eperson.image.trim();
    image.alt = eperson.name.trim();
    image.className = "img-person";

    person.appendChild(image);
    let dataDiv = createPersonData(eperson);
    person.appendChild(dataDiv);
    person.className = "left";

    li.appendChild(person);
    li.appendChild(createRightIcons());
    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  add();
  updatePersonCount();
  closePersonModal();
  closePersonDataModal();
});





