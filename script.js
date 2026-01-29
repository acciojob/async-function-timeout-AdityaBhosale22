const textInput = document.getElementById("text");
const numberInput = document.getElementById("delay");
const btnInput = document.getElementById("btn");
const output = document.getElementById("output");

btnInput.addEventListener("click", async function(e) {
    const text = textInput.value.trim();
    const delay = Number(numberInput.value.trim()); 

    e.preventDefault(); 

    function applyDelay(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }

    await applyDelay(delay);

    output.innerText = text; 
});