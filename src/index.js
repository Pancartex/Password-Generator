const upperCaseABCArr = new Array(26)
  .fill(1)
  .map((_, i) => String.fromCharCode(65 + i));
const lowerCaseABCArr = new Array(26)
  .fill(1)
  .map((_, i) => String.fromCharCode(97 + i));
const numbersArr = [...Array(10).keys()];
const specialCharArr = [
  "!",
  "%",
  ">",
  "<",
  "&",
  "*",
  ".",
  "'",
  "@",
  "#",
  "$",
  "^",
  "-",
  "_",
  "+",
];
const randomArr = [
  ...upperCaseABCArr,
  ...lowerCaseABCArr,
  ...numbersArr,
  ...specialCharArr,
];

function randomPassword(num) {
  return [
    ...Array(num)
      .fill(0)
      .map(
        (x) => (x = randomArr[Math.floor(Math.random() * randomArr.length)])
      ),
  ].join("");
}

const generateBtn = document.getElementById("generate-btn");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");

const copyBtn1 = document.querySelector(".copy1");
const copyBtn2 = document.querySelector(".copy2");
const copyBtn3 = document.querySelector(".copy3");
const copyBtn4 = document.querySelector(".copy4");

generateBtn.addEventListener("click", () => {
  input1.value = `${randomPassword(12)}`;
  input2.value = `${randomPassword(12)}`;
  input3.value = `${randomPassword(12)}`;
  input4.value = `${randomPassword(12)}`;
});

copyBtn1.addEventListener("click", () => {
  copyText(input1);
});

copyBtn2.addEventListener("click", () => {
  copyText(input2);
});

copyBtn3.addEventListener("click", () => {
  copyText(input3);
});

copyBtn4.addEventListener("click", () => {
  copyText(input4);
});

function copyText(input) {
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      alert("successfully copied");
    })
    .catch((err) => {
      console.log(err);
    });
}
