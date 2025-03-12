let choice;
let fullname;
let age;

while (choice !== 10) {
    choice = Number(prompt("Mời bạn nhập lựa chọn"));
    switch (choice) {

        case 1:
            fullname = prompt("Nhập tên của bạn: ");
            break;
        case 2:
            age = +prompt("Nhập tuổi của bạn: ");
            break;
        case 3:
            console.log("Tên:" + fullname + "," + "Tuổi: " + age);
            break;
        case 4:
            let num = parseInt(prompt("Nhập số để in bảng cưu chương:"), 10);
            for (let i = 1; i <= 10; i++) {
                console.log(`${num} x ${i} = ${num * i}`);
            }
            break;
        case 5:
            fullname = prompt("Nhập tên của bạn: ");
            break;






    }

}
