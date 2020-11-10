function getPilihanKomputer(){
    // menangkap pilihan computer
    // membangkitkan bilangan random
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(computer, player){
    // menentukan rules
    if( player == computer ) return 'SERI!';
    if( player == 'gajah' ) return ( computer == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( computer == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( computer == 'orang' ) ? 'KALAH' : 'MENANG!';
}