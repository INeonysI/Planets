import Dom from "./Dom.js";

export default function changeTextOnDisplay() {
  const buttons = document.querySelectorAll("[data-refers-to]");

  buttons.forEach((btn) => {
    function handleClick() {
      Dom.removeClass("visible");
      Dom.removeClass("active");

      const reference = this.getAttribute("data-refers-to");

      Dom.setVisible(`[data-${reference}]`);
      this.classList.add("active");
    }

    btn.addEventListener("click", handleClick);
  });
}
