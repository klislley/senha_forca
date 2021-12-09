const input = document.querySelector("input");
const show = document.querySelector(".show_hide");
const indicator = document.querySelector(".indicator");
const textIndicator = document.querySelector(".text-indicator");

//mostrar e esconder a senha
show.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    show.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    show.classList.replace("fa-eye", "fa-eye-slash");
  }
});

//////////

let alphabet = /[a-zA-Z]/;
let number = /[0-9]/;
let character = /[!,@,#,$,%,&,*,?,_,(,),-,+,=,^,~]/;

input.addEventListener("keyup", () => {
  indicator.classList.add("active");

  let val = input.value;

  if (val.match(alphabet) || val.match(number) || val.match(character)) {
    textIndicator.textContent = "Senha fraca";
    indicator.style.color = "#eb5a5a";
    show.style.color = "#eb5a5a";
    input.style.color = "#eb5a5a";
  }

  if (val.match(alphabet) && val.match(number) && val.length >= 6) {
    textIndicator.textContent = "Senha mediana";
    indicator.style.color = "#f8a100";
    show.style.color = "#f8a100";
    input.style.color = "#f8a100";
  }

  if (
    val.match(alphabet) &&
    val.match(number) &&
    val.match(character) &&
    val.length >= 12
  ) {
    textIndicator.textContent = "Senha forte";
    indicator.style.color = "#239400";
    show.style.color = "#239400";
    input.style.color = "#239400";
  }

  if (val == "") {
    indicator.classList.remove("active");
    indicator.style.color = "#444";
    show.style.color = "#808080";
    input.style.color = "#444";
  }
});
