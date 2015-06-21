/**
 * Created by luiscachi on 6/18/2015.
 */

var initRange = 20;
var endRage = 50;

var quantyN = 10;

/**
 * recive two number and return a first number capicua
 * @param initRange
 * @param endRage
 * @returns {number capicua}
 */
var getFirstCapicua = function(initRange , endRage )
{
    var res;
    for(var i = initRange; i< endRage ; i++)
    {
        if(iscapicua(i))
        {
            res = i;
            return res;
        }
    }

};
/**
 * return true if the number is capicua
 * or false is the number no is capicua
 * @param num
 */
var iscapicua = function(num)
{
    return num == Number.parseInt(num.toString().split('').reverse().join(''));
};


var isEvenNumber= function (n) {
    return n%2 == 0;
};
/**
 * esta funccion deve de debover numeros impares
 * @param qnumbers
 * @returns {Array}
 */
var numerodd = function(qnumbers)
{
    var res = [];
    for(var i= 1 ; i<qnumbers*2 ;i++ )

    {
        if( isEvenNumber(i))
        continue;

        res.push(i);
    }
    return res;
};
/**
 * falta implementar esta funcion deve de devolver numeros pares
 * @param quantyN
 */
var numbereven = function(quantyN){};

var numberFactorial = function(num)
{
    var res = 1;

    for(var i=num ; i>0 ; i--)
    {
        res *= i;
    }
    return res;
};

/**
console log q llama a las funciones
 */
console.log('the factorial of '+quantyN +' is '+ numberFactorial(quantyN));

console.log('los number odd is ' + numerodd(quantyN) +' the numer even is '+ numbereven(quantyN));

console.log('first capicua betwen' , initRange , 'and' , endRage , 'is' , getFirstCapicua(initRange , endRage));