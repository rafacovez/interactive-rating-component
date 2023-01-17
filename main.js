function submitRate() {
    document.getElementById("modal").style.visibility = "hidden";
    document.getElementById("modal").style.opacity = "0";
    document.getElementById("thankYouModal").style.visibility = "visible";
    document.getElementById("thankYouModal").style.opacity = "1";
    try {
        document.getElementById("rateNum").textContent = document.querySelector("input[name='rate']:checked").value;
    } catch {
        document.getElementById("rateMsg").textContent = "You didn't select a rate";
        document.getElementById("submitModalHeading").textContent = ":(";
        document.getElementById("submitModalPara").textContent = "Please select a rate from 1 to 5";
    }
}