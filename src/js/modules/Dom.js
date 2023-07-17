export default class Dom {
  // Adiciona a classe .active a todos os elementos que possuem certo seletor
  static active(element) {
    const itens = document.querySelectorAll(element);
    itens.forEach((item) => item.classList.add("active"));
  }

  // Adiciona a classe .visible a todos os elementos que possuem certo seletor
  static setVisible(element) {
    const itens = document.querySelectorAll(element);
    itens.forEach((item) => item.classList.add("visible"));
  }

  // Remove uma classe de todos os elementos que a possuem
  static removeClass(element) {
    const itens = document.querySelectorAll;
    itens.forEach((item) => item.classList.remove(element));
  }
}
