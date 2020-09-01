

function edgesCount (matrix) {
    
    const upCount = (matrix) => {
        let multip = 1,
              sum = 0;
              
        for (let i = 0; i < matrix[0].length; i++ ){
            multip *= matrix[0][i];
            sum += matrix[0][i];
        }
        return {multip: multip, sum:  sum};
    };

    const downCount = (matrix) => {
        let multip = 1,
              sum = 0;
        const lastChild = matrix.length - 1;
        for (let i = 0; i < matrix[lastChild].length; i++ ){
            multip *= matrix[lastChild][i];
            sum += matrix[lastChild][i];
        }
        return {multip: multip, sum:  sum};
    };
    const leftCount = (matrix) => {
        let multip = 1,
              sum = 0;
        for (let i = 0; i < matrix.length; i++ ){
            multip *= matrix[i][0];
            sum += matrix[i][0];
        }
        return {multip: multip, sum:  sum};
    };
    const rightCount = (matrix) => {
        let multip = 1,
              sum = 0;
        const lastChaild = matrix[0].length - 1;
        for (let i = 0; i < matrix.length; i++ ){
            multip *= matrix[i][lastChaild];
            sum += matrix[i][lastChaild];
        }
        return {multip: multip, sum:  sum};
    };

    const multip = upCount(matrix).multip * downCount(matrix).multip * rightCount(matrix).multip * leftCount(matrix).multip;
    const sum = upCount(matrix).sum + downCount(matrix).sum + leftCount(matrix).sum + rightCount(matrix).sum;

    return {multip: multip, sum: sum};
}

export default edgesCount;