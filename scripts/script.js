const list1 = [
  {
    img: "assets/PNG/Icon1.png",
    heading: "UI/UX Design",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "assets/PNG/Icon2.png",
    heading: "Graphic Design",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "assets/PNG/Icon3.png",
    heading: "Motion Design",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const servicesElem = document.querySelector("#services");

(() => {
  let a = list1.map((elem, index) => {
    return `<div id=service${index + 1}>
            <img src=${elem.img} alt='oops' />
            <h4>${elem.heading}</h4>
            <p>${elem.text}</p>
        </div>`;
  });
  servicesElem.innerHTML = a.join("");
})();

document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.querySelector(".clients .left-btn");
  const rightButton = document.querySelector(".clients .right-btn");
  const cardContainer = document.querySelector(".clients .card-container");

  let currentTestimonialIndex = 3;

  function updateButtonStyles() {
    const totalCards = cardContainer.querySelectorAll(".card").length;
    leftButton.classList.remove("round-btn-color");
    rightButton.classList.remove("round-btn-color");

    if (currentTestimonialIndex === 3) {
      leftButton.classList.add("round-btn-empty");
    } else {
      leftButton.classList.add("round-btn-color");
    }

    if (currentTestimonialIndex === totalCards - 1) {
      rightButton.classList.add("round-btn-empty");
    } else {
      rightButton.classList.add("round-btn-color");
    }
  }

  leftButton.addEventListener("click", function handleLeftClick() {
    console.log('Left');
    if (currentTestimonialIndex > 3) {
      currentTestimonialIndex--;
      const cardWidth = cardContainer.querySelector(".card").clientWidth;
      const visibleCards = Math.floor(cardContainer.clientWidth / cardWidth);
      const scrollAmount = Math.min(
        cardWidth,
        currentTestimonialIndex * cardWidth
      );

      cardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
    updateButtonStyles();
  });

  rightButton.addEventListener("click", function handleRightClick() {
    console.log('right');
    const totalCards = cardContainer.querySelectorAll(".card").length;
    if (currentTestimonialIndex < totalCards - 1) {
      currentTestimonialIndex++;
      const cardWidth = cardContainer.querySelector(".card").clientWidth;
      const visibleCards = Math.floor(cardContainer.clientWidth / cardWidth);
      const remainingCards = totalCards - currentTestimonialIndex - 1;
      const scrollAmount = Math.min(cardWidth, remainingCards * cardWidth);

      cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    updateButtonStyles();
  });

  updateButtonStyles();
});

document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.querySelector(".carousel-responsive .left-btn");
  const rightButton = document.querySelector(".carousel-responsive .right-btn");
  const cardContainer = document.querySelector(".clients .card-container");

  let currentTestimonialIndex = 0;

  function updateButtonStyles() {
    const totalCards = cardContainer.querySelectorAll(".card").length;
    leftButton.classList.remove("round-btn-color");
    rightButton.classList.remove("round-btn-color");

    if (currentTestimonialIndex === 0) {
      leftButton.classList.add("round-btn-empty");
    } else {
      leftButton.classList.add("round-btn-color");
    }

    if (currentTestimonialIndex === totalCards - 2) {
      rightButton.classList.add("round-btn-empty");
    } else {
      rightButton.classList.add("round-btn-color");
    }
  }

  leftButton.addEventListener("click", function handleLeftClick() {
    // console.log(currentTestimonialIndex);
    const totalCards = cardContainer.querySelectorAll(".card").length;
    if (currentTestimonialIndex > 0) {
      currentTestimonialIndex--;
      const cardWidth = cardContainer.querySelector(".card").clientWidth;
      const remainingCards = totalCards - 1 - currentTestimonialIndex;
      // console.log(cardContainer.querySelector(".card"));
    console.log(currentTestimonialIndex);
      const scrollAmount = Math.min(
        cardWidth,
        remainingCards * cardWidth
      );
      console.log(scrollAmount);

      cardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
    updateButtonStyles();
  });

  rightButton.addEventListener("click", function handleRightClick() {
    // console.log(cardContainer.querySelector(".card"));
    const totalCards = cardContainer.querySelectorAll(".card").length;
    if (currentTestimonialIndex <= totalCards - 2) {
      currentTestimonialIndex++;
    console.log(currentTestimonialIndex);
      const cardWidth = cardContainer.querySelector(".card").clientWidth;
      const remainingCards = totalCards - currentTestimonialIndex - 1;
      const scrollAmount = Math.min(cardWidth, remainingCards * cardWidth);
      console.log(scrollAmount);
      cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    updateButtonStyles();
  });

  updateButtonStyles();
});

document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.querySelector(".hero1 .carousel .left-btn");
  const rightButton = document.querySelector(".hero1 .carousel .right-btn");
  const cardContainer = document.querySelector(".hero1 .wrapper");

  let currentTestimonialIndex = 0;

  function updateButtonStyles() {
    const totalCards = cardContainer.querySelectorAll(".content").length;
    // console.log(totalCards);
    leftButton.classList.remove("round-btn-color");
    rightButton.classList.remove("round-btn-color");

    if (currentTestimonialIndex === 0) {
      leftButton.classList.add("round-btn-empty");
    } else {
      leftButton.classList.add("round-btn-color");
    }

    if (currentTestimonialIndex === totalCards - 1) {
      rightButton.classList.add("round-btn-empty");
    } else {
      rightButton.classList.add("round-btn-color");
    }
  }

  leftButton.addEventListener("click", function handleLeftClick() {
    const totalCards = cardContainer.querySelectorAll(".content");
    if (currentTestimonialIndex > 0) {
      currentTestimonialIndex--;
      const cardWidth = cardContainer.querySelector(".content").clientWidth;
    console.log(currentTestimonialIndex);
      const scrollAmount = Math.min(
        cardWidth,
        currentTestimonialIndex+1 * cardWidth
      );
      console.log(scrollAmount);

      cardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
    updateButtonStyles();
  });

  rightButton.addEventListener("click", function handleRightClick() {
    const totalCards = cardContainer.querySelectorAll(".content").length;
    if (currentTestimonialIndex < totalCards - 1) {
      currentTestimonialIndex++;
    console.log(currentTestimonialIndex);
      const cardWidth = cardContainer.querySelector(".content").clientWidth;
      const scrollAmount = Math.min(cardWidth, currentTestimonialIndex * cardWidth);
      cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    updateButtonStyles();
  });

  updateButtonStyles();
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.querySelector(".name").value;
  const email = form.querySelector(".email").value;
  const number = form.querySelector(".number").value;
  const message = form.querySelector(".message").value;

  let isValid = true;

  if (name.trim() === "" || name.length < 2) {
    form.querySelector("#errorMessage").textContent =
      "Please enter a valid name (minimum 3 characters).";
    isValid = false;
    return;
  } else {
    form.querySelector("#errorMessage").textContent = "";
  }

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    form.querySelector("#errorMessage").textContent =
      "Please enter a valid email address.";
    isValid = false;
    return;
  } else {
    form.querySelector("#errorMessage").textContent = "";
  }
  // console.log(parseInt(number));
  if (isNaN(parseInt(number))) {
    console.log(number);
    form.querySelector("#errorMessage").textContent =
      "Please enter a valid contact number.";
    isValid = false;
    return;
  } else if (number.length >= 10) {
    console.log(number);
    form.querySelector("#errorMessage").textContent = "";
  }

  if (message.trim() === "") {
    form.querySelector("#errorMessage").textContent = "Please enter a message.";
    isValid = false;
    return;
  } else {
    form.querySelector("#errorMessage").textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  } else {
    form.querySelector(".name").focus();
  }
});

const responsiveMenu = document.querySelector(".responsive-menu img");

responsiveMenu.addEventListener("click", () => {
  const navbar = document.querySelector(".abc .responsive-nav");
  if (navbar.classList.contains("responsive-nav-hide")) {
    navbar.classList.remove("responsive-nav-hide");
    navbar.classList.add("responsive-nav-show");
  } else if (
    !navbar.classList.contains("responsive-nav-show") &&
    !navbar.classList.contains("responsive-nav-hide")
  ) {
    navbar.classList.add("responsive-nav-show");
  } else if (navbar.classList.contains("responsive-nav-show")) {
    navbar.classList.remove("responsive-nav-show");
    navbar.classList.add("responsive-nav-hide");
  }
});

const closeMenu = document.querySelector(".abc .responsive-nav .close");
closeMenu.addEventListener("click", () => {
  const navbar = document.querySelector(".abc .responsive-nav");
  navbar.classList.remove("responsive-nav-show");
});
