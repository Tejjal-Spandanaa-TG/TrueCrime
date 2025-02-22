document.addEventListener("click", function(event) {
    const dropdownContent = document.getElementById("dropdownContent");
    if (!event.target.closest(".dropdown")) {
        dropdownContent.classList.add("hidden");
    } else {
        dropdownContent.classList.remove("hidden");
    }
});