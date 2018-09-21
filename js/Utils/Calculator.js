class Calculator {
  static plus(firstIndex, secondIndex) {
    return (parseFloat(firstIndex) + parseFloat(secondIndex)).toString();
  }

  static minus(firstIndex, secondIndex) {
    return (parseFloat(firstIndex) - parseFloat(secondIndex)).toString();
  }

  static multiply(firstIndex, secondIndex) {
    return (parseFloat(firstIndex) * parseFloat(secondIndex)).toString();
  }

  static divided(firstIndex, secondIndex) {
    return (parseFloat(firstIndex) / parseFloat(secondIndex)).toString();
  }

  static hundred(currentResult) {
    if (currentResult.length >= 12) return currentResult;
    else {
      if (currentResult.length === 11) return (parseFloat(currentResult) * 10).toString();
      else return (parseFloat(currentResult) * 100).toString();
    }
  }

  static ten(currentResult) {
    if (currentResult.length >= 12) return currentResult;
    else return (parseFloat(currentResult) * 10).toString();
  }

  static addInput(currentResult, incomingValue) {
    if (currentResult.length > 12) return currentResult;
    else{
      if (currentResult === '0') return incomingValue;
      else return `${currentResult}${incomingValue}`;
    } 
  }

  static delete(currentResult) {
    if(currentResult.length <= 1 ) return '0';
    else return currentResult.slice(0, -1);
  }
}

export default Calculator;