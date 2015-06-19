/**
 * Created by luiscachi on 6/18/2015.
 */

var initRange = 20;
var endRage = 50;

console.log('first capicua betwen' , initRange , 'and' , endRage , 'is' , getFirstCApicua(initRange , endRage));

/**
 * recive two number and return a first number capicua
 * @param initRange
 * @param endRage
 * @returns {number capicua}
 */
var getFirstCapicua = function(initRange , endRage )
{
    var res
    for(var i = initRange; i< endRage ; i++)
    {
        if(iscapicua(i))
        {
            res = i;
        }
    }
    return res;
}
/**
 * return true if the number is capicua
 * or false is the number no is capicua
 * @param num
 */
var iscapicua = function(num)
{
    var numres
    for(var i = 0 ; i<num.length(); i++ )
    {
        numres = num %10;
    }
}