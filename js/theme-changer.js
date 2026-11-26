const link = document.getElementById("theme");
const btn = document.getElementById("themeChanger");

// thème enregistré, sinon le clair
link.setAttribute("href", localStorage.getItem("theme") || "https://clement-barre.github.io/Projet-R1.02/css/light.css");

btn.addEventListener("click", () => {
  const actuel = link.getAttribute("href");
  const nouveau = actuel === "https://clement-barre.github.io/Projet-R1.02/css/light.css" ? "https://clement-barre.github.io/Projet-R1.02/css/dark.css" : "https://clement-barre.github.io/Projet-R1.02/css/light.css";
  link.setAttribute("href", nouveau);
  localStorage.setItem("theme", nouveau);
});