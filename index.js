let indexReference;

function isWin(element, index){
    indexReference = index;
    return element.result === 'W';
}

function superbowlWin(dataArray){
    dataArray.find(isWin);
    return dataArray[indexReference].year;
}
