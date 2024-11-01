

let formaggi = ["mozzarella", "fontina", "scamorza", "bufala", "taleggio", "pecorino", "brie"];

let verdure = ["peperoni", "pomodori", "olive", "cipolla", "radicchio", "pomodori", "zucchine", "asparagi"];

let proteine = ["prosciutto", "tonno", "salsiccia", "pancetta", "bresaola", "calamari", "lardo", "spack"];

let impasti = ["normale", "integrale", "kamut", "ai cereali", "al carbone"];

let aggiunte = ["funghi", "salame", "scaglie di grana", "cocaina", "oransoda"];


function selezionaIngrediente(arrayIngredienti){
    let ingredienteScelto = arrayIngredienti[Math.floor(Math.random() * arrayIngredienti.length)]
    return ingredienteScelto;
}

function generaIngrediente(){
    let formaggioRandom =  selezionaIngrediente(formaggi);
    let verduraRandom =  selezionaIngrediente(verdure);
    let proteinaRandom =  selezionaIngrediente(proteine);
    let ingrediente = document.getElementById("ingrediente");
    ingrediente.innerHTML = `${formaggioRandom}, ${verduraRandom} e ${proteinaRandom}`;
}

function generaAggiunta(){
    let aggiuntaRandom = selezionaIngrediente(aggiunte);
    let aggiunta = document.getElementById("aggiunta");
    aggiunta.innerHTML = aggiuntaRandom;
}


function generaImpasto(){
    let impastoRandom = selezionaIngrediente(impasti);
    let impasto = document.getElementById("impasto");
    impasto.innerHTML = impastoRandom;
}

function generaTutto(){
    generaIngrediente();
    generaAggiunta();
    generaImpasto();
}