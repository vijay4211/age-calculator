const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value; //you must use  ".value", 
  // console.log("birthdayValue==",birthdayValue); //birthdayValue== 1993-09-08
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    // console.log("age====",age); //30
    // imp
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    // resultEl.innerText = `Your age is ${age} year old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  // console.log("currentDate====",currentDate); //currentDate==== Wed Aug 16 2023 16:22:59 GMT+0530 (India Standard Time)
  const birthdayDate = new Date(birthdayValue);
  // console.log("birthdayDate=====",birthdayDate); //birthdayDate===== Mon Mar 08 1993 05:30:00 GMT+0530 (India Standard Time)

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  console.log("age===>",age); //30
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  // console.log("month===>",month); //5

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
