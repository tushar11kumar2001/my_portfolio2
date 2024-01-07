let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let workList = document.querySelector(".work-list");

let projects = [
  {
    image: "./images/minieditor.png",
    name: "MINI EDITOR",
    type: "(React Application)",
    description: `Welcome to my React-based mini editor, where innovation meets simplicity. Harness the potential of useState and the aesthetic appeal of Tailwind CSS as you tweak font styles, sizes, and backgrounds.`,
    link: "https://mini-editor-vert.vercel.app/",
  },

  {
    image: "./images/timer.png",
    name: "TIMER",
    type: "(React Application)",
    description: `  I developed a sleek and efficient timer application using React,
    leveraging the power of React Hooks, specifically useState.
    Users can seamlessly track time with a modern and intuitive
    design, reflecting my commitment to delivering user-friendly
    solutions.`,
    link: "https://timer-dusky-pi.vercel.app",
  },

  {
    image: "./images/burger.png",
    name: "BURGER APP ",
    type: "(React Application)",
    description: `  I developed a responsive React application, seamlessly combining
    the power of components and state management to deliver a smooth
    user experience. Leveraging modern web technologies, I crafted
    an intuitive interface that reflects my dedication to creating
    dynamic and engaging user interfaces.`,
    link: "https://burger-app-ten.vercel.app/",
  },

  {
    image: "./images/weather.webp",
    name: "REAL-TIME WEATHER APPLICATION",
    type: "(Javascript)",
    description: `  Craft an intuitive UI displaying real-time weather conditions,
    including temperature, humidity, and wind speed. Use weather
    icons for quick visual comprehension of current conditions,
    enhancing user experience. Enable geolocation or manual input
    for personalized weather updates based on the user's location`,
    link: "https://tushar11kumar2001.github.io/weather_report_applicationn/",
  },

  {
    image: "./images/pizza.jpeg",
    name: "PIZZA ORDERING APP",
    type: "(Javascript)",
    description: `Led the development of a cutting-edge pizza ordering app, leveraging JavaScript and API integration to create a responsive and interactive platform.`,
    link: "https://tushar11kumar2001.github.io/pizza_shoping_app/",
  },

  {
    image: "./images/todo-list.avif",
    name: "TO-DO List",
    type: "(Javascript)",
    description: `User-friendly to-do list application using JavaScript. Through
    meticulous use of DOM manipulation and event handling, I created
    an interactive interface where users can effortlessly add, edit,
    and remove tasks.`,
    link: "https://tushar11kumar2001.github.io/to-do_list/",
  },

  {
    image: "./images/login.jpg",
    name: "LOGIN/LOGOUT",
    type: "(Javascript)",
    description: `Crafted a dynamic login page featuring a floating login button
    that seamlessly transitions to a stable state upon filling the
    email and password inputs. Implemented event listeners to
    dynamically enable and disable the login button.`,
    link: "https://tushar11kumar2001.github.io/login-logout_page/",
  },

  {
    image: "./images/a.jpeg",
    name: "AMAZON CLONE",
    type: "(HTML/CSS)",
    description: `Created a static representation of an Amazon-like interface,
    showcasing frontend prowess with HTML and CSS, laying the
    foundation for potential future functionality integration.`,
    link: "https://tushar11kumar2001.github.io/Amazon_First_project/",
  },

  {
    image: "./images/clock.png",
    name: "ANALOG CLOCK",
    type: "(Javascript)",
    description: `In the realm of timekeeping, I ventured into crafting a captivating analog clock using JavaScript's setInterval magic.`,
    link: "https://tushar11kumar2001.github.io/analog_clock/",
  },

  {
    image: "./images/parallax.jpeg",
    name: "PARALLAX EFFECT",
    type: "(HTML/CSS)",
    description: `Transformed static web content into a compelling narrative using HTML, CSS for an enchanting parallax effect. The smooth scrolling engages users in an immersive journey.`,
    link: "https://tushar11kumar2001.github.io/parallax_effect/",
  },

  {
    image: "./images/gallary.png",
    name: "MY GALLARY",
    type: "(HTML/CSS)",
    description: ``,
    link: "https://tushar11kumar2001.github.io/my_gallery/",
  },

  {
    image: "./images/racecar.jpg",
    name: "MOVING car",
    type: "(HTML/CSS)",
    description: ``,
    link: "https://tushar11kumar2001.github.io/moving_car/",
  },
];

function workcard(project) {
  let work = document.createElement("div");
  work.classList.add("work");
  let img = document.createElement("img");
  img.setAttribute("src", `${project.image}`);
  work.appendChild(img);
  let layer = document.createElement("div");
  layer.classList.add("layer");
  let h3 = document.createElement("h3");
  h3.innerHTML = `${project.name}<br>${project.type}`;
  layer.appendChild(h3);
  let p = document.createElement("p");
  p.innerHTML = `${project.description}`;
  layer.appendChild(p);
  let link = document.createElement("a");
  link.href = project.link;
  let icon = document.createElement("i");
  icon.classList.add(`fa-solid`);
  icon.classList.add(`fa-arrow-up-right-from-square`);
  link.appendChild(icon);
  layer.appendChild(link);
  work.appendChild(layer);
  workList.appendChild(work);
}

function hiddenWorkcard(project) {
  let work = document.createElement("div");
  work.classList.add("work");
  work.classList.add("hidden-project");
  let img = document.createElement("img");
  img.setAttribute("src", `${project.image}`);
  work.appendChild(img);
  let layer = document.createElement("div");
  layer.classList.add("layer");
  let h3 = document.createElement("h3");
  h3.innerHTML = `${project.name}<br>${project.type}`;
  layer.appendChild(h3);
  let p = document.createElement("p");
  p.innerHTML = `${project.description}`;
  layer.appendChild(p);
  let link = document.createElement("a");
  link.href = project.link;
  let icon = document.createElement("i");
  icon.classList.add(`fa-solid`);
  icon.classList.add(`fa-arrow-up-right-from-square`);
  link.appendChild(icon);
  layer.appendChild(link);
  work.appendChild(layer);
  workList.appendChild(work);
}

projects.map((project, index) => {
  if (index < 7) {
    workcard(project);
  } else {
    hiddenWorkcard(project);
  }
});

function opentab(tab) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}

let ul = document.querySelector("#sidemenu");
function showmenu() {
  ul.style.right = "0px";
}

function hidemenu() {
  ul.style.right = "-200px";
}

let hiddenTab = document.querySelectorAll(".hidden-project");
let see_more = document.getElementById("seemore");
see_more.addEventListener("click", () => {
  console.log("running");
  console.log(hiddenTab);
  for (let tab of hiddenTab) {
    tab.classList.toggle("show");
  }
});
