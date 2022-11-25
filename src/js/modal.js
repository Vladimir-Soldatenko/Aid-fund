// Модальное окно
function bindModal(trigger, modal, close) {
  (trigger = document.querySelectorAll(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger &&
    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        body.classList.add("locked");
      });
    });

  close &&
    close.addEventListener("click", () => {
      modal.style.display = "none";
      body.classList.remove("locked");
    });
  modal &&
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        body.classList.remove("locked");
      }
    });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal(".call", ".modal__wrapper", ".modal__close");

// -------------------- validate modal ---------------

const form = document.querySelector(".form");
const modal = document.querySelector(".modal__wrapper");
const modalOk = document.querySelector(".modal__wrapper__ok");
const modalOkClose = modalOk && modalOk.querySelector(".modal__ok__close");

form && form.addEventListener("submit", formValidate);

function removeValidate() {
  let errors = form.querySelectorAll(".active-error");

  errors.forEach((item) => {
    item.remove();
  });
}

function formValidate(e) {
  e.preventDefault();

  removeValidate();

  const inputs = form.querySelectorAll(".val");

  inputs.forEach((item) => {
    if (!item.value) {
      let error = document.createElement("span");
      error.classList.add("active-error");
      error.innerHTML = "Поле не может быть пустым!";
      item.parentElement.insertBefore(error, inputs[item]);
    } else {
      console.log(item.value);
      modal.style.display = "none";
      modalOk.style.display = "flex";
      item.value = "";
    }
  });
}

function closeModalOk(modal, modalClose) {
  const body = document.body;

  modalClose &&
    modalClose.addEventListener("click", () => {
      modalOk.style.display = "none";
      body.classList.remove("locked");
    });

  modal &&
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        body.classList.remove("locked");
      }
    });
}

closeModalOk(modalOk, modalOkClose);
