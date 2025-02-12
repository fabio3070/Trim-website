function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "assets/components/header.html");
    loadComponent("info-container", "assets/components/home/info-container.html");
    loadComponent("image-container", "assets/components/home/image-container.html");
});