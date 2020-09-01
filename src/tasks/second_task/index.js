

function getSecondTask() {
    let $ = (id) => document.querySelector(id);



    const firstInput = $('#first_input'),
        secondInput = $('#second_input'),
        canvasTriangleOne = $('#first_canvas'),
        canvasTriangleTwo = $('#second_canvas'),
        ctxTringleTwo = canvasTriangleTwo.getContext('2d'),
        ctxTriangleOne = canvasTriangleOne.getContext('2d'),
        size = 400;
    canvasTriangleOne.width = size;
    canvasTriangleOne.height = size;
    canvasTriangleTwo.width = size;
    canvasTriangleTwo.height = size;

    let state = {
        first: null,
        seocnd: null
    };
    

    function whatIsType(obj) {
        if(obj.first.a === obj.first.b && obj.first.b === obj.first.c) {
            
        }
    }


    class Triangle {
        constructor(data={}) {
            this.data = data;
            this.a = this.getLength(this.data.A.x, this.data.B.x, this.data.A.y, this.data.B.y);
            this.b = this.getLength(this.data.B.x, this.data.C.x, this.data.B.y, this.data.C.y);
            this.c = this.getLength(this.data.C.x, this.data.A.x, this.data.C.y, this.data.A.y);
        }

        getLength(sx, dx, sy, dy) {
            const left = Math.pow((sx-dx), 2);
            const right = Math.pow((sy-dy), 2);
            return (Math.sqrt(left + right)); // расщитываем длинну вектора по координатам
        }

        getLengths() {
            return {a: this.a, b: this.b, c: this.c};
        }

        getCorners() {
            
            const alf = (this.a ** 2 + this.c ** 2 - this.b ** 2) / (2*this.a*this.c);
            
            const bet = (this.a ** 2 + this.b ** 2 - this.c ** 2) / (2*this.a*this.b);
            
            const gam = (this.b ** 2 + this.c ** 2 - this.a ** 2) / (2*this.c*this.b);

            return {alf: alf, bet: bet, gam: gam};   
        }

        calcRightTringle(hypotenuse, left, right) {
            return Math.pow(hypotenuse, 2) === Math.pow(right, 2) + Math.pow(left, 2);
        }

        isRightTrianle(a, b, c) {
            if (a > b && a > c) {
                return this.calcRightTringle(a, b, c);
            } 
            if (b > a && b > c) {
                return this.calcRightTringle(b, a, c);
            }
            return this.calcRightTringle(c, a, b);
        }

        calcOtuseTriangle (hypotenuse, left, right) {
            return Math.pow(hypotenuse, 2) > Math.pow(right, 2) + Math.pow(left, 2);
        }

        isObtuseTriangle (a, b, c) {
            if (a > b && a > c) {
                return this.calcOtuseTriangle(this.a, this.b, this.c);
            } 
            if (b > a && b > c) {
                return this.calcOtuseTriangle(this.b, this.a, this.c);
            }

            return this.calcOtuseTriangle(this.c, this.a, this.b);
        }




        whatIsType() {
            /* Сначала ищет прямоугльные триугольники, если п.т. не найдены, то круг поиска сужется и находися 
            тупоугольные триугольники, не нашилсь, значит возвращаем определение остроугольного треугольника. */

            if(this.isRightTrianle(this.a, this.b, this.c)) {
                return 'Right';
            }

            if(this.isObtuseTriangle(this.a, this.b, this.c)) {
                return 'Obtuse';
            }

            return 'Acute'; 
        }

        print(ctx) {
            ctx.clearRect(0, 0, 400, 400);
            ctx.beginPath();
            ctx.moveTo(this.data.A.x, this.data.A.y);
            ctx.lineTo(this.data.B.x, this.data.B.y);
            ctx.lineTo(this.data.C.x, this.data.C.y);
            ctx.strokeStyle = 'blue';
            ctx.fill = 'blue';
            ctx.closePath();
            ctx.stroke();
        }
    }

    let rightTriangle, leftTriangle = 0;

    firstInput.addEventListener('change', (e) => {
        e.preventDefault();
        const data = e.target.value.split(',');
        console.log(data);
        const coords = {
            A: {x: data[0], y: data[1]},
            B: {x: data[2], y: data[3]},
            C: {x: data[4], y: data[5]}
        };
        console.log(coords);
        const firstTriangle = new Triangle(coords);
        firstTriangle.print(ctxTriangleOne);
        leftTriangle = firstTriangle.whatIsType();
        inputInfo(leftTriangle, rightTriangle);
    });

    secondInput.addEventListener('change', (e) => {
        e.preventDefault();
        const data = e.target.value.split(',');
        console.log(data);
        const coords = {
            A: {x: data[0], y: data[1]},
            B: {x: data[2], y: data[3]},
            C: {x: data[4], y: data[5]}
        };
        console.log(coords);
        const secondTriangle = new Triangle(coords);
        secondTriangle.print(ctxTringleTwo);
        rightTriangle = secondTriangle.whatIsType();
        inputInfo(leftTriangle, rightTriangle);
    });

    function inputInfo(left, right) {
        document.querySelector('.info-field').innerHTML = `
            Left triangle - ${left} ${right === left? '=' : '&ne;'} Right triangle - ${right}   
        `;
    }
}

export default getSecondTask;


