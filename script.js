const realms = {

    lorthamir: {
        name: "Lorthen Empire",
        capital: "Solanor",
        ruler: "Emperor Gweniv II, The Black Sun"
    },

    hylaren: {
        name: "Hylaren Crownlands",
        capital: "Rhoam",
        ruler: "King Borhan The Hammer"
    },

    naboran: {
        name: "Naboran Sultanate",
        capital: "An Nabor",
        ruler: "Sultan Nabor VI, En Gazi"
    },

    nordahl: {
        name: "High Kingdom of Nordahl",        
        capital: "Hrafngard",
        ruler: "High King Ulfram Dragon-Ruler"
    },

    hisuya: {
        name: "Great Hisuya",
        capital: "Golden Seat",
        ruler: "Tian, Heaven's Mandate"
    },

    hatenor: {
        name: "Hatenor Shogunate",
        capital: "Eikyo",
        ruler: "Shogun Nomori"
    },

    vorthic: {
        name: "Kingdom of Vorthic",
        capital: "Velmira",
        ruler: "King Vladan III",
    },

    illycia: {
        name: "Illycian Commonwealth",
        capital: "Rosclair",
        ruler: "Queen Seraphine"
    },

    castelle: {
        name: "Kingdom of Castelle",
        capital: "Montport",
        ruler: "King Esteban"
    },

    ruhelin: {
        name: "Kingdom of Ruhelin",
        capital: "Westgate",
        ruler: "King Floris"
    },

    skaldrin: {
        name: "Skaldrin Isles",
        capital: "Skalvik",
        ruler: "Haraldr The Red"
    },

    svea: {
        name: "Kingdom of Svea",
        capital: "Aldvik",
        ruler: "King Eirikur V"
    },

    isvalen: {
        name: "Isvalen Imperium",
        capital: "Eisspire",
        ruler: "Empress Valeria"
    },

    nareth: {
        name: "Kingdom of Nareth",
        capital: "Caermor",
        ruler: "King Odran"
    },

    valzar: {
        name: "Valzar Sultanate",
        capital: "Tal Khar",
        ruler: "Vizir Malik Varos"
    },

    farondel: {
        name: "Kingdom of Farondel",
        capital: "Silvergarden",
        ruler: "King Jian"
    },

    tavaryn: {
        name: "Kingdom of Tavaryn",
        capital: "Frostrest",
        ruler: "King Ryenar"
    },

    falken: {
        name: "Free Kingdom of Falken",
        capital: "Wolfsbay",
        ruler: "King Freifn"
    },

    ilyrion: {
        name: "Kingdom of Ilyrion",
        capital: "Erthyll",
        ruler: "King Aursif"
    },

    osmana: {
        name: "Osmanan State",
        capital: "Omaris",
        ruler: "Ardunn"
    },
    
    cinderock: {
        name: "Cinderock",
        capital: "Ironharbour",
        ruler: "Commander Embrun"
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
        ruler: "Grand Vizir Saleddan"
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
