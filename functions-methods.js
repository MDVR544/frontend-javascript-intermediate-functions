// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
console.log("*------Opdracht 1------*");
function getEmailDomain(emailAdress){
    let index = emailAdress.indexOf("@");

    return console.log(emailAdress.substring(index + 1));
}
getEmailDomain("n.eeken@novi-education.nl");
getEmailDomain("t.mellink@novi.nl");
getEmailDomain("a.wiersma@outlook.com");


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
console.log("*------Opdracht 2------*");
function typeOfEmail(emailAdress){
    let index = emailAdress.indexOf("@");

    if (emailAdress.substring(index + 1) === "novi-education.nl") {
        return console.log("Student")
    }else if(emailAdress.substring(index + 1) === "novi.nl"){
        return console.log("Medewerker")
    } else{
        return console.log("Extern")
    }
}

typeOfEmail("n.eeken@novi-education.nl")
typeOfEmail("t.mellink@novi.nl")
typeOfEmail("novi.nlaapjesk@outlook.com")
typeOfEmail("a.wiersma@outlook.com")

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

console.log("*------Opdracht 3------*");
function checkEmailValidity(emailAdress) {
    let checkEmail = emailAdress.indexOf(",");

    if(checkEmail > -1) {
        return console.log(false);
    } else if(emailAdress.endsWith(".")) {
        return console.log(false);
    } else if (emailAdress.includes("@")) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

checkEmailValidity("n.eeken@novi.nl")
checkEmailValidity("tessmellink@novi.nl")
checkEmailValidity("n.eekenanovi.nl")
checkEmailValidity("n.eeken@novinl.")
checkEmailValidity("tessmellink@novi,nl")