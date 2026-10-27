const realms = {

    lorthamir: {
        name: "Lorthen Empire",
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
        name: "High Kingdom of Nordahl",        
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
        name: "Kingdom of Vorthic",
        capital: "Velmira",
        ruler: "Vladan III",
    },

    illycia: {
        name: "Illycian Commonwealth",
        capital: "Rosclair",
        ruler: "Seraphine"
    },

    castelle: {
        name: "Kingdom of Castelle",
        capital: "Montport",
        ruler: "Esteban"
    },

    ruhelin: {
        name: "Kingdom of Ruhelin",
        capital: "Westgate",
        ruler: "Floris"
    },

    skaldrin: {
        name: "Skaldrin Isles",
        capital: "Skalvik",
        ruler: "Haraldr The Red"
    },

    svea: {
        name: "Kingdom of Svea",
        capital: "Aldvik",
        ruler: "Eirikur V"
    },

    isvalen: {
        name: "Isvalen Imperium",
        capital: "Eisspire",
        ruler: "Valeria"
    },

    nareth: {
        name: "Kingdom of Nareth",
        capital: "Caermor",
        ruler: "Odran"
    },

    valzar: {
        name: "Valzar Sultanate",
        capital: "Tal Khar",
        ruler: "Malik Varos"
    },

    farondel: {
        name: "Kingdom of Farondel",
        capital: "Silvergarden",
        ruler: "Jian"
    },

    tavaryn: {
        name: "Kingdom of Tavaryn",
        capital: "Frostrest",
        ruler: "Ryenar"
    },

    falken: {
        name: "Free Kingdom of Falken",
        capital: "Wolfsbay",
        ruler: "Freifn"
    },

    ilyrion: {
        name: "Kingdom of Ilyrion",
        capital: "Erthyll",
        ruler: "Aursif"
    },

    osmana: {
        name: "Osmanan State",
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
        name: "Sublime Realm of Kovira",
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
