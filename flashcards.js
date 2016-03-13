function FlashCards() {
  this.sampleSize = 20;
}

FlashCards.prototype.pullCards = function () {
  // for (var i = 0; i < this.sampleSize; i++) {
  //   Object.keys(ELEMENTS);
  // }
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
