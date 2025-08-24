const goalA = document.getElementById("goal");
const currentA = document.getElementById("current");
const contributionA = document.getElementById("contribution");
const calculateBtn = document.getElementById("calcBtn");
const bar = document.getElementById("progressBar");
const result = document.getElementById("resultText");

calculateBtn.addEventListener("click", () => {
    const goalAmount = parseFloat(goalA.value);
    const currentSave = parseFloat(currentA.value);
    const mContribution = parseFloat(contributionA.value);

    if (isNaN(goalAmount) || isNaN(currentSave) || isNaN(mContribution)) {
        alert("Please enter a valid number.")
    }

    const remainingAmount = goalAmount - currentSave;
    const monthsToGoal = Math.ceil(remainingAmount/mContribution);
    const progressPercent = (currentSave/goalAmount)*100;

    bar.style.width = `${progressPercent}%`;

    result.classList.remove("show");
    setTimeout(() => {
        if(currentSave>= goalAmount) {
            result.innerHTML = `🎉 Congratulations! Your savings have reach your goal.`;
        } else {
            result.innerHTML = `🪴 Keep nurturing your savings! You'll reach your goal in ${monthsToGoal} months.`;
        }
        result.classList.add("show");
    }, 100);

});
