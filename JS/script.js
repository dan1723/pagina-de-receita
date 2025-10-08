function openClose() {
    // Ingredientes
    let content1 = document.querySelector('#conttIngr');
    let checkbox1 = document.querySelector('#cbox1');
    let iconIngr = document.querySelector('#iconOC1');

    if (checkbox1.checked) {
        content1.style.display = 'block';
        iconIngr.src="./assets/images/aberto.png"
    } else {
        content1.style.display = 'none';
        iconIngr.src="./assets/images/fechado.png"
    }


    // Instruções
    let content2 = document.querySelector('#conttInst');
    let checkbox2 = document.querySelector('#cbox2');
    let iconInst = document.querySelector('#iconOC2');

    if (checkbox2.checked) {
        content2.style.display = 'block';
        iconInst.src="./assets/images/aberto.png"
    } else {
        content2.style.display = 'none';
        iconInst.src="./assets/images/fechado.png"
    }


    // Nutrição
    let content3 = document.querySelector('#conttNutr');
    let checkbox3 = document.querySelector('#cbox3');
    let iconNutr = document.querySelector('#iconOC3');

    if (checkbox3.checked) {
        content3.style.display = 'block';
        iconNutr.src="./assets/images/aberto.png"
    } else {
        content3.style.display = 'none';
        iconNutr.src="./assets/images/fechado.png"
    }


}