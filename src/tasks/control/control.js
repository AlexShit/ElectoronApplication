function control() {
    let active = [];
    function makeHide() {
        document.querySelectorAll('button').forEach(elem => {
            elem.classList.add('hide');
        });
    }
    document.querySelector('.matrix-button').addEventListener('click', () => {
        makeHide();
        active.push(document.querySelector('.matrix-field').classList.add('active'));
    }); 
}

export default control;