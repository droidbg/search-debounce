// Debounce function in Javascript

const inputElement = document.querySelector("input");

const handleInput = (e) => {
  console.dir(e.target.value);
};

const debounce = (func, waitTime) => {
  let timer;
  return function (e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(e);
    }, waitTime);
  };
};
const debouncedInputHandler = debounce(handleInput, 500);

inputElement.addEventListener("input", debouncedInputHandler);
