                    // Function to Enter Number.
function appendNumber(num) {
  let display = document.getElementById("result_01");
  let currentValue = display.value;

  if (num === '.' && currentValue.includes('.')) return;

  let newValue = currentValue.toString() + num.toString();
  display.value = newValue;
}
                    
                    // Function to Perform Operator. 
function replaceArithmeticOperator(str) {
    let operators = ['+', '-', '*', '/', '%'];

    if (str.length < 2) {
      return str;
    }

    let lastChar = str[str.length - 1];
    if (operators.includes(lastChar)) {
            let lastIndex = -1;

        for (let i = str.length - 2; i >= 0; i--) {
            if (operators.includes(str[i])) {
                lastIndex = i;
                break;
            }
        }

        if (lastIndex !== -1) {
            str = str.slice(0, lastIndex) + lastChar;
        }
    }

    return str;
}

function appendOperator(op) {
    let display = document.getElementById("result_01").value += op;
    let result = replaceArithmeticOperator(display);
    document.getElementById("result_01").value = result;
}

                    // Function to Clear Screen.
function clearResult() {
    document.getElementById("result_01").value = "";
    document.getElementById("result_02").value = "";
}

                    //Function to Delete One Number
function delResult() {
    document.getElementById('result_01').value = document.getElementById('result_01').value.slice(0, -1);
}

                    // Show of Values
function valueOfSqrRoot() {
    appendNumber('√');
}

                    // Log 10
function valueOfLog() {
    appendNumber('lg(');
    alert("Please make sure to close the bracket after entering the value. For Example: lg(00)");
}

                    // Ln Function for Value.
function valueOfLn() {
    appendNumber('ln(');
    alert("Please make sure to close the bracket after entering the value. For Example: ln(00)");
}

                    // Percentage Value.
function valueOfPercentage() {
    appendNumber('%');
}

                    // Function to Calculate Square Root.
function calculateSqrRoot() {
    let result1 = document.getElementById('result_01').value;
    let parse = result1.slice(1);
    let sr = Math.sqrt(parse);
    return sr;
}

                    // Function to Calculate Log.
function calculateLog() {
    let result1 = document.getElementById('result_01').value;
    let parse = result1.slice(3, -1);
    let lg = Math.log10(parse).toFixed(4);
    return lg;
}

                    // Function to Calculate Ln.
function calculateLn() {
    let result1 = document.getElementById('result_01').value;
    let parse = result1.slice(3, -1);
    let ln = Math.log(parse).toFixed(4);
    return ln;
}

                    // Functions to Calculate Percentage.
function calculatePercentage() {
let result1 = document.getElementById("result_01").value;
let result = parseFloat(result1);
let answer = (result / 100);
return answer;
}

                    // Alert and Trigonometric Value.
function valueOfSin() {
    appendNumber('Sin(');
    alert("Please make sure to close the bracket after entering the value. For Example: Sin(45)");
}
function valueOfCos() {
    appendNumber('Cos(');
    alert("Please make sure to close the bracket after entering the value. For Example: Cos(45)");
}
function valueOfTan() {
    appendNumber('Tan(');
    alert("Please make sure to close the bracket after entering the value. For Example: Tan(45)");
}
function valueOfSinInv() {
    appendNumber('arcsin(');
    alert("Please make sure to close the bracket after entering the value. For Example: arcsin(45)");
}
function valueOfCosInv() {
    appendNumber('arccos(');
    alert("Please make sure to close the bracket after entering the value. For Example: arccos(45)");
}
function valueOfTanInv() {
    appendNumber('arctan(');
    alert("Please make sure to close the bracket after entering the value. For Example: arctan(45)");
}

                    // Functions to Calculate Trigonometric Values. 
function calculateSin() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let sin = Math.sin(slice * (Math.PI / 180)).toFixed(4);
    return sin;
}
function calculateCos() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let cos = Math.cos(slice * (Math.PI / 180)).toFixed(4);
    return cos;
}
function calculateTan() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let tan = Math.tan(slice * (Math.PI / 180)).toFixed(4);
    return tan;
}

                    // Functions to Calculate Inverse Trigonometric Values.
function calculateSinInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(7, -1);
    let sinInverse = Math.asin(slice).toFixed(4);
    return sinInverse;
}
function calculateCosInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(7, -1);
    let cosInverse = Math.acos(slice).toFixed(4);
    return cosInverse;
}
function calculateTanInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(7, -1);
    let tanInverse = Math.atan(slice).toFixed(4);
    return tanInverse;
}


                    // Function for Toggle.
function slider() {
    let scientificCalc = document.querySelector('.scientific-calculator');
    let buttonSection = document.querySelector('.button-section');
    let img = document.querySelector('.nav-bar img');
    let result1 = document.getElementById('result_01');
    let result2 = document.getElementById('result_02');
    
    if (scientificCalc.classList.contains('hidden')) {
        scientificCalc.classList.remove('hidden');
        buttonSection.classList.add('hidden');
        img.src = './assests/converter_01.png';
        img.style.height = '30px';
        result1.style.height = '81px';
        result2.style.height = '81px';
    } else {
        buttonSection.classList.remove('hidden');
        scientificCalc.classList.add('hidden');
        img.src = './assests/converter.png';
        img.style.height = '25px';
        result1.style.height = '120px';
        result2.style.height = '120px';
    }
}

function slider1() {
    let a1 = document.getElementById('01');
    let a2 = document.getElementById('02');
    let a3 = document.getElementById('03');
    let c1 = [a1, a2, a3];
    let b1 = document.getElementById('1');
    let b2 = document.getElementById('2');
    let b3 = document.getElementById('3');
    let d1 = [b1, b2, b3];

    if (c1[0].classList.contains('h')) {
        c1[0].classList.remove('h');
        c1[1].classList.remove('h');
        c1[2].classList.remove('h');
        d1[0].classList.add('h');
        d1[1].classList.add('h');
        d1[2].classList.add('h');
    } else {
        c1[0].classList.add('h');
        c1[1].classList.add('h');
        c1[2].classList.add('h');
        d1[0].classList.remove('h');
        d1[1].classList.remove('h');
        d1[2].classList.remove('h');
    }
}

                        // Functions to Calculate Result (Eval).
function calculate() {
    let result = document.getElementById('result_01').value;
    let answer;

    try {
        answer = eval(result);
        document.getElementById('result_02').value = answer;
    } catch (error) {
        console.log('error: ' + error);
        document.getElementById('result_02').value = 'Error';
    }

    switch (true) {
        case result.includes('Sin('):
            answer = calculateSin();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('Cos('):
            answer = calculateCos();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('Tan('):
            answer = calculateTan();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('arcsin('):
            answer = calculateSinInverse();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('arccos('):
            answer = calculateCosInverse();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('arctan('):
            answer = calculateTanInverse();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('√'):
            answer = calculateSqrRoot();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('lg('):
            answer = calculateLog();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('ln('):
            answer = calculateLn();
            document.getElementById('result_02').value = answer;
        break;
        case result.includes('%'):
            answer = calculatePercentage();
            document.getElementById('result_02').value = answer;
        break;
    }
}