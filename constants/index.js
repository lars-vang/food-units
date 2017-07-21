export const defaultFoodUnits = [
    {
        id: 1,
        title: 'Kød',
        text: 'Kød, fisk, æg og skaldyr',
        value: 0,
        unitsLeft: 5,
        warning: 4,
        maxUnits: 5,
        foodIcon: require('../assets/icon-meat.png'),
    },
    {
        id: 2,
        title: 'Mælkeprodukter',
        text: 'Mælk, A38 og Skyr',
        value: 0,
        unitsLeft: 2,
        warning: 1,
        maxUnits: 2,
        foodIcon: require('../assets/icon-milk.png'),
    },
    {
        id: 3,
        title: 'Cerealier',
        text: '...', value: 0,
        unitsLeft: 1.5,
        warning: 1.0,
        maxUnits: 1.5,
        foodIcon: require('../assets/icon-cereal.png'),
    },
    {
        id: 4,
        title: 'Brød og kornprodukter',
        text: 'Brød, ris og pasta',
        value: 0,
        unitsLeft: 7,
        warning: 5,
        maxUnits: 7,
        foodIcon: require('../assets/icon-bread.png'),
    },
    {
        id: 5,
        title: 'Grøntsager',
        text: 'Asparges, squash og peberfrugt',
        value: 0,
        unitsLeft: 4,
        warning: 3,
        maxUnits: 4,
        foodIcon: require('../assets/icon-vegeable.png'),
    },
    {
        id: 6,
        title: 'Frugt og bær',
        text: 'Banan, æble og jordbær',
        value: 0,
        unitsLeft: 3,
        warning: 2,
        maxUnits: 3,
        foodIcon: require('../assets/icon-fruit.png'),
    },
    {
        id: 7,
        title: 'Nødder og fede frugter',
        text: 'Nødder og avocado',
        value: 0,
        unitsLeft: 1,
        warning: 0.5,
        maxUnits: 1,
        foodIcon: require('../assets/icon-nuts.png'),
    },
    {
        id: 8,
        title: 'Fedt',
        text: 'Smør og olie',
        value: 0,
        unitsLeft: 6,
        warning: 5,
        maxUnits: 6,
        foodIcon: require('../assets/icon-fat.png'),
    },
    {
        id: 9,
        title: 'Diverse (sukker)',
        text: 'Sukker',
        value: 0,
        unitsLeft: 3,
        warning: 2,
        maxUnits: 3,
        foodIcon: require('../assets/icon-sugar.png'),
    },
];

export const Labels = {
    UnitsLeft: 'Enheder tilbage',
    ResetButton: 'Reset alle madenheder',
    ResetMsgTitle: 'Reset alle enheder',
    ResetMsgText: 'Er du sikker på at du vil slette alle dine enheder',
    ResetMsgAccept: 'Ja tak',
    ResetMsgDecline: 'Nej tak'
};

export const dropDownUnits = [];
for (i = 0; i < 50; i++) {
    if (i != 0) {
        dropDownUnits.push(i);
    }
    dropDownUnits.push(i + 0.25);
    dropDownUnits.push(i + 0.5)
    dropDownUnits.push(i + 0.75)
}
