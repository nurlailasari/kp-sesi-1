const halo2 = function() {
    console.log('halo 2');
}

const halo = function(salam) {
    console.log('halo');
    salam();
}

halo(halo2);