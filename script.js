const nextE1 = document.getElementById("next");
const prevE1 = document.getElementById("prev");

const progressE1 = document.querySelector(".progress-bar-front")

const stepsE1 = document.querySelectorAll(".step");

console.log(stepsE1)


let currentChecked = 1

nextE1.addEventListener("click", () => {
currentChecked++
if(currentChecked > stepsE1.length){
currentChecked = stepsE1.length;
}
updateStepProgress()
console.log(currentChecked);
});



prevE1.addEventListener("click", () => {
    currentChecked--
    if(currentChecked < 1){
    currentChecked = 1;
    }
    updateStepProgress()
    console.log(currentChecked);
    });



function updateStepProgress(){
    stepsE1.forEach((stepE1, idx) => {
        if(idx < currentChecked){
stepE1.classList.add("checked");

       stepE1.innerHTML = `<i class="fa-solid fa-check"></i>
    <small>${idx === 0 ? "start" : idx === stepsE1.length - 1 ? "Final" : "step " + idx}</small>`;
         


        }else{
stepE1.classList.remove("checked");
stepE1.innerHTML =  ` <i class="fa-solid fa-xmark"></i>`
        }
    });

    const checkedNumber = document.querySelectorAll(".checked");
    progressE1.style.width = ((checkedNumber.length - 1) / (stepsE1.length - 1)) * 100 + "%";

    if(currentChecked === 1) {
        prevE1.disabled = true;
 }
else if (currentChecked === stepsE1.length){
    nextE1.disabled = true;
}
else{
    prevE1.disabled = false;
    nextE1.disabled = false;
}
}