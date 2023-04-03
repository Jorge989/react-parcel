import React from "react";
import anime from "animejs";
import "../pages/Home/styles.scss";
function BackgroundAnimation() {
  const ref = React.useRef();

  React.useEffect(() => {
    const bg = ref.current;
    const title = bg.querySelector(".title");
    const fragment = document.createDocumentFragment();
    const grid = [30, 30];
    const col = grid[0];
    const row = grid[1];
    const field = col * row;

    for (let i = 0; i < field; i++) {
      const div = document.createElement("div");
      fragment.appendChild(div);
      div.className = "el";
    }

    bg.appendChild(fragment);

    const BackgroundAnimation = anime
      .timeline({
        targets: ".el",
        duration: 1000,
        delay: anime.stagger(0, { grid: grid, from: "first" }),
        loop: true,
        easing: "easeInBack",
      })
      .add({
        scale: 0.5,
        backgroundColor: "#fe5335",
        delay: anime.stagger(100, { grid: grid, from: "last" }),
      })
      .add({
        translateX: () => anime.random(-1000, 1000),
        translateY: () => anime.random(-1000, 1000),
        scale: 0.25,
        delay: anime.stagger(150, { grid: grid, from: "last" }),
      })
      .add({
        targets: title,
        opacity: 1,
        duration: 7,
      })
      .add({
        translateX: 0,
        translateY: 0,
        scale: 1,
        borderRadius: 0,
        backgroundColor: "#f1f1f1",
        duration: 2000,
        delay: anime.stagger(150, { grid: grid, from: "first" }),
        endDelay: 0,
      });

    BackgroundAnimation.play();

    return () => {
      BackgroundAnimation.pause();
      bg.innerHTML = "";
    };
  }, []);

  return (
    <div className="bg" ref={ref}>
      <h1 className="title"></h1>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <BackgroundAnimation />
    </div>
  );
}
