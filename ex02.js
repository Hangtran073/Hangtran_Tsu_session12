//Bài 1:
//F = (C9/5)+32;
// function celsiusToFahrenheit(celsius){
// return
// }
let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(celsius + "°C" + "= " + fahrenheit + "°F");
alert(celsius + "°C" + "= " + fahrenheit + "°F");

//bài 2
// 1 met(m) = 3.28084(ft);
let met = parseFloat(prompt("Nhập m: "));
let feet = met * 3.28084;
console.log(met + "(m)" + "=" + feet + "(ft)");

//bài 3
let a = 30;
let s3 = a * a;
console.log("Diện tích hình vuông = " + s3);

//bài 4;
let canhA = 20;
let canhB = 40;
let s4 = canhA * canhB;
console.log("Diện tích hình chữ nhật = " + s4);

//bài 5
let side_a = 10;
let side_b = 5;
let area = (side_a * side_b) / 2;
console.log("Diện tích tam giác vuông: " + area);

//bai 6 Giải phương trình bậc 1
//my + n = 0; m # 0; tìm  x;
let m = parseFloat(prompt("Nhập m: "));
let n = parseFloat(prompt("Nhập n: "));
let y = -n / m;
if (m !== 0) {
    console.log("x = " + y.toFixed(2));
} else {
    console.log("Giá trị không hợp lệ");
}

//bài 7 Giải phương trình bậc 2;
//ix**2 + jx + k = 0; i#0;
let i = parseFloat(prompt("Nhập i: "));
let j = parseFloat(prompt("Nhập j: "));
let delta = j * j - 4 * i * k;
let x1 = (-j + Math.sqrt(delta)) / (2 * i);
let x2 = (-j - Math.sqrt(delta)) / (2 * i);
let x = -j/(2*i);
function giaiPTBac2(i, j, k) {
    if (i === 0) {
        if (j === 0) {
            return k === 0 ? "Phương trình có vô số nghiệm" : "Phương trình vô nghiệm";
        } return "Phương trình có một nghiệm: x = " + (-k / j);
    }
    if (delta > 0) {    
       return " phương trình có 2 nghiệm phân biệt: "  + "x1" + "="+ x1 + "," + "x2" + "=" + x2  ;    

    }else if( delta === 0){
        return "Phương trình có nghiệm kép: " + "x" + "=" + x;

    }else {
        return "Phương trình vô nghiệm trong tập số thực";
    }
}
console.log(giaiPTBac2(i, j, k));
