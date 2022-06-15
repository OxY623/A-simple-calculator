var operationButtons = document.getElementsByClassName("operations");
//window.alert(operationButtons);

function makeOperation(operation){
    var number1 = Number(numOne.value);
    var number2 = Number(numSecond.value);
    if (operation === " + "){
        var resultPlus = number1 + number2;
        result.innerHTML = resultPlus;
    } else {
        if (operation === " - "){
            var resultMinus = number1 - number2;
            result.innerHTML = resultMinus;
        } else {
            if (operation === " * "){
                var resultMyltiplay = number1 * number2;
                result.innerHTML = resultMyltiplay;
            } else {
                var resultDevide = number1 / number2;
                result.innerHTML = resultDevide;
            }

        }
    }
}

function onOperationButtonClick(eventObject){
    var clickedElement = eventObject.currentTarget;
    var operation_a = clickedElement.innerHTML;
    makeOperation(operation_a);
}

for (var i = 0; i < operationButtons.length;i++){
    operationButtons[i].addEventListener("click", onOperationButtonClick);
}
