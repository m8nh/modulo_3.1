var one
    = [ "", "one ", "two ", "three ",
        "four ", "five ", "six ",
        "seven ", "eight ", "nine ", "ten ",
        "eleven ", "twelve ", "thirteen ",
        "fourteen ", "fifteen ", "sixteen ",
        "seventeen ", "eighteen ", "nineteen " ];
 
var ten
    = ["", "", "twenty ",
        "thirty ", "forty ",
        "fifty ", "sixty ",
        "seventy ", "eighty ",
        "ninety " ];

function numToWords(n, s)
{
    var str = "";   
    if (n > 19)
        str += ten[Math.floor(n / 10)] + one[n % 10];
    else
        str += one[n];
    if (n)
        str += s;
 
    return str;
}