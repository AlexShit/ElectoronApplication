

function childRectCount(matrix) {
    
    function OddRectError(matrix) {
        if(matrix.length % 2 != 0 || matrix[0].length % 2 != 0) {
            throw Error("Input correct values of matrix");
        }
    }
    
    OddRectError(matrix);

    let multip = 1,
        sum = 0;
    
    for(let ord = matrix.length / 2; ord < matrix.length;  ord++) {

        for(let abs = matrix[0].length / 2; abs < matrix[0].length; abs++) {
            
            multip *= matrix[ord][abs];
            sum += matrix[ord][abs];
        }
    }

    return {multip: multip, sum: sum};
}

export default childRectCount;