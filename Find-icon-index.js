function findIconIndex(xCoordinatesArray, yCoordinatesArray, tapXCoordinate, tapYCoordinate) {
    var icons = [[]];
    var i = 0;
    for(i = 0; i <= xCoordinatesArray.length - 1; i ++) {
        const icon = [xCoordinatesArray[i], yCoordinatesArray[i]];
        icons.push(icon);
    }
    
    for(var j = 0; j < icons.length - 1 ; j ++) {
        if(tapXCoordinate >= icons[j][0] - 20 && tapXCoordinate <= icons[j][0] + 20 &&
           tapYCoordinate >= icons[j][1] - 20 && tapYCoordinate <= icons[j][1] + 20
        ) {
            console.log(icons.indexOf(icons[j]) - 1)
            return icons.indexOf(icons[j] - 1)
        }
    }
    console.log(-1);
    return -1;
}