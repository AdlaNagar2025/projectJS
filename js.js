"use strict";
//!modal
const modal = document.getElementById('personModal');
const  closepopup=() =>{
 modal.style.display='none';
 document.body.style.overflow='auto';
}
document.getElementById('close').addEventListener('click',closepopup);
document.getElementById('closeModal').addEventListener('click', closepopup);


//add persons
let add_persons = document.querySelector('.persons');
add_persons.className ="persons"
let add_person = document.getElementById('add_person');
add_person.addEventListener('click',()=>{
  add()
})


//delete all persons
let delete_all=document.getElementById('delete_all');
delete_all.addEventListener('click',()=>{
  ul.innerHTML = "";
})

//add icons
const icons_img = 
[ "./image/info.png", "./image/edit.png", "./image/remove.png " ]
   
const  icons_alt =
 ["information",  "edit", "remove"]

let right_img = document.createElement('div');
right_img.className ="right_img"
function add_icons(){
icons_img.forEach((elem,index) => {
  let img = document.createElement('img')
  img.src=elem.trim()
  img.alt=icons_alt[index]
  img.className = "icons";
  right_img.appendChild(img)
})
}
add_icons()


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

let ul = document.querySelector('.data_of_persons') //persons will be appear under ul
function add(){
  ul.innerHTML = "";
persons.forEach(eperson=>{
  const person = document.createElement('div')
  const li = document.createElement('li')
  let name=document.createElement('h3')
  name.textContent=eperson.name
  let phone = document.createElement('p')
  phone.textContent = eperson.phone
  let email= document.createElement('p')
  email.textContent = eperson.email
  const divleft = document.createElement('div')
  divleft.appendChild(name)
  divleft.appendChild(phone)
  divleft.appendChild(email)
  let image=document.createElement('img')
  image.src=eperson.image
  image.alt=eperson.name
  image.className ="img-person"
  person.appendChild(image)
  person.appendChild(divleft)
  person.className = "left"
  li.appendChild(person)
  li.appendChild(right_img.cloneNode(true));
  ul.appendChild(li)
})
}





