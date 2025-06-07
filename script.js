
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function resetLightMode() {
    document.body.classList.remove("dark-mode")
}

let themeColors = ["#6c63ff", "#ff6f61", "#00b894", "#fdcb6e"];
let currentColorIndex = 0;

function changeThemeColor() {
    currentColorIndex = (currentColorIndex + 1) % themeColors.length;
    const newcolor = themeColors[currentColorIndex];
    document.querySelector("header").style.backgroundColor = newcolor;
}

function addProject() {
    const newProject = prompt("Enter the new project name: ");
    if (newProject) {
        const projectList = document.querySelector("section ul");
        const listItem = document.createElement("li");
        listItem.textContent = newProject;
        projectList.appendChild(listItem);
    }
}

function loadProjects() {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const projectList = document.querySelector("section ul");
    projectList.innerHTML = "";

    savedProjects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project;
        projectList.appendChild(listItem);
        
    });

}

function saveProjects() {
    const listItems = document.querySelectorAll("section ul li");
    const projects = Array.from(listItems).map(li => li.textContent);
    localStorage.setItem("projects", JSON.stringify(projects));
}

function addProject() {
    const newProject = prompt("Enter the new project name: ");
    if (newProject) {
        const projectList = document.querySelector("section ul");
        const listItem = document.createElement("li");
        listItem.textContent = newProject;
        projectList.appendChild(listItem);
        saveProjects();
    }
}

window.onload = loadProjects;

