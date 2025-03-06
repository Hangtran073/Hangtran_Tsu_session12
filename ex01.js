//Bài 1;
let a = parseInt(prompt("Nhập số a"));
let b = parseInt(prompt("Nhập số b"));
if (a % b === 0) {
    console.log("a chia hết cho b");
    alert("a chia hết cho b");
} else {
    console.log("a không chia hết cho b");
    alert("a không chia hết cho b");
}


//Bài 2;

let age = parseInt(prompt("Nhập số tuổi"));

if (age >= 15 && age <= 30) {
    console.log("Đủ điều kiện vào lớp 10");
    alert("Đủ điều kiện vào lớp 10");
} else {
    console.log("Không đủ điều kiện vào lớp 10");
    alert("Không đủ điều kiện vào lớp 10");
}

//Bài 3;

let number = parseInt(prompt("Nhập số nguyên bất kì"));

if (number > 0) {
    console.log("Số này lớn hơn 0");
    alert("Số này lớn hơn 0");
} else {
    console.log("Số này nhỏ hơn 0");
    alert("Số này nhỏ hơn 0");
}

//Bài 4;
let x = parseInt(prompt("Nhập số nguyên x bất kì: "));
let y = parseInt(prompt("Nhập số nguyên y bất kì: "));
let z = parseInt(prompt("Nhập số nguyên z bất kì: "));
let max = Math.max(x, y, z)

console.log("Giá trị lớn nhất là: " + max);
alert("Giá trị lớn nhất là: " + max);


//Bài 5;


let midtermTest = parseFloat(prompt("Điểm thi giữa kì: "));
let lastTest = parseFloat(prompt("Điểm thi cuối kì : "));

//let score = (midtermTest * lastTest) / 2;

if (score >= 0 && score <= 10) {
    let score = (midtermTest * lastTest) / 2;

    if (score >= 8.5) {
        console.log("Xuất sắc: " + score.toFixed(2));
        alert("Xuất sắc");
    } else if (score >= 8) {
        console.log("Giỏi");
        alert("Giỏi");
    } else if (score >= 6.5) {
        console.log("Khá");
        alert("Khá");
    } else if (score >= 5) {
        console.log("Trung bình");
        alert("Trung bình");
    } else {
        console.log("Yếu");
        alert("Yếu")
    }
} else {
    console.log("Giá trị không hợp lệ");
    alert("Giá trị không hợp lệ")
}






