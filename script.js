const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");


checkBtn.addEventListener("click", function () {

    const number = Number(numberInput.value);

    if (numberInput.value === "") {
        result.className = "warning";
        result.textContent = "⚠️ Please enter a number.";
        return;
    }

    // Restart animation
    result.style.animation = "none";
    result.offsetHeight;
    result.style.animation = "pop 0.4s ease";


   if (number % 2 === 0) {

    // Even: keep the original green color
    result.className = "";
    result.style.background = "#40c9a2";
    result.style.color = "white";
    result.textContent =  number + " is an Even Number!" + "💫";

} else {

    // Odd: red color
    result.className = "";
    result.style.background = "#ff6b6b";
    result.style.color = "white";
    result.textContent = number + " is an Odd Number!" + "✨ ";

}

})


//reset
resetBtn.addEventListener("click", function () {

    numberInput.value = "";
    result.textContent = "";
    result.className = "";
    result.style.background = "";
    result.style.color = "";
    numberInput.focus();

});


numberInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkBtn.click();
    }

});