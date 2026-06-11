let current = 0;
const sections = document.querySelectorAll(".section");

function show(index){
    sections.forEach(s => s.classList.remove("active"));
    sections[index].classList.add("active");
}

function next(){
    if(current < sections.length - 1){
        current++;
        show(current);
    }
}

function prev(){
    if(current > 0){
        current--;
        show(current);
    }
}
