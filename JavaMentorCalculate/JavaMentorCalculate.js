const romanNumbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const romanDecades = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];

const checkFractionalNumber = str => str.includes('.') || str.includes(',');

const checkStringLength = str => str.length < 3;

const checkBannedChars = (str, allowedString) => {
  let flag = false;
  str.split('').map(elem => {
    if (!allowedString.includes(elem)) {
      flag = true;
    }
  })
  return flag;
}

const getOperation = str => {
  if (str.includes('+')) {
    return '+'
  }
  if (str.includes('-')) {
    return '-'
  }
  if (str.includes('/')) {
    return '/'
  }
  if (str.includes('*')) {
    return '*'
  }
}

const getOperands = (str) => {
  const operation = getOperation(str);
  let parts = {
    leftOperand : '',
    rightOperand : '',
    operation,
  };

  //TODO: Применить регулярку
  parts.leftOperand = str.slice(0, str.indexOf(operation)).trim();
  parts.rightOperand = str.slice(str.indexOf(operation) + 1).trim();
  return parts;
}

const checkArabicOrRoman = operand => {
  const arabic = '0123456789';
  const roman = 'XIV';

  let isArabic = false;
  let isRoman = false;

  operand.split('').forEach(elem => {
    if (arabic.includes(elem)) { isArabic = true }
    if (roman.includes(elem)) { isRoman = true }
  })

  if (isArabic && isRoman) {
    return '';
  }

  return isArabic ? 'arabic' : 'roman';
}

const checkArabicCrashInterval = operand => +operand < 1 || +operand > 10;
// const checkArabicCrashInterval = operand => parseInt(operand, 10) < 1 || parseInt(operand, 10) > 10;

const checkRomanCrashInterval = operand => romanNumbers.indexOf(operand) === -1;

const arabicSum = (a, b) => +a + +b;

const arabicSub = (a, b) => +a - +b;

const arabicMultiply = (a, b) => +a * +b;

const arabicDiv = (a, b) => Math.floor(+a / +b);

const romanToArabic = operand => romanNumbers.indexOf(operand);

const arabicToRoman = operand => {
  operand = `${operand}`;

  if (+operand < 1) {
    return '';
  }

  if (operand.length === 1) {
    return romanNumbers[+operand];
  }

  if (operand.length === 2) {
    return `${romanDecades[+operand[0]]}${romanNumbers[+operand[1]]}`
  }

  if (operand.length === 3) {
    return 'C';
  }
}

console.log(`arabicToRoman : ${arabicToRoman('100')}`);

const calculator = str => {
  // try {
    str = str.trim();

    if (checkFractionalNumber(str)) {
      throw new Error(`--- Строка "${str}" содержит дробное число...`);
    }

    if (checkStringLength(str)) {
      throw new Error(`--- Длина строки "${str}" меньше трех символов...`);
    }

    if (checkBannedChars(str, '0123456789+-/*IVX ')) {
      throw new Error(`--- Строка "${str}" содержит запрещенные символы...`);
    }

  //TODO : работа с операндами -----------------------

    let parts = getOperands(str);
    console.log(parts);

    if (checkBannedChars(parts.rightOperand, '0123456789IVX')) {
      throw new Error(`--- Некорректные правый операнд "${parts.rightOperand}"...`);
    }

    if (checkBannedChars(parts.leftOperand, '0123456789IVX')) {
      throw new Error(`--- Некорректные левый операнд "${parts.leftOperand}"...`);
    }

    if (!parts.leftOperand.length || !parts.rightOperand.length) {
      throw new Error(`--- Пустой операнд...`);
    }

    if (!checkArabicOrRoman(parts.leftOperand)) {
      throw new Error(`--- Смешанный левый операнд "${parts.leftOperand}"...`);
    }

    if (!checkArabicOrRoman(parts.rightOperand)) {
      throw new Error(`--- Смешанный правый операнд "${parts.rightOperand}"...`);
    }

    if (checkArabicOrRoman(parts.rightOperand) !== checkArabicOrRoman(parts.leftOperand)) {
      throw new Error(`--- Несовпадение систем счисления между операндами...`);
    }

    const system = checkArabicOrRoman(parts.leftOperand);
    console.log(system);

    if ((checkArabicCrashInterval(parts.leftOperand) || checkArabicCrashInterval(parts.rightOperand)) && system === 'arabic') {
      throw new Error(`--- Операнд не входит в интервал от 1 до 10 включительно...`);
    }

    if ((checkRomanCrashInterval(parts.leftOperand) || checkRomanCrashInterval(parts.rightOperand))  && system === 'roman') {
      throw new Error(`--- Операнд не входит в интервал от I до X включительно...`);
    }

    let result;

    if (system === 'arabic') {
      switch (parts.operation) {
        case '+':
          result = arabicSum(parts.leftOperand, parts.rightOperand);
          break;
        case '-':
          result = arabicSub(parts.leftOperand, parts.rightOperand);
          break;
        case '/':
          result = arabicDiv(parts.leftOperand, parts.rightOperand);
          break;
        case '*':
          result = arabicMultiply(parts.leftOperand, parts.rightOperand);
          break;
        default: return null;
      }
    }

    if (system === 'roman') {
      switch (parts.operation) {
        case '+':
          result = arabicToRoman(arabicSum(romanToArabic(parts.leftOperand), romanToArabic(parts.rightOperand)));
          break;
        case '-':
          result = arabicToRoman(arabicSub(romanToArabic(parts.leftOperand), romanToArabic(parts.rightOperand)))
          break;
        case '/':
          result = arabicToRoman(arabicDiv(romanToArabic(parts.leftOperand), romanToArabic(parts.rightOperand)))
          break;
        case '*':
          result = arabicToRoman(arabicMultiply(romanToArabic(parts.leftOperand), romanToArabic(parts.rightOperand)));
          break;
        default: return null;
      }
    }

    return `${result}`;
  // } catch (e) {
  //   console.log(e.message)
  // }
}

console.log(calculator('X*X'));

module.exports = calculator;
