

const today = new Date();

document.querySelector("#currentyear").innerHTML = `getFullYear(): <span id="currentyear">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;