

function diagonalCount (matrix) {
    
    let multip = 1,
        sum = 0;

    let dioganalDigit = 0;

    for(let i = 0; i < matrix.length; i++) {
        multip *= matrix[i][dioganalDigit];
        sum += matrix[i][dioganalDigit];
        dioganalDigit++;
    }

    return {multip: multip, sum: sum};
}

export default diagonalCount;