var alertWindowLoad = function(e) {
    console.log('Window Loaded!');

    /**************************************
    *        BUILD CALCULATOR             *
    ***************************************/
    var table = document.createElement('table');
      table.width = '27%';
      table.border = '1px solid black'
      table.id = 'calculator';

      // MAKE DISPLAY ROW
      var tr = document.createElement('tr');
      var display = document.createElement('td');
      display.textContent = '0';
      display.style.fontSize = "50px";
      display.style.height = "1em";
      display.colSpan = '4';
      display.style.textAlign = 'right';
      display.id = 'display';
      table.appendChild(tr);
      table.appendChild(display);


      // MAKE FIRST ROW C ; +/- ; % ; /
      var tr1 = document.createElement('tr');
      var clear = document.createElement('td');
      clear.textContent = 'AC';
      clear.id = 'num';
      clear.style.fontSize = "x-large"
      clear.style.textAlign = 'center'
      var plusMin = document.createElement('td');
      plusMin.textContent = '+/-';
      plusMin.id = 'num';
      plusMin.style.fontSize = "xx-large"
      plusMin.style.textAlign = 'center'
      var mod = document.createElement('td');
      mod.textContent = '%';
      mod.id = 'num';
      mod.style.fontSize = "xx-large"
      mod.style.textAlign = 'center'
      var div = document.createElement('td');
      div.textContent = '÷';
      div.id = 'oper';
      div.style.fontSize = "xx-large"
      div.style.textAlign = 'center'
      table.appendChild(tr1);
      table.appendChild(clear);
      table.appendChild(plusMin);
      table.appendChild(mod);
      table.appendChild(div);

      // MAKE SECOND ROW 7 ; 8 ; 9 ; X
      var tr2 = document.createElement('tr');
      var num7 = document.createElement('td');
      num7.textContent = '7';
      num7.id = 'num';
      num7.style.fontSize = "xx-large"
      num7.style.textAlign = 'center'
      var num8 = document.createElement('td');
      num8.textContent = '8';
      num8.id = 'num';
      num8.style.fontSize = "xx-large"
      num8.style.textAlign = 'center'
      var num9 = document.createElement('td');
      num9.textContent = '9';
      num9.id = 'num';
      num9.style.fontSize = "xx-large"
      num9.style.textAlign = 'center'
      var mult = document.createElement('td');
      mult.textContent = '×';
      mult.id = 'oper';
      mult.style.fontSize = "xx-large"
      mult.style.textAlign = 'center'
      table.appendChild(tr2);
      table.appendChild(num7);
      table.appendChild(num8);
      table.appendChild(num9);
      table.appendChild(mult);

      // MAKE THIRD ROW 4 ; 5 ; 6 ; -
      var tr3 = document.createElement('tr');
      var num4 = document.createElement('td');
      num4.textContent = '4';
      num4.id = 'num';
      num4.style.fontSize = "xx-large"
      num4.style.textAlign = 'center'
      var num5 = document.createElement('td');
      num5.textContent = '5';
      num5.id = 'num';
      num5.style.fontSize = "xx-large"
      num5.style.textAlign = 'center'
      var num6 = document.createElement('td');
      num6.textContent = '6';
      num6.id = 'num';
      num6.style.fontSize = "xx-large"
      num6.style.textAlign = 'center'
      var subtract = document.createElement('td');
      subtract.textContent = '-';
      subtract.id = 'oper';
      subtract.style.fontSize = "xx-large"
      subtract.style.textAlign = 'center'
      table.appendChild(tr3);
      table.appendChild(num4);
      table.appendChild(num5);
      table.appendChild(num6);
      table.appendChild(subtract);

      // MAKE FOURTH ROW 1 ; 2 ; 3 ; +
      var tr4 = document.createElement('tr');
      var num1 = document.createElement('td');
      num1.textContent = '1';
      num1.id = 'num';
      num1.style.fontSize = "xx-large"
      num1.style.textAlign = 'center'
      var num2 = document.createElement('td');
      num2.textContent = '2';
      num2.id = 'num';
      num2.style.fontSize = "xx-large"
      num2.style.textAlign = 'center'
      var num3 = document.createElement('td');
      num3.textContent = '3';
      num3.id = 'num';
      num3.style.fontSize = "xx-large"
      num3.style.textAlign = 'center'
      var plus = document.createElement('td');
      plus.textContent = '+';
      plus.id = 'oper';
      plus.style.fontSize = "xx-large"
      plus.style.textAlign = 'center'
      table.appendChild(tr4);
      table.appendChild(num1);
      table.appendChild(num2);
      table.appendChild(num3);
      table.appendChild(plus);

      // MAKE FIFTH ROW 0 ; . ; =
      var tr5 = document.createElement('tr');
      var num0 = document.createElement('td');
      num0.textContent = '0';
      num0.style.fontSize = "xx-large"
      num0.colSpan = '2';
      num0.id = 'num';
      num0.style.fontSize = "xx-large"
      num0.style.textAlign = 'center'
      var dec = document.createElement('td');
      dec.textContent = '.';
      dec.id = 'num';
      dec.style.fontSize = "xx-large"
      dec.style.textAlign = 'center'
      var equals = document.createElement('td');
      equals.textContent = '=';
      equals.id = 'oper';
      equals.style.fontSize = "xx-large"
      equals.style.textAlign = 'center'

      table.appendChild(tr5);
      table.appendChild(num0);
      table.appendChild(dec);
      table.appendChild(equals);


      document.body.appendChild(table);


      /**************************************
      *                LOGIC                *
      ***************************************/
      var answer = [];
      var answers = [];
      var operand1 = null;
      var operand2 = null;
      var final = 0;
      var operator = null;

      var enterNumber = function(number) {
        if (answer[0] === '0' && number.textContent === '0'){   // NO DOUBLE ZERO
          console.log("can't add more than one zero!");
        }
        else if (answer.includes('.') && number.textContent === '.') { // NO DOUBLE DECIMAL
          console.log("Cannt add multiple decimals, bro!");
        }
        else  {
          if (answer[0] === '0') {   // NO LEADING ZERO
            answer.shift();
          }
          answer.push(number.textContent);
          answers = answer.join(" ");
          answers = answers.replace(/\s/g, "");
          display.textContent = answers;
        }
      }

      // Holder Function!!
      var counter = 0;
      var holder = function(op) {
        if (counter == 0) {
        operator = op;
        answers = answers.split(",");
        answers.forEach(function(value){
          value.trim();
          parseFloat(value);
        })
        answers = answers.join("");
        answers = answers.replace(/\s/g, "");
        console.log("operand 1 is: " + answers);
        operand1 = answers;
        answer = [];
        answers = [];
        display.textContent = operand1;
        }
      else {
        operator = op;
        calculate();
        operand1 = final;
      }
      counter++;
      }

      // Math Functions
      // --- ADD/SUB/MULT/DIV ----
      var calculate = function() {
        answers = answers.split();
        answers.forEach(function(value){
          parseFloat(value);
        })
        answers = answers.join("");
        answers = answers.replace(/\s/g, "");
        console.log("Operand 2 is: " + answers);
        operand2 = answers;
        answer = [];
        ansers = [];
        display.textContent = operand1;

        // add
        if (operator === '+') {
          final = parseFloat(operand1) + parseFloat(operand2);
          display.textContent = final;
        }
        // subtract
        if (operator === '-') {
          final = parseFloat(operand1) - parseFloat(operand2);
          display.textContent = final;
        }
        // multiply
        if (operator === '×') {
          final = parseFloat(operand1) * parseFloat(operand2);
          display.textContent = final;
        }
        // divide
        if (operator === '÷') {
          final = parseFloat(operand1) / parseFloat(operand2);
          display.textContent = final;
        }
        // modulo
        if (operator === '%') {
          final = parseFloat(operand1) % parseFloat(operand2);
          display.textContent = final;
        }
      }

      // Positive/Negative function
      var flip = function(op) {
    try {
      if (operator === '+/-') {
        operator = 'n/a';
        answers = answers.split("");
        console.log(answers);
        answers.splice(0,1);
        console.log("Array after splice! = " + answers);
        answers.forEach(function(value){
          parseFloat(value);
        })
        answers = answers.join("");
        answers = answers.replace(" ", "");
        console.log("STORED ITEM = " + answers);
        var flipped = parseFloat(answers) * (-1) ;
        console.log("The Flipped Number is: " + flipped);
        console.log("Current Operator is: " + operator);

        display.textContent = answers;
      }
      else if (operator != '+/-') {
        operator = '+/-';
        answers = answers.split();
        answers.unshift('-');
        answers.forEach(function(value){
          parseFloat(value);
        })
        answers = answers.join("");
        answers = answers.replace(" ", "");
        var flipped = parseFloat(answers) - (parseFloat(answers) * 2) ;
        console.log("The Flopped Number is: " + flipped);
        console.log("Current Operator is: " + operator);
        console.log("STORED ITEM = " + answers);
        display.textContent = answers;
      }
    } catch (e) {
        console.log(e);
    } finally {
      console.log("nothing happened");
    }
      }

      // BUTTON CLICKS
      num0.addEventListener('click', function(e){
        enterNumber(num0);
      });
      num1.addEventListener('click', function(e){
        enterNumber(num1);
      });
      num2.addEventListener('click', function(e){
        enterNumber(num2);
      });
      num3.addEventListener('click', function(e){
        enterNumber(num3);
      });
      num4.addEventListener('click', function(e){
        enterNumber(num4);
      });
      num5.addEventListener('click', function(e){
        enterNumber(num5);
      });
      num6.addEventListener('click', function(e){
        enterNumber(num6);
      });
      num7.addEventListener('click', function(e){
        enterNumber(num7);
      });
      num8.addEventListener('click', function(e){
        enterNumber(num8);
      });
      num9.addEventListener('click', function(e){
        enterNumber(num9);
      });
      dec.addEventListener('click', function(e){
        enterNumber(dec);
      });
      plus.addEventListener('click', function(e){
        holder(plus.textContent);
      });
      subtract.addEventListener('click', function(e){
        holder(subtract.textContent);
      });
      mult.addEventListener('click', function(e){
        holder(mult.textContent);
      });
      div.addEventListener('click', function(e){
        holder(div.textContent);
      });
      mod.addEventListener('click', function(e){
        holder(mod.textContent);
      });
      plusMin.addEventListener('click', function(e){
        flip(plusMin.textContent);
      });
      equals.addEventListener('click', function(e){
        calculate();
      });
      clear.addEventListener('click', function(e){
        location.reload();
      });
}

window.addEventListener('load', alertWindowLoad);
