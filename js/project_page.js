var acc = document.getElementsByClassName("accordion");
var openedAcc = null;

function OpenAccordion(accordion){
    if(openedAcc !== null){
        openedAcc.nextElementSibling.style.maxHeight = null;
        openedAcc.classList.toggle("active");
    }
    accordion.nextElementSibling.style.maxHeight = accordion.nextElementSibling.scrollHeight + 20 + "px";
    openedAcc = accordion;
}

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            openedAcc = null;
        } else {
            OpenAccordion(acc[i]);
            setTimeout(() => openedAcc.scrollIntoView(), 500);
        }
    });
}