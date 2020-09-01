

function getThirdTask() {
    document.querySelector('.third_task_input').addEventListener('change', (e) => {
        const numbers= e.target.value.split(',');
        let param = +numbers[0],
            n = +numbers[1],
            a = +numbers[2],
            b = +numbers[3];
        const h = (b - a) / n;
        let result = 0;
        if(n === 1) { 
            result += (Math.pow(a,n) * Math.pow(Math.E, param * a) / param) - (n * Math.pow(Math.E, param * a)  / param);
            for (let j = 0; j < n; j++) {
                a += h;
                result += (Math.pow(a,n) * Math.pow(Math.E, param * a) / param) - (n * Math.pow(Math.E, param * a)/param);
            }
            result *= h;
        } 
        if (n > 1) {
            result += Math.pow(Math.E, param * a) * (param * a - 1) / Math.pow(param, 2);
            for (let j = 0; j < n; j++) {
                a += h;
                result += Math.pow(Math.E, param * a) * (param * a - 1) / Math.pow(param, 2);
            }
            result *= h;
        } 
        Math.round(result, 3);

        console.log(result);
    });
    
}

export default getThirdTask;
