// Custom scripts
@@include('scroll.js')
@@include('modal.js')
@@include('tabs.js')

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
  

