const link = document.getElementById("theme");
const btn = document.getElementById("themeChanger");

// thème enregistré, sinon le clair
link.setAttribute("href", localStorage.getItem("theme") || "C:\\Users\\Jalan\\Documents\\GitHub\\Projet-R1.02\\css\\light.css");

btn.addEventListener("click", () => {
  const actuel = link.getAttribute("href");
  const nouveau = actuel === "C:\\Users\\Jalan\\Documents\\GitHub\\Projet-R1.02\\css\\light.css" ? "C:\\Users\\Jalan\\Documents\\GitHub\\Projet-R1.02\\css\\dark.css" : "C:\\Users\\Jalan\\Documents\\GitHub\\Projet-R1.02\\css\\light.css";
  link.setAttribute("href", nouveau);
  localStorage.setItem("theme", nouveau);
});