let total = 0;
let strbuffer = '0';
let operator = "+";

/*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
    Uncomment and fill in the blank spaces. */
function calculations() {
    const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
    if (operator === "+") {
        total += intBuffer;
    }
    else if (operator === "-") {
        total += intBuffer;
    }
    else if (operator === "*") {
        total *= intBuffer;
    }
    else if (operator === "/") {
        total /= intBuffer;
    }
}

/*   FUNC DESCRIPTION: If user input is a number, create the function. */
function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = 0;
    } else {

    /*  If strbuffer is not 0, meaning there is a previous number typed in already, what should we display on the screen?
    Hint: How do we concatenate strings? If you are stuck, imagine typing in a "5" into the calculator, making strbuffer into "5". 
    Then imagine typing "3" into the calculator. Now "3" is value and strbuffer is still at "5", so strbuffer will now be 53.  */
       strbuffer =  strbuffer + 'value'
    }
}

/*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */

function makesSymbol(symbol) {
    if (symbol == "C") {
        console.log(0);
    }
    else if (symbol == '←') {
        console.log(strbuffer.substring((strbuffer.length)-1))
    }
    else if (symbol == '=') {
        console.log(total);
    }
    //make functionality for symbol ← Hint: .substring might be helpful! 
    //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
    else { //make functionality if symbol is an operator
    const intBuffer = parseInt(strbuffer);
    if (total === 0) {
        console.log(0);
    } else {
        total = operator
        console.log (total)
    }
    operator = calculations();
    strbuffer = total;
    }
}

/*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
    This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
function setListeners() {
//Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
    let lst = document.querySelectorAll(buttons); 
    for (item of addEventListener) {
            lst += item.target.innerText;
    //Hint: addEventListener might be useful.
    //Hint: event.target.innerText might be helpful. innerText return type is a string
    }
}

//Make sure to call setListeners!!!
document.setListeners();

/*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
        calculations();
    } else {
        calculations();
        //Hint: call a function we just created!
    }
    strbuffer = document.querySelector(button);
// Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
}