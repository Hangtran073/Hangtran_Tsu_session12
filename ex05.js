//bai 1;
function printFibonacci(n){
   let = 0, b = 1;
   console.log(a);
   console.log(b);
   for (let i = 2; i < n; i++){
    let nextNumber = a + b;
    console.log(nextNumber);
    a = b;
    b = nextNumber;
   }
}
printFibonacci(n);

//bài 2;

function factorial(n){
    if (n < 0)
        return "Vui lòng nhập số nguyên dương!";
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(10));

//bài 2;
//1. tam giác vuông dưới bên trái
function triangleBottomLeft(n){
    for(let i = 1; i <= n; i++){
        console.log("*".repeat(i));
    }
}
printFibonacci(n);

//2. tam giác vuông góc trêm bên trái


function triangleTopLeft(n){
    for(let i = n; i <= 1; i--){
        console.log("*".repeat(i));
    }
}
triangleTopLeft(n);

//3 tam giác vuông góc dưới bên phảiphải

function triangleBottomRight(n){
    for(let i = 1; i <= n; i++){
        console.log("".repeat(n-i) + "*".repeat(i));
    }
}
 triangleBottomRight(n);

 //4 tam giác vuông góc bên trên phải

function triangleTopRight(n){
    for(let i = n; i <= 1; i--){
        console.log("*".repeat(n - i) + "*".repeat(i));
    }
}
triangleTopRight(n);


// bài 4
function hinhChunhatRong( width, height){
    for( let i = 0; i < height; i++){
        if (i === 0 || i === height -1){
            console.log("*".repeat(width));
        }else{
            console.log("*".repeat(width - 2) + "*");
        }
    }
}
hinhChunhatRong(10,5);


//bài 5;

//A = P * (1+r)**n;

function tinhLaiNganHang(principal, months, interestRate){
    let rate = interestRate/100;
    let finalAmount = principal* Math.pow((1 + rate), months);
    console.log("Số tiền sau ${months} tháng là: ${finalAmount.toFixed(2)} VND");

}
tinhLaiNganHang(10000000, 12, 5);
