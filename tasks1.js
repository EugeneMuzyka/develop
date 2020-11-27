let arrMusic = ['Джаз', 'Блюз, '];
arrMusic[arrMusic.length] = ' Рок-н-ролл';
arrMusic.splice(-2, 1, 'Классика, ');
let removed = arrMusic.splice(0, 1);
alert(removed);
arrMusic.unshift('Рэп', 'Рэгги');
console.log(arrMusic);