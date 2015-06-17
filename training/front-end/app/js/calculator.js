/**
 * Created by luiscachi on 6/12/2015.
 */

    console.log('input the number for operate');
var suma = 0;

// this is the funtion class
var Calculator;
Calculator = function () {

};
// this is the funtion that calculate
Calculator.prototype.eval = function()
{

    console.log('this is the sum of the parameters' );
    this.sum(arguments);
    console.log('this is the max of the parameters');
    this.max(arguments);
    console.log('this is the min of the parameters')
    this.min(arguments);
    console.log('this is the avg of the parameters')
    this.avg(arguments);
};
// this funtion recive the parametr if parameter is object  of 1 working that arguments of this funtion
Calculator.prototype.sum = function(arg)
{
    if(typeof arguments[0] == "object" )
        console.log( this.addsum(arg , 0) );
    else
        console.log( this.addsum(arguments , 0))
};

// this function recive the parameter if parameter is a object working with arguments recived
Calculator.prototype.max = function(arg)
{
    if(typeof arguments[0] == "object" )
        console.log( this.calcmax(arg,0 , 0) );
    else
        console.log( this.calcmax(arguments,0 , 0) );

};
// this function recive the parameter if parameter is a object working with arguments recived
Calculator.prototype.min = function(arg)
{
    if(typeof arguments[0] == "object" ){
    console.log(this.calcmin(arg, 0 , arg[0]));
    }else{
        console.log(this.calcmin(arguments, 0 , arguments[0]));
    }
};

//this function recive the parameter if parameter is a object working with arguments recived
Calculator.prototype.avg = function(arg)
{
    if(typeof arguments[0] == "object" ){
        console.log(this.calcavg(arg));
    }else{
        console.log(this.calcavg(arguments));
    }
}

// this funtion sum with recursive
Calculator.prototype.addsum = function(ar , pos){
     var res = 0;
    if (ar.length > pos)
    {
         return res = ar[pos] +  this.addsum(ar , pos+1);
    }else{
        return res;
    }
};


// get max of the paramaters (arguments)
Calculator.prototype.calcmax = function(arg , pos , max){
    var res = max;
    if(arg.length > pos) {
        if (res < arg[pos]) {
            res = this.calcmax(arg ,pos+1 , arg[pos]);
        }else{
            res = this.calcmax(arg , pos+1 , max);
        }
    }
    return res ;
};
// get min of the parameters (arguments)
Calculator.prototype.calcmin = function(arg , pos , min){
    var res = min;
    if(arg.length > pos) {
        if (res > arg[pos]) {
            res = this.calcmin(arg ,pos+1 , arg[pos]);
        }else{
            res = this.calcmin(arg , pos+1 , res);
        }
    }
    return res ;
};
// get average of the parametrs (arguments)
Calculator.prototype.calcavg = function(arg)
{
    var num = this.addsum(arg , 0);
    return num / arg.length;

};







var countWord = function(word){
    var res = word.split(' ');
    return res.length;
};

console.log('the paragraf has' , countWord('hello word') , 'words' );




var printnowDateInfo = function()
{
    var date = new Date();

    console.log('To day is ', date.getUTCDay() );
    console.log('current time ', date.getHours() , ':' , date.getMinutes() , ' :' , date.getSeconds());

};

console.log( printnowDateInfo() );
