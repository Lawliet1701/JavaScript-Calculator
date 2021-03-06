var input = document.getElementById('input');
var historyInput = document.getElementById('history-input');
var buttons = document.getElementsByTagName('button');
var buttonsCount = buttons.length;

var calc = {

    result: 0,
    lastOperation: "",

    add: function () {
        calc.calculate();
        calc.lastOperation = "+";
        calc.printResult();
    },

    substract: function () {
        calc.calculate();
        calc.lastOperation = "-";
        calc.printResult();
    },

    multiply: function () {
        calc.calculate();
        calc.lastOperation = "*";
        calc.printResult();
    },
    
    divide: function () {
        calc.calculate();
        calc.lastOperation = "/";
        calc.printResult();
    },
    
    sqrt: function () {
        calc.lastOperation = "sq";
        calc.calculate();
        calc.lastOperation = "";
        calc.printResult();
    },
    
    power2: function () {
        calc.lastOperation = "pw2";
        calc.calculate();
        calc.lastOperation = "";
        calc.printResult();
    },
    
    percent: function () {
        calc.lastOperation = calc.lastOperation + "%";
        calc.calculate();
        calc.lastOperation = "";
        calc.printResult();
    },
    
    equal: function () {
        calc.calculate();
        calc.lastOperation = "";
        calc.printResult();     
        calc.result = 0;
    },

    calculate: function () {

        switch (calc.lastOperation) {
            case "":  calc.result  = +input.value; break;
            case "+": calc.result += +input.value; break;
            case "-": calc.result -=  input.value; break;
            case "*": calc.result *=  input.value; break;
            case "/": calc.result /=  input.value; break;
            case "*%": calc.result *=  input.value;
                    calc.result /= 100; break;
            case "+%": calc.result *= (100 + +input.value);
                    calc.result /= 100; break;
            case "sq": calc.result = Math.sqrt(input.value); break;
            case "pw2": calc.result = Math.pow(input.value, 2); break;
            
        }
        
    },

    clean: function () {
        input.value = "";
        historyInput.value = "";
        calc.result = 0;
        calc.lastOperation = "";
    },

    cleanLastNumber: function () {
        input.value = input.value.substring(0, input.value.length - 1);
    },

    printResult: function () {
        input.value = "";
        historyInput.value = calc.result + calc.lastOperation;
    }
};

for (var i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function (e) {
        var newInput = input.value + this.value;
        input.value = newInput;
    };
}


document.getElementById('btn-clean').onclick = calc.clean;
document.getElementById('btn-add').onclick = calc.add;
document.getElementById('btn-sub').onclick = calc.substract;
document.getElementById('btn-mult').onclick = calc.multiply;
document.getElementById('btn-equal').onclick = calc.equal;
document.getElementById('btn-div').onclick = calc.divide;
document.getElementById('btn-prc').onclick = calc.percent;
document.getElementById('btn-sqr').onclick = calc.sqrt;
document.getElementById('btn-pow').onclick = calc.power2;
document.getElementById('btn-bsp').onclick = calc.cleanLastNumber;