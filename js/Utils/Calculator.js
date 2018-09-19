class Calculator {
  static plus(firstIndex, secondIndex) {
    return (parseInt(firstIndex) + parseInt(secondIndex)).toString();
  }
  static hundred(currentResult) {
    if (currentResult.length >= 12) return currentResult;
    else {
      if (currentResult.length === 11) return (parseInt(currentResult) * 10).toString();
      else return (parseInt(currentResult) * 100).toString();
    }
  }
  static ten(currentResult) {
    if (currentResult.length >= 12) return currentResult;
    else return (parseInt(currentResult) * 10).toString();
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