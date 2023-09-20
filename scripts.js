/*
De gebruiker typt per artikel de naam, de aankoopprijs en de verkoopprijs.
Hij herhaalt dit tot hij 'stop' typt bij de naam.
Hij tikt daarna een woord.
Toon de namen van de artikels die in hun naam dit woord bevatten.

De gebruiker tikt twee getallen.

Als het tweede getal kleiner is dan het eerste getal toont je een foutmelding.
Anders toon je de namen en verkoopprijzen van de artikels waarvan de verkoopprijs ligt tussen
deze twee getallen.

Als een verkoopprijs gelijk is aan het eerste of het tweede getal neem je het
ook op in de lijst.
Toon de gemiddelde verkoopprijs van de artikels.
*/

"use strict";

let artikelNaam               = ''; 
let aankoopPrijs,verkoopPrijs = 0; 
let arrArtikelen              = [];
let inputWoord                = '';
let totalPrice                = 0;
let amountProducts            = 0;

while(artikelNaam != 'stop') {
    artikelNaam = prompt('wat is de artikel naam?');
    if(artikelNaam != 'stop'){
        aankoopPrijs = Number(prompt('hoeveel bedraagt de aankoopprijs?'));
        verkoopPrijs = Number(prompt('hoeveel bedraagt de verkoopprijs?'));

        arrArtikelen.push({
            'artikelNaam': artikelNaam,
            'aankoopPrijs':aankoopPrijs,
            'verkoopPrijs':verkoopPrijs
        })
    }
}

inputWoord = prompt("Geef een woord in.");
showMatchedWords(arrArtikelen);

let number1 = Number(prompt('geef een getal in.'));
let number2 = Number(prompt('geef een tweede getal in.'));

(number1 > number2)? alert('dit is fout'): showMatchedPriceProducts();

showAveragePrice();

function showMatchedWords(){

    const result = arrArtikelen.filter((word) => word.artikelNaam.includes(inputWoord));

    //CHAINEN is gewoon een andere functie oproepen in functie
    function isMatched(hetObject){
        if(hetObject.artikelNaam.includes(inputWoord)){
            console.log(`${hetObject.artikelNaam} heeft het woord ${inputWoord} in zijn artikelnaam`)
        }
    }

    arrArtikelen.filter(isMatched);
}

function showMatchedPriceProducts(){
    
    // const result2 = arrArtikelen.filter((artikel) => (artikel.verkoopPrijs >= number1 && artikel.verkoopPrijs <= number2));
    // result2.forEach(e => {
    //     console.log(`het artikel ${e.artikelNaam} met zijn verkoopprijs €${e.verkoopPrijs} zit tussen de getallen ${number1} en ${number2}`);
    // });

    //Probeer de filter() en corEach() method eens  rechtstreeks te chainen met elkaar, ipv. het tussenresultat op te slaan in resultaat2... 
    function geldigGetal(hetObject){
        if(hetObject.verkoopPrijs >= number1 && hetObject.verkoopPrijs <= number2){
            console.log(`het artikel ${hetObject.artikelNaam} met zijn verkoopprijs €${hetObject.verkoopPrijs} zit tussen de getallen ${number1} en ${number2}`);
        }
    }
    
    arrArtikelen.filter(geldigGetal);
}

function showAveragePrice(){
    //Maam nieuwe array met alleen prices
    const arrPrices = arrArtikelen.map(({ verkoopPrijs}) => (verkoopPrijs));

    //Tel aantal prices
    amountProducts = arrPrices.length;
    //bereken volledig prijs
    totalPrice = arrPrices.reduce((accumulator, currentValue) => accumulator + currentValue,0);

    console.log('De gemiddelde verkoopprijs van de '+amountProducts+ ' artikelen bedraagt: '+ (totalPrice/amountProducts));
}