let result = document.getElementById('result');

const momentClick = (target) => {
  let targetValue = target.innerHTML;
  
  if (targetValue == "AC") {
    result.innerHTML = "0";
  } else if (targetValue == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/") {
      if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/" || targetValue == 0) {
      } else {
        result.innerHTML += targetValue;
      }
  } else {
    if (result.innerHTML == 0) {
      result.innerHTML = targetValue;
    } else {
      result.innerHTML += targetValue;
    }
  }
};