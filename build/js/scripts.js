// Custom Scripts
// Custom scripts
//  ----------- scroll -----------------
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

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

// ======================== tabs ======================

function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "flex"
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content &&
      content.forEach((item) => {
        item.style.display = "none";
      });
    tab &&
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header &&
    header.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
      ) {
        tab &&
          tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
      }
    });
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");


// ------------- copy invoice for payment --------------

const tabsBlock = document.querySelector(".tabs");

tabsBlock && tabsBlock.addEventListener("click", copyNums);

function copyNums(e) {
      
      if (e.target.classList.contains("pay__info__copy__text") && window.innerWidth > 767.98) {
   
        const target = e.target;
        const currentInput =
          target.parentElement.previousElementSibling.children[0];
        target.previousElementSibling.classList.add("active-copy");
  
        setTimeout(() => {
          e.target.previousElementSibling.classList.remove("active-copy");
        }, 2500);
  
        currentInput.removeAttribute("readonly");
        currentInput.select();
        document.execCommand("copy");
        currentInput.setAttribute("readonly", "");
      
    }
    else if(e.target.classList.contains("copy") && window.innerWidth < 767.98){
        const target = e.target;
        const currentInput =
          target.parentElement.previousElementSibling.children[0];
        target.nextElementSibling.classList.add("active-copy");
  
        setTimeout(() => {
          e.target.nextElementSibling.classList.remove("active-copy");
        }, 2500);
  
        currentInput.removeAttribute("readonly");
        currentInput.select();
        document.execCommand("copy");
        currentInput.setAttribute("readonly", "");
      
    }
    }
  


