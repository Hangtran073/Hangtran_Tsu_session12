//bai1;

let i = 1
while (i <= 100) {
    if (i === 99) {
        alert("Đã hoàn thành!");
    }
    i++;
}

//bài2;

let temperature = prompt("Nhập nhiệt độ hiện tại: ");

if (temperature !== null) {
    temperature = parseFloat(temperature);

    if (isNaN(temperature)) {
        alert("Vui lòng nhập số hợp lệ.");
    } else {
        if (temperature > 100) {
            alert("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.");
        } else if (temperature < 20) {
            alert("Nhiệt độ quá thấp! Vui lòng nhập tăng nhiệt độ.");

        } else {
            alert("Nhiệt độ trong khoảng bình thường.");
        }
    }
} else {
    alert("Bạn đã hủy nhập liệu.");
}

//bài 3;
let a = 0;
let b = 1;
document.write(a + "<br>");
document.write(b + "<br>");
for (let i = 2; i < 20; i++) {
    let nextNumber = a + b;
    document.write(nextNumber + "<br>");
    a = b;
    a = nextNumber;
}

//bài 4;

function findFibonacciDivisibleBy5() {
    let a = 0;
    let b = 1;
    while (true) {
        let nextNumber = a + b;
        if (nextNumber % 5 === 0) {
            console.log("Số đầu tiên trong dãy fibonacci chia hết cho 5 là: " + nextNumber);
            break;
        }
        a = b;
        b = nextNumber;
    }
}
findFibonacciDivisibleBy5();

//bài 5;

function sumFirst20Fibonacci() {
    let a = 0, b = 1;
    let sum = a + b;
    for (let i = 2; i < 20; i++) {
        let nextNumber = a + b;
        sum += nextNumber;
        a = b;
        b = nextNumber;
    }
    console.log("Tổng của 20 số đầu tiên trong dãy Fibonacci là: " + sum);

}
sumFirst20Fibonacci();

//bài 6;

function sumFirst30DivisibleBy7() {
    let sum = 0;
    let count = 0;
    let num = 7;

    while (count < 30) {
        sum += num;
        count++;
        num += 7;
    }
    console.log("Tổng của 30 số chia hết cho 7 đầu tiên: " + sum);

}
sumFirst30DivisibleBy7();

//bài 7;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//bài 88
