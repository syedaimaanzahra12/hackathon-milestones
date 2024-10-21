"use strict";
const form = document.getElementById("resume-form");
const displayElement = document.getElementById("resume-display");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const generated = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    
    <h3>Education:</h3>
    <p contenteditable="true">${education}</p>

    <h3>Skills:</h3>
    <p contenteditable="true">${skills}</p>

    <h3>Experience:</h3>
    <p contenteditable="true">${experience}</p>
    `;
    if (displayElement) {
        displayElement.innerHTML = generated;
    }
    else {
        console.error('Display element is missing.');
    }
});
