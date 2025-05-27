let array = [];
function themMang() {
    let number_1 = document.getElementById("Array").value * 1;
    array.push(number_1) // add number    
    let content = `Mảng bạn đang có: [${array}].`
    document.getElementById("noti12").innerHTML = content
}
// Bài 1 và Bài 2
function bai12() {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
        let number = array[i];
        if (number>=0){
            sum += number;
            count ++;
        }
    }
    content = ` Mảng của bạn là:[${array}]. Trong đó, Tổng Số Dương là: ${sum}, Có Tổng ${count} Số Dương`
    document.getElementById("noti12").innerHTML = content
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
// Bài 6
function themMang6() {
    let number = document.getElementById("Array6").value * 1;
    array.push(number);
    document.getElementById("noti6").innerHTML = `📌 Mảng hiện tại: [${array}]`;
}

function doiCho() {
    let viTri1 = document.getElementById("viTri1").value * 1;
    let viTri2 = document.getElementById("viTri2").value * 1;

    if (
        viTri1 >= 0 && viTri1 < array.length &&
        viTri2 >= 0 && viTri2 < array.length
    ) {        
        let mangCu = [...array];
        // đổi chỗ
        let temp = array[viTri1];
        array[viTri1] = array[viTri2];
        array[viTri2] = temp;        
        document.getElementById("noti6").innerHTML =
            `✅ Đã đổi chỗ vị trí ${viTri1} và ${viTri2}.<br>
            📥 Mảng trước khi đổi: [${mangCu}]<br>
            🔁 Mảng sau khi đổi: [${array}]`;
    } else {
        document.getElementById("noti6").innerHTML =
            `❌ Vị trí nhập không hợp lệ! Mảng hiện có ${array.length} phần tử (bắt đầu từ 0).`;
    }
}

// Bài 7
function bai7() {
    let number_1 = document.getElementById("Array7").value * 1;
    array.push(number_1);
    let content = `Mảng bạn đang có: [${array}].`;    
    array.sort((a, b) => a - b); // Sắp xếp mảng tăng dần
    let content1 = `Mảng sau sắp xếp tăng dần: [${array}].`;
    document.getElementById("noti7").innerHTML = `${content}, ${content1}`
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
// Bài 9
function themMang9() {
    let number_1 = document.getElementById("Array9").value * 1;
    array.push(number_1);
    let content = `Mảng bạn đang có: [${array}].`;
    document.getElementById("noti9").innerHTML = content;
}
function bai9() {
    let dem = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            dem++;
        }
    }
    let content = `Mảng của bạn là: [${array}]. Có ${dem} số nguyên trong mảng.`;
    document.getElementById("noti9").innerHTML = content;
}

// Bài 10
function themMang10() {
    let number_1 = document.getElementById("Array10").value * 1;
    array.push(number_1);
    let content = `Mảng bạn đang có: [${array}].`;
    document.getElementById("noti10").innerHTML = content;
}
function bai10() {
    let duong = 0;
    let am = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            duong++;
        } else if (array[i] < 0) {
            am++;
        }
    }

    let content = '';
    if (duong > am) {
        content = `Số lượng số dương (${duong}) nhiều hơn số âm (${am}).`;
    } else if (am > duong) {
        content = `Số lượng số âm (${am}) nhiều hơn số dương (${duong}).`;
    } else {
        content = `Số lượng số dương (${duong}) và số âm (${am}) bằng nhau.`;
    }

    document.getElementById("noti10").innerHTML = content;
}