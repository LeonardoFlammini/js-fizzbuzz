const boxContainer = document.querySelector(".box-container-lf");

const boxZero = document.createElement("div");
boxZero.classList.add("box");
boxZero.append("0");
boxContainer.append(boxZero);

for (let i = 0; i < 1000; i++) {

  const box = document.createElement("div");
  box.classList.add("box");
  if (!((i + 1) % 3) && !((i + 1) % 5)){
    box.classList.add("fizz-buz");
    box.append ("FizzBuzz");
  } else if (!((i + 1) % 3)) {
    box.classList.add("fizz");
    box.append ("Fizz")
  } else if (!((i + 1) % 5)) {
    box.classList.add("buzz");
    box.append ("Buzz");
  } else {
    box.append((i + 1));
  }
  
  boxContainer.append(box);
}