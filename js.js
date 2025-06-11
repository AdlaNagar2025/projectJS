"use strict";

const modal = document.getElementById('personModal');

const  closepopup=() =>{
 modal.style.display='none';
 document.body.style.overflow='auto';
}
document.getElementById('close').addEventListener('click',closepopup);
document.getElementById('closeModal').addEventListener('click', closepopup);

