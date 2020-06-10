//1
const n = 2;
const m1 = Number.parseInt(window.prompt('Įveskite pirmo draugo bagažo svorį kg'));
const m2 = Number.parseInt(window.prompt('Įveskite antro draugo bagažo svorį kg'));
const b = Number.parseInt(window.prompt('Įveskite bagažo mokestį už 1 kg'));

function bagazas(m1, m2) {
    return m1 + m2;
}

function suma(m1, m2, b) {
    return bagazas(m1, m2) * b;
}

console.log('Bagažo svoris: ' + bagazas(m1, m2));
console.log('Suma už bagažą: ' + suma(m1, m2, b));

//2
function vidutinisBagazas(m1, m2, n) {
    return bagazas(m1, m2) / n;
}

console.log('Vidutinis vieno stovyklautojo bagažo svoris: ' + vidutinisBagazas(m1, m2, n));

//3
let k = 0;
if (m1 <= 10) 
k++;
if (m2 <= 10)
k++;
console.log('Stovyklautojų, kurių bagažo masė ne didesnė už 10 kg: ' + k);

//4
let kb = 0;
let kiek = 0;
const draugai = Number.parseInt(window.prompt('Įveskite draugų skaičių'));
const kaina = Number.parseInt(window.prompt('Įveskite 1kg bagažo mokestį'));
for (let i = 1; i <= draugai; i++) {
    let m = Number.parseInt(window.prompt(`Įveskite ${i} draugo bagažo masę`));
    kb += m;
    if (m <= 10) kiek++;
}

function suma2(kb, kaina) {
    return kb * kaina;
}

function vidutinisBagazas2(kb, draugai) {
    return kb / draugai;
}

console.log('Suma už bagažą: ' + suma2(kb, kaina));
console.log('Vidutinis bagažo svoris: ' + vidutinisBagazas2(kb, draugai));
console.log('Stovyklautojų, kurių bagažo masė ne didesnė už 10 kg: ' + kiek);

//5

const programuotoju = Number.parseInt(window.prompt('Įveskite programuotojų skaičių'));
function sum(a, b) {
    return a = a + b;
}
let viso = 0;
for (let i = 1; i <= programuotoju; i++) {
    let u = Number.parseInt(window.prompt(`Kiek uždavinių išsprendė ${i} programuotojas?`));
    viso = sum(viso, u);
}
console.log(`Viso išspręsta ${viso} uždavinių`);

//6
const pacientu = Number.parseInt(window.prompt('Įveskite pacientų skaičių'));
let visoMinuciu = 0;
let ilgiau = 0;
let minuciu = 0;
function trukme(a, b) {
    return a = a + b;
}
function avg(c, d) {
    return c / d;
}

for (i = 1; i <= pacientu; i++) {
    minuciu = Number.parseInt(window.prompt(`Kiek minučių užtruko ${i} pacientas?`));
    if (minuciu > 20) ilgiau++
    visoMinuciu = trukme(visoMinuciu, minuciu);  
}

console.log('Vidutiniškai užtruko minučių: ' + (Math.round(avg(visoMinuciu, pacientu)*10))/10);
console.log('Pacientai, užtrukę ilgiau nei 20 minučių: ' + ilgiau);

//7
const autobusai = Number.parseInt(window.prompt('Kiek autobusų per dieną vyksta iš Vilniaus į Panevėžį?'));
let val = 0;
let min = 0;
let keleiviai = 0;
let kv = 0;
let maziau = 0;
let visoMinuciu2 = 0;

function laikas(a, b) {
    return b = a * 60 + b;
}

function visoKeleiviu(n, p) {
    return n = n + p;
}

for (i = 1; i <= autobusai; i++) {
    val = Number.parseInt(window.prompt(`Kiek valandų kelionėje sugaišta ${i} autobusas?`));
    min = Number.parseInt(window.prompt(`Kiek minučių kelionėje sugaišta ${i} autobusas?`));
    minuciu2 = laikas(val, min);
    visoMinuciu2 = visoKeleiviu(visoMinuciu2, minuciu2);
    keleiviai = Number.parseInt(window.prompt(`Kiek keleivių perveža ${i} autobusas?`));
    kv = visoKeleiviu(kv, keleiviai);
    if (keleiviai < 10) maziau++;
}

function vidutiniskai(x, y) {
    return x / y;
}

console.log('Viso keleivių: ' + kv);
console.log('Vienas autobusas kelionėje vidutiniškai sugaišta minučių: ' + Math.round(vidutiniskai(visoMinuciu2, autobusai)));
console.log('Autobusuose važiavo mažiau nei 10 keleivių: ' + maziau);

//8
let b = Number.parseInt(window.prompt('Kiek braškių prinoko pirmąją dieną?'));
const d = Number.parseInt(window.prompt('Keliomis braškėmis kiekvieną dieną prinoksta daugiau nei prieš tai buvusią?'));
const n = Number.parseInt(window.prompt('Įveskite dienų skaičių'));
let k = b;

function braskes(a, b) {
    return a = a + b;
}

for (i = 2; i <= n; i++) {
    b = braskes(b, d);
    k = braskes(k, b);
}

console.log(`Per ${n} dienas/-ų prinoko ${k} braškės/-ių.`);

//9
const pradzia = Number.parseInt(window.prompt('Įveskite intervalo pradžią'));
const pabaiga = Number.parseInt(window.prompt('Įveskite intervalo pabaigą'));
let ledai = 0;

function kiekDaliuIs6(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 6 === 0) ledai++;
    };
    return ledai;
};

console.log(`Reikia pagaminti ${kiekDaliuIs6(pradzia, pabaiga)} porcijas/-ų ledų.`);

//10
let skyriai = Number.parseInt(window.prompt('Kiek knygoje yra skyrių?'));
let perskaito = 1;
let dienos = 0;

function perKiekDienu(a, b, c) {
    while (a > 0) {
        c++;
        a = a - b;
        b++;
    }
    return c;
}

const kiekDienu = perKiekDienu(skyriai, perskaito, dienos);

function vidutiniskaiPerskaite(d, e) {
    return d / e;
}

const vid = vidutiniskaiPerskaite(skyriai, kiekDienu);

console.log(`Tadas visą knygą perskaitys per ${kiekDienu} dienas (-ų).`);
console.log(`Tadas vidutiniškai per dieną perskaitė ${Math.round(vid * 100) / 100} skyrius (-ų).`);