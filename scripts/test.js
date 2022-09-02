const sections = $("section").toArray();

let options = {
  rootMargin: "0px",
  threshold: 0.75,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { target } = entry;
    const menu = $(`#menu-${target.id}`).get(0)

    if (entry.intersectionRatio >= 0.75) {
      
      if (menu) {
        menu.classList.add("menu-open")
      }
      target.classList.add("is-visible");
    } else {
      if (menu) {
        menu.classList.remove("menu-open")
      }
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  const sectionChildren = $('div', section).children().toArray();

  sectionChildren.forEach((el, index) => {
    el.style.setProperty("--delay", `${index * 250}ms`);
  });

  observer.observe(section);
});