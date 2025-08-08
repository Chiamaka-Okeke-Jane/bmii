document.querySelector(".bmiform").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        bmi = bmi.toFixed(2); 

        document.getElementById("bmi-value").textContent = `Your BMI is: ${bmi}`;

        let status = "";
        if (bmi < 18.5) {
            status = "UNDERWEIGHT";
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "NORMAL WEIGHT";
        } 
        else if (bmi >= 25 && bmi <= 29.9) {
            status = "OVERWEIGHT";
        } 
        else {
            status = "OBESE";
        }

        document.getElementById("bmi-status").textContent = `Status: ${status}`;
    } else {
        document.getElementById("bmi-value").textContent = "Please enter valid numbers.";
        document.getElementById("bmi-status").textContent = "";
    }
});
