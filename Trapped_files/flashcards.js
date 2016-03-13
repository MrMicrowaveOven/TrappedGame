function FlashCards() {
  this.sampleSize = 20;
}

FlashCards.prototype.pullCards = function () {
  // for (var i = 0; i < this.sampleSize; i++) {
  //   Object.keys(ELEMENTS);
  // }
};

//This function will make FlashCards for the game.
//Size is how many cards we want (usually 20).
//Deck is the object we're pulling cards from.
function makeFlashCards(size) {
  var deck = gameType;
  var cards = {};
  var keys = Object.keys(deck);
  var thiskey;
  var rando;

  for (var i = 0; Object.keys(cards).length < size; i++) {
    rando = Math.floor(Math.random() * keys.length);
    thiskey = keys[rando];
    cards[thiskey] = deck[thiskey];
  }
  return cards;
}


var ROMAN = {I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9,
  X: 10, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15, XVI: 16, XVII: 17,
  XVIII: 18, XIX: 19, XX: 20, XXI: 21, XXII: 22, XXIII: 23, XXIV: 24, XXV: 25,
  XXVI: 26, XXVII: 27, XXVIII: 28, XXIX: 29, XXX: 30, XXXI: 31, XXXII: 32,
  XXXIII: 33, XXXIV: 34, XXXV: 35, XXXVI: 36, XXXVII: 37, XXXVIII: 38,
  XXXIX: 39, XL: 40, XLI: 41, XLII: 42, XLIII: 43, XLIV: 44, XLV: 45, XLVI: 46,
  XLVII: 47, XLVIII: 48, XLIX: 49, L: 50, LI: 51, LII: 52, LIII: 53, LIV: 54,
  LV: 55, LVI: 56, LVII: 57, LVIII: 58, LIX: 59, LX: 60, LXI: 61, LXII: 62,
  LXIII: 63, LXIV: 64, LXV: 65, LXVI: 66, LXVII: 67, LXVIII: 68, LXIX: 69,
  LXX: 70, LXXI: 71, LXXII: 72, LXXIII: 73, LXXIV: 74, LXXV: 75, LXXVI: 76,
  LXXVII: 77, LXXVIII: 78, LXXIX: 79, LXXX: 80, LXXXI: 81, LXXXII: 82,
  LXXXIII: 83, LXXXIV: 84, LXXXV: 85, LXXXVI: 86, LXXXVII: 87, LXXXVIII: 88,
  LXXXIX: 89, XC: 90, XCI: 91, XCII: 92, XCIII: 93, XCIV: 94, XCV: 95, XCVI: 96,
  XCVII: 97, XCVIII: 98, XCIX: 99, C: 100
};

var ADDITION = {num1: [0,1,2,3,4,5,6,7,8,9,10], num2: [0,1,2,3,4,5,6,7,8,9,10]};

var GREEK = {
  // Alpha: "\u0391",
  // Beta: "\u0392",
  // Gamma: "\u0393",
  // Delta: "\u0394",
  // Epsilon: "\u0395",
  // Zeta: "\u0396",
  // Eta: "\u0397",
  // Theta: "\u0398",
  // Iota: "\u0399",
  // Kappa: "\u039A",
  // Lambda: "\u039B",
  // Mu: "\u039C",
  // Nu: "\u039D",
  // Xi: "\u039E",
  // Omicron: "\u039F",
  // Pi: "\u03A0",
  // Rho: "\u03A1",
  // Sigma: "\u03A3",
  // Tau: "\u03A4",
  // Upsilon: "\u03A5",
  // Phi: "\u03A6",
  // Chi: "\u03A7",
  // Psi: "\u03A8",
  // Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9"
};

//Just the first 20 elements
var ELEMENTS = { Hydrogen: "H", Helium: "He", Lithium: "Li", Beryllium: "Be",
Boron: "B", Carbon: "C", Nitrogen: "N", Oxygen: "O", Fluorine: "F",
Neon: "Ne", Sodium: "Na", Magnesium: "Mg", Aluminum: "Al", Silicon: "Si",
Phosphorus: "P", Sulfur: "S", Chlorine: "Cl", Argon: "Ar", Potassium: "K",
Calcium: "Ca"};


var ALLELEMENTS = { Hydrogen: "H", Helium: "He", Lithium: "Li", Beryllium: "Be",
  Boron: "B", Carbon: "C", Nitrogen: "N", Oxygen: "O", Fluorine: "F",
  Neon: "Ne", Sodium: "Na", Magnesium: "Mg", Aluminum: "Al", Silicon: "Si",
  Phosphorus: "P", Sulfur: "S", Chlorine: "Cl", Argon: "Ar", Potassium: "K",
  Calcium: "Ca", Scandium: "Sc", Titanium: "Ti", Vanadium: "V", Chromium: "Cr",
  Manganese: "Mn", Iron: "Fe", Cobalt: "Co", Nickel: "Ni", Copper: "Cu",
  Zinc: "Zn", Gallium: "Ga", Germanium: "Ge", Arsenic: "As", Selenium: "Se",
  Bromine: "Br", Krypton: "Kr", Rubidium: "Rb", Strontium: "Sr", Yttrium: "Y",
  Zirconium: "Zr", Niobium: "Nb", Molybdenum: "Mo", Technetium: "Tc",
  Ruthenium: "Ru", Rhodium: "Rh", Palladium: "Pd", Silver: "Ag", Cadmium: "Cd",
  Indium: "In", Tin: "Sn", Antimony: "Sb", Tellurium: "Te", Iodine: "I",
  Xenon: "Xe", Cesium: "Cs", Barium: "Ba", Lanthanum: "La", Cerium: "Ce",
  Praseodymium: "Pr", Neodymium: "Nd", Promethium: "Pm", Samarium: "Sm",
  Europium: "Eu", Gadolinium: "Gd", Terbium: "Tb", Dysprosium: "Dy",
  Holmium: "Ho", Erbium: "Er", Thulium: "Tm", Ytterbium: "Yb", Lutetium: "Lu",
  Hafnium: "Hf", Tantalum: "Ta", Tungsten: "W", Rhenium: "Re", Osmium: "Os",
  Iridium: "Ir", Platinum: "Pt", Gold: "Au", Mercury: "Hg", Thallium: "Tl",
  Lead: "Pb", Bismuth: "Bi", Polonium: "Po", Astatine: "At", Radon: "Rn",
  Francium: "Fr", Radium: "Ra", Actinium: "Ac", Thorium: "Th",
  Protactinium: "Pa", Uranium: "U", Neptunium: "Np", Plutonium: "Pu",
  Americium: "Am", Curium: "Cm", Berkelium: "Bk", Californium: "Cf",
  Einsteinium: "Es", Fermium: "Fm", Mendelevium: "Md", Nobelium: "No",
  Lawrencium: "Lr", Rutherfordium: "Rf", Dubnium: "Db", Seaborgium: "Sg",
  Bohrium: "Bh", Hassium: "Hs", Meitnerium: "Mt"};
