const realms = {

    lorthamir: {
        name: "Lorthamir",
        capital: "Solanor",
        ruler: "Gweniv II"
    },

    hylaren: {
        name: "Hylaren Crownlands",
        capital: "Rhoam",
        ruler: "Borhan"
    },

    naboran: {
        name: "Naboran Sultanate",
        capital: "An Nabor",
        ruler: "Nabor VI"
    },

    nordahl: {
        name: "Nordahl",        
        capital: "Hrafngard",
        ruler: "Ulfram Dragon-Ruler"
    },

    hisuya: {
        name: "Great Hisuya",
        capital: "Golden Seat",
        ruler: "Tian"
    },

    hatenor: {
        name: "Hatenor Shogunate",
        capital: "Eikyo",
        ruler: "Nomori"
    },

    vorthic: {
        name: "Vorthic",
        capital: "Velmira",
        ruler: "Vladan III",
    },

    illycia: {
        name: "Illycia",
        capital: "Rosclair",
        ruler: "Seraphine"
    },

    castelle: {
        name: "Castelle",
        capital: "Montport",
        ruler: "Esteban"
    },

    ruhelin: {
        name: "Ruhelin",
        capital: "Westgate",
        ruler: "Floris"
    },

    skaldrin: {
        name: "Skaldrin Isles",
        capital: "Skalvik",
        ruler: "Haraldr The Red"
    },

    svea: {
        name: "Svea",
        capital: "Aldvik",
        ruler: "Eirikur V"
    },

    isvalen: {
        name: "Isvalen",
        capital: "Eisspire",
        ruler: "Valeria"
    },

    nareth: {
        name: "Nareth",
        capital: "Caermor",
        ruler: "Odran"
    },

    valzar: {
        name: "Valzar",
        capital: "Tal Khar",
        ruler: "Malik Varos"
    },

    farondel: {
        name: "Farondel",
        capital: "Silvergarden",
        ruler: "Jian"
    },

    tavaryn: {
        name: "Tavaryn",
        capital: "Frostrest",
        ruler: "Ryenar"
    },

    falken: {
        name: "Falken",
        capital: "Wolfsbay",
        ruler: "Freifn"
    },

    ilyrion: {
        name: "Ilyrion",
        capital: "Erthyll",
        ruler: "Aursif"
    },

    osmana: {
        name: "Osmana",
        capital: "Omaris",
        ruler: "Ardunn"
    },
    
    cinderock: {
        name: "Cinderock",
        capital: "Ironharbour",
        ruler: "Embrun"
    },

    yuria: {
        name: "Yuria Isles",
        capital: "Whitereach",
        ruler: "Cifry"
    },

    iriphit: {
        name: "Iriphit",
        capital: "Caer Ith",
        ruler: "Council of Caelor"
    },

    okana: {
        name: "Okana",
        capital: "Minaijin",
        ruler: "Aki"
    },

    kovira: {
        name: "Kovira",
        capital: "Tejan",
        ruler: "Saleddan"
    },

};

function showRealm(id) {

    const realm = realms[id];

    document.getElementById("info-panel").innerHTML = `
        <h2>${realm.name}</h2>
        <p><strong>Ruler:</strong> ${realm.ruler}</p>
        <p><strong>Capital:</strong> ${realm.capital}</p>
    `;
}