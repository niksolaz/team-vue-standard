/**
 * Eseguire il seguente test all' interno dello stesso file.
 *  
 */

//# 1 - strutturare una variabile json di nome auto con eventuali 3 key < anno, modello, colore > e valori vuoti. 


//# 2 - strutturare un oggetto array di nome mezziDiTrasporto con tre elementi e ogni elemento abbia  key < _id, modello, colore, anno >


//# 3 - strutturare una function che ritorni il valore del modello utilizzando l'oggetto della domanda 2

//# 4  - indicare in ordine quali sono i lifecycle di Vue

//# 5 - mapActions va inserito nelle computed o nei methods?


//# 6 - mapState va inserito nelle computed o nei methods?


//# 7 - mapGetters va inserito nelle computed o nei methods?


//# 8 - mapMutations va inserito nelle computed o nei methods?


//# 9 le mutations sono asyncrone ?


//# 10 indicare almeno 3 direttive per i template

var testArr = ['a', 'b', 'c', 'd', 'e', 'f'];
var testArr2 = [{
        'a': 123,
        'b': 'Hello',
        'c': {
            'elem1': 76,
            'elem2': 'Pippo'
        }
    },
    {
        'a': 222,
        'b': 'Hola',
        'c': {
            'elem1': 33,
            'elem2': 'Lino'
        }
    },
    {
        'a': 456,
        'b': 'Ciao',
        'c': {
            'elem1': 3,
            'elem2': 'Pumba'
        }
    }
];

// && oppure AND
/**
 *  0  and 0 = 0  false
 *  1  and 0 = 0  false
 *  0  and 1 = 0  false
 *  1  and 1 = 1  true 
 */

// || oppure OR
/**
 *  0  or 0 = 0  false
 *  1  or 0 = 1  true
 *  0  or 1 = 1  true
 *  1  or 1 = 1  true 
 */
const problema200 = {
    xArray: {
        sub: (arr, val, elem) => {
            try {
                if (arr === undefined) console.log(`Error arr is ${arr}`);
                if (arr.length > 0) {
                    if (val === undefined && elem === undefined) {
                        arr.map(item => console.log(item));
                    } else {
                        if (elem === undefined || elem === null) {
                            arr.map(item =>console.log(item[val]));
                        } else {
                            arr.map(item => console.log(item[val][elem]));
                        }
                    }
                }
            } catch (e) {
                console.log('Error:', e);
            }
        }
    },
    sottoProblema2: {
        sub1: () => {
            return 'sub1';
        },
        sub2: () => {
            return 'sub2';
        }
    },
    sottoProblema3: {
        sub1: () => {
            return 'sub1';
        },
        sub2: () => {
            return 'sub2';
        },
        sub3: () => {
            return 'sub3';
        },
        sub4: () => {
            return 'sub4';
        }
    }
}
