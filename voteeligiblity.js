const checkEligibility = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            const result = "You are eligible to vote.";
            resolve(result);
        } else {
            const result = "You are not eligible to vote.";
            reject(result);
        }
    });
};

const checkeligibility = checkEligibility;

window.checkEligibility = () => {
    const ageInput = document.getElementById("ageInput");
    const resultElement = document.getElementById("result");
    const age = Number(ageInput.value);

    return checkEligibility(age)
        .then((result) => {
            resultElement.textContent = result;
            return result;
        })
        .catch((result) => {
            resultElement.textContent = result;
            return result;
        });
};