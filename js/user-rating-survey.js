const rating = document.querySelector(".rating-icons").querySelectorAll("button");

rating.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});
  