let index = 0;
const sections = document.querySelectorAll(".section");

function show(i){
    sections.forEach(s => s.classList.remove("active"));
    sections[i].classList.add("active");
}

function next(){
    if(index < sections.length - 1){
        index++;
        show(index);
    }
}

function prev(){
    if(index > 0){
        index--;
        show(index);
    }
}
