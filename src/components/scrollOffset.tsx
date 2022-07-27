import $ from "jquery";

const scrollOffset = (elem: HTMLElement) => {
  const yCoordinate: number =
    elem.getBoundingClientRect().top + window.pageYOffset;
  const yOffset: number = -60;
  $("html").animate({ scrollTop: yCoordinate + yOffset }, 500); // Scroll delay of 500ms
};

export default scrollOffset;
