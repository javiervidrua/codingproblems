/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // Replace the input pixel + 4-directionally connected with the same oldColor with the newColor
    var replace = function(image, oldColor, newColor, row, column, rows, columns){
        if(image[row][column] === oldColor && oldColor!=newColor){
            image[row][column]=newColor;
            // // Logging
            //console.log(`Replacing ${oldColor} with ${newColor}: [${row},${column}]`);
            // process.stdout.write("Up: ");
            // console.log(row>0);
            // process.stdout.write("Down: ");
            // console.log(row<rows-1);
            // process.stdout.write("Left: ");
            // console.log(column>0);
            // process.stdout.write("Right: ");
            // console.log(column<columns-1);

            // Up
            if(row>0)
                replace(image, oldColor, newColor, row-1, column, rows, columns);
            // Down
            if(row<rows-1)
                replace(image, oldColor, newColor, row+1, column, rows, columns);

            // Left
            if(column>0)
                replace(image, oldColor, newColor, row, column-1, rows, columns);
            // Rigth
            if(column<columns-1)
                replace(image, oldColor, newColor, row, column+1, rows, columns);
        }
    }

    // Initialize and run the algorithm
    let oldColor = image[sr][sc];
    if(image.length > 0){
        if(image[0].length > 0)
            replace(image, oldColor, newColor, sr, sc, image.length, image[0].length);
    }

    return image;
};

// OPTIMIZED
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var replace = function(image, oldColor, newColor, row, column, rows, columns){
        if(image[row][column] === oldColor && oldColor!=newColor){
            image[row][column]=newColor;

            if(row>0)
                replace(image, oldColor, newColor, row-1, column, rows, columns);
            if(row<rows-1)
                replace(image, oldColor, newColor, row+1, column, rows, columns);

            if(column>0)
                replace(image, oldColor, newColor, row, column-1, rows, columns);
            if(column<columns-1)
                replace(image, oldColor, newColor, row, column+1, rows, columns);
        }
    }

    let oldColor = image[sr][sc];
    if(image.length > 0){
        if(image[0].length > 0)
            replace(image, oldColor, newColor, sr, sc, image.length, image[0].length);
    }

    return image;
};
