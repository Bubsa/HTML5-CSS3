let priceofonePhone = 119.95;
let taxRate = 0.05;
let inputValue = 30;

let beforeTax = inputValue * priceofonePhone // so ova ja dobivash cenata pred danok

let taxBreak = beforeTax * taxRate // so ova go dobivash tax od vkupnata cena

let finalValue = beforeTax + taxBreak //ova e finalnata cena so danok
console.log ("The final price is" + finalValue)
