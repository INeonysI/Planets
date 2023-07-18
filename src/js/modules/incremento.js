export default function initIncremento() {
  const valores = document.querySelectorAll("[data-incremento] [data-float]");
  valores.forEach((item) => {
    const regexp = /[^.0-9]/g;
    const valor = +item.innerHTML.replace(regexp, "");
    const incremento = valor / 100;
    console.log(incremento);
    console.log(valor);

    item.innerHTML = "0";
    let start = 0;
    const interval = setInterval(callback, Math.random() * 25);

    item.innerHTML = valor;

    function callback() {
      start += incremento;
      item.innerHTML = start.toFixed(1);

      if (start > valor) {
        clearTimeout(interval);
        item.innerHTML = valor;
      }
    }
  });
}
