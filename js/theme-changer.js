const link = document.getElementById("theme");
const btn = document.getElementById("themeChanger");

// thème enregistré, sinon le clair
link.setAttribute("href", localStorage.getItem("theme") || "css/light.css");

btn.addEventListener("click", () => {
  const actuel = link.getAttribute("href");
  const nouveau = actuel === "css/light.css" ? "css/dark.css" : "css/light.css";
  link.setAttribute("href", nouveau);
  localStorage.setItem("theme", nouveau);
});