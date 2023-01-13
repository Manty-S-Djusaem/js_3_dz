var number = 0;
do{
    var num = Number(prompt('Введите число меньше 0: '))
    if(num >= 0){
        var fullnumber = number += num;
    }
}while(num >= 0);
console.log('Общая Сумма Положительных Чисел: ', fullnumber)