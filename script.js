const heightInput = document.getElementById("input");
const weightInput = document.getElementById("input-two");
const computeBtn = document.getElementById("compute");
const display = document.getElementById("result");
const weightWarning = document.getElementById("Weight-warning");
const heightWarning = document.getElementById("height-warning");

computeBtn.addEventListener("click", () => {
    let heightVal = Number(heightInput.value);
    let weightVal = Number(weightInput.value);

    if (isNaN(heightVal) || heightVal <= 0) {
        heightWarning.style.color = "red";
        heightWarning.textContent = "Enter a valid height";
        setTimeout(() => { heightWarning.textContent = ""; }, 3000);
        heightInput.value = "";
        display.textContent = "";
    }


    if (isNaN(weightVal) || weightVal <= 0) {
        weightWarning.style.color = "red";
        weightWarning.textContent = "Enter a valid weight";
        setTimeout(() => { weightWarning.textContent = ""; }, 3000);
        weightInput.value = "";
        display.textContent = "";
        return;
    }

    let heightInMeters = heightVal / 100;
    let bmi = weightVal / (heightInMeters * heightInMeters);
    
    display.textContent = `Your Body Mass Index: ${bmi.toFixed(2)}`;

    heightInput.value = "";
    weightInput.value = "";
});
