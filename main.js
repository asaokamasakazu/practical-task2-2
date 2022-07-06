let result = document.getElementById('result');

let mode = 'integer_mode';

const momentClick = (target) => {
  let targetValue = target.innerHTML;
  
  if (targetValue == "AC") {
    result.innerHTML = "0";
    mode = 'integer_mode';
  } else if (targetValue == "=") {
    result.innerHTML = eval(result.innerHTML);
    const resultString = result.innerHTML.toString();
    if (resultString.includes(".")) {
      mode = 'decimal_mode';
    } else {
      mode = 'integer_mode';
    }
  } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/" || result.innerHTML.slice(-1) == ".") {
      if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/" || targetValue == ".") {
        return;
      } else {
        result.innerHTML += targetValue;
      }
  } else if (result.innerHTML.slice(-2) == "+0" || result.innerHTML.slice(-2) == "-0" || result.innerHTML.slice(-2) == "*0" || result.innerHTML.slice(-2) == "/0") {
    if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/" || targetValue == ".") {
      result.innerHTML += targetValue;
    } else {
      result.innerHTML = result.innerHTML.slice(0, -1) + targetValue;
    }
  } else if (result.innerHTML.slice(-3) == "+00" || result.innerHTML.slice(-3) == "-00" || result.innerHTML.slice(-3) == "*00" || result.innerHTML.slice(-3) == "/00") {
    if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/" || targetValue == ".") {
      result.innerHTML = result.innerHTML.slice(0, -1) + targetValue;
    } else {
      result.innerHTML = result.innerHTML.slice(0, -2) + targetValue;
    }
  } else if (targetValue == ".") {
    if (mode === 'decimal_mode') {
      return;
    } else {
      result.innerHTML += targetValue;
      mode = 'decimal_mode';
    }
  } else if (targetValue == "+" || targetValue == "*" || targetValue == "/") {
    if (result.innerHTML == 0) {
      return;
    } else {
      result.innerHTML += targetValue;
    }
    mode = 'integer_mode';
  } else if (targetValue == "-") {
    if (result.innerHTML == 0) {
      result.innerHTML = targetValue;
    } else {
      result.innerHTML += targetValue;
    }
    mode = 'integer_mode';
  } else {
    if (result.innerHTML == 0) {
      result.innerHTML = targetValue;
    } else {
      result.innerHTML += targetValue;
    }
  }
};