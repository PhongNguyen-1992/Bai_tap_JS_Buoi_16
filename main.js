let array = [];
function themMang() {
    let number_1 = document.getElementById("Array").value * 1;
    array.push(number_1) // add number    
    let content = `Mảng bạn đang có: [${array}].`
    document.getElementById("noti12").innerHTML = content
}
// Bài 1 và Bài 2
function soLonHon0() {
    let sum = 0;
    let count = "";
    for(let i = 0; i < array.length; i++){
        let number = array[i];
        if (number>=0){
            sum+=number;
            count += number + " "
        }
    }
    content = ` Mảng của bạn là:[${array}]. Trong đó, Tổng Số Dương là: ${sum}, Các giá trị Dương là ${count}`
    document.getElementById("noti").innerHTML = content
}

// Bài 3
function themMang3() {
    let number_1 = document.getElementById("Array3").value * 1;
    array.push(number_1) // add number    
    let content = `Mảng bạn đang có: [${array}].`
    document.getElementById("noti3").innerHTML = content
}
function bai3(){
    let min = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    let content = `Mảng của bạn là: [${array}]. Số nhỏ nhất trong mảng là: ${min}`;
    document.getElementById("noti3").innerHTML = content;
}
// Bài 4
function themMang4() {
    let number_1 = document.getElementById("Array4").value * 1;
    array.push(number_1) // add number    
    let content = `Mảng bạn đang có: [${array}].`
    document.getElementById("noti4").innerHTML = content
}
function bai4(){
    let min = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < min && array[i]>=0) {
            min = array[i];
        }
    }

    let content = `Mảng của bạn là: [${array}]. Số Dương nhỏ nhất trong mảng là: ${min}`;
    document.getElementById("noti4").innerHTML = content;
}
// Bài 5
function themMang5() {
    let number_1 = document.getElementById("Array5").value * 1;
    array.push(number_1) // add number    
    let content = `Mảng bạn đang có: [${array}].`
    document.getElementById("noti5").innerHTML = content
}
function bai5() {
    let ketQua = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            ketQua = array[i];
        }
    }

    let content = `Mảng của bạn là: [${array}]. Số chẵn cuối cùng trong mảng là: ${ketQua}`;
    document.getElementById("noti5").innerHTML = content;
}

// Bài 8
function themMang8() {
    let number_1 = document.getElementById("Array8").value * 1;
    array.push(number_1);
    let content = `Mảng bạn đang có: [${array}].`;
    document.getElementById("noti8").innerHTML = content;
}

function soNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function bai8() {
    for (let i = 0; i < array.length; i++) {
        if (soNguyenTo(array[i])) {
            let content = `Mảng của bạn là: [${array}]. Số nguyên tố đầu tiên là: ${array[i]}`;
            document.getElementById("noti8").innerHTML = content;
            return;
        }
    }
    document.getElementById("noti8").innerHTML = `Mảng của bạn là: [${array}]. Không có số nguyên tố nào: Kết Quả -1`;
}