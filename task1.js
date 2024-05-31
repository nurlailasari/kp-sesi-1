//Filter
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const angkaGenap = angka.filter((value, index) => {
//     return value%2 == 0 && index < 10;
// })
// console.log (`bilangan genap: ${angkaGenap}`)

// const angkaGanjil = angka.filter((value, index) => {
//     return value%2 >= 1 && index < 10;
// })
// console.log (`bilangan ganjil: ${angkaGanjil}`)



// Use ForEach
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// angka.forEach((value, index) => {
//     if (index%2==0) { // with condition
//         console.log (`${index} adalah nilai genap`);
//     } else {
//         console.log (`${index} adalah nilai ganjil`);
//     }
// });



//Use For Loop

for (angka=1; angka<=10; angka++) {
    if (angka%2 == 0) {
        console.log(`${angka} adalah bilangan genap`);
    } else {
        console.log(`${angka} adalah bilangan ganjil`);
    }
}
