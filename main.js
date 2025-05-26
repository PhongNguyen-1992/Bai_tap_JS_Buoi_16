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
