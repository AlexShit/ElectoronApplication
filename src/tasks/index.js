import getSecondTask from './second_task/index';
import getThirdTask from './third_task/test';

import edgesCount from './first_task/components/edges-count';
import diagonalCount from './first_task/components/diagonal-count';
import childRectCount from './first_task/components/child-rect-count';

document.querySelector('.first_task_input').addEventListener('change', (e) => {
    e.preventDefault();
    const currentMatrix = e.target.value.split(';');
    for (let i = 0; i < currentMatrix.length; i++) {
        currentMatrix[i] = currentMatrix[i].split(',');
        for(let j = 0; j < currentMatrix[i].length; j++) {
        	 currentMatrix[i][j] = +currentMatrix[i][j]; 
        }
    }

        
	const edgesResult = edgesCount(currentMatrix);
	console.log(`Count edges sum - ${edgesResult.sum}, multiply - ${edgesResult.multip}`);
	const diagonalResult = diagonalCount(currentMatrix);
	console.log(`Count diagonal sum - ${diagonalResult.sum}, multiply - ${diagonalResult.multip}`);
    const childRectCountResult = childRectCount(currentMatrix);

    
    
    console.log(`Count rectangle child sum - ${childRectCountResult.sum}, multiply - ${childRectCountResult.multip}`);
});
getSecondTask();
getThirdTask();

