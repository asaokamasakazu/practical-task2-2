let result = document.getElementById('result');

const momentClick = (target) => {
  let targetValue = target.innerHTML;
  
  if (targetValue == "AC") {
    result.innerHTML = "0";
  } else if (targetValue == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/") {
      if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/") {
      } else {
        result.innerHTML += targetValue;
      }
  } else if (result.innerHTML.slice(-2) == "+0" || result.innerHTML.slice(-2) == "-0" || result.innerHTML.slice(-2) == "*0" || result.innerHTML.slice(-2) == "/0") {
    if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/") {
      result.innerHTML += targetValue;
    } else {
      result.innerHTML = result.innerHTML.slice(0, -1) + targetValue;
    }
  } else if (result.innerHTML.slice(-3) == "+00" || result.innerHTML.slice(-3) == "-00" || result.innerHTML.slice(-3) == "*00" || result.innerHTML.slice(-3) == "/00") {
    if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/") {
      result.innerHTML = result.innerHTML.slice(0, -1) + targetValue;
    } else {
      result.innerHTML = result.innerHTML.slice(0, -2) + targetValue;
    }
  } else {
    if (result.innerHTML == 0) {
      if (targetValue == "+" || targetValue == "*" || targetValue == "/") {
      } else {
        result.innerHTML = targetValue;
      }
    } else {
      result.innerHTML += targetValue;
    }
  }
};