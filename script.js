const profilePicture = document.getElementById("profile-picture");
const userMenu = document.getElementById("user-menu");

profilePicture.addEventListener("click", () => {
  userMenu.classList.toggle("hidden");
});
