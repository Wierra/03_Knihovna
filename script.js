const kniha1 = {
    nazev: "Konec prokrastinace", 
    autor: "Petr Ludwig",
    cena: 350,
    popis: "Jak přestat odkládat a začít žít každý den naplno.",
    jazyk: "čeština",
    pocetStran: 250,
    vydani: {
        rok: 2019,
        mesic: 12,
    },
    vazba: "tištěná",
    rozmer:{
        sirka: 120,
        vyska: 127,
        rozJednotka: "mm",
    },
    hmotnost: 65,
    hmJednotka: "g",
}

const kniha2 = {
    nazev: "Jak zkrotit svou vnitřní kritičku",
    autor: "Melisa Ambrosini",
    cena: 400,
    popis: "Ztiš tu svou potvoru v sobě, otevři se bohatství a zační zářit zdraví a láskou.",
    jazyk: "čeština",
    pocetStran: 280,
    vydani: {
        rok: 2024,
        mesic: 9,
    },
    vazba: "paperback",
    rozmer:{
        sirka: 144,
        vyska: 207,
        rozJednotka: "mm",
    },
    hmotnost: 392,
    hmJednotka: "g",
}

document.body.innerHTML += "<p>" + kniha2.nazev + "</p>"


//řešení Michal
const book = {
    title: 'Lord of the Rings',
    author: {
      name: 'John Ronald Reuel',
      surename: 'Tolkien',
      age: 81,
    },
    numberOfPages: 2057,
    movie: {
      year: 2000,
      director: {
        name: 'Peter',
        surname: 'Jackson',
      },
      actors: {
        actor1: {
          name: 'Orlando',
          surname: 'Bloom',
          characterName: 'Legolas',
        },
        actor2: {
          name: 'Elijah',
          surname: 'Wood',
          characterName: 'Frodo',
        },
        actor3: {
          name: 'Viggo',
          surname: 'Mortensen',
          characterName: 'Aragorn',
        },
      },
    },
  };