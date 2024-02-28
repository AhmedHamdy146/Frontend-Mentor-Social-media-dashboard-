const btn = document.getElementById("switch");
const rootStyle = document.documentElement;
let flag = 1;
btn.addEventListener("click", () => {
  document.querySelector(".ball").classList.toggle("move-left");
  document.querySelector(".ball").classList.toggle("move-right");
  flag ^= 1;
  if (flag) {
    document.getElementById("btn--title").innerHTML = `Dark Mode`;
    rootStyle.style.setProperty("--dark-background", "hsl(230, 17%, 14%)");
    rootStyle.style.setProperty("--top-dark-background", "hsl(232, 19%, 15%)");
    rootStyle.style.setProperty("--card-dark-background", "hsl(228, 28%, 20%)");
    rootStyle.style.setProperty("--text-drak-color", "hsl(228, 34%, 66%)");
    rootStyle.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
    rootStyle.style.setProperty("--overlay", "hsl(229, 26%, 27%)");
    document.getElementById(
      "switch"
    ).style.background = `linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))`;
  } else {
    document.getElementById("btn--title").innerHTML = `Light Mode`;
    rootStyle.style.setProperty("--dark-background", "hsl(0, 0%, 100%)");
    rootStyle.style.setProperty("--top-dark-background", "hsl(225, 100%, 98%)");
    rootStyle.style.setProperty("--card-dark-background", "hsl(227, 47%, 96%)");
    rootStyle.style.setProperty("--text-drak-color", "hsl(228, 12%, 44%)");
    rootStyle.style.setProperty("--text-color", "hsl(230, 17%, 14%)");
    rootStyle.style.setProperty("--overlay", "hsl(230.5, 38.8%, 90.4%)");
    document.getElementById("switch").style.background = `hsl(230, 22%, 74%)`;
  }
  console.log(flag);
});
