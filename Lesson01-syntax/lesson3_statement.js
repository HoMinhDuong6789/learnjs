/**
 * CÂU LỆNH ĐIỀU KIỆN VÀ VÒNG LẶP TRONG JAVASCRIPT
 * 
 * 
 * 1. khối lệnh trong javasript:
 *      nhiều câ lệnh js có thể nhóm với nhau tạo ra khối lệnh, các khối lệnh đưuọc nhóm bằng cặp dâu ngoặc {}, các khối
 * thường sử dụng trong các câu lệnh rẽ nhánh, vòng lặp,...
 *      khối lệnh cũng có thể dán nhãn cho nó, để sau này từ vị trí khác, bạn có thể nhả đến thi hành các lệnh trong khối
 * (với lệnh continue, break)
 *  labelexamp:{
 *      // các dòng lệnh trong khối có nhãn lavlexamp
 *  }
 * 
 * 
 *  if/ if else/ if else if else.
 * 
 *  1. switch:
 *  switch(express){
 *      case n1:
 *          //... thi hafnh neesu expression == n1
 *      case n2:
 *          //... thi hanh neua expression ==n1
 *      default:
 *          //... mac dinh thi hanh neu expression ko bằng giá trị nào ở trên
 *  }
 * 
 *  2. for
 *      for(statement1; statement2, statement3){
 *          //khoi lẹnh thi hành, var i = 1// có thể bỏ qua statement1 nhưng vẫn giữ lại ;
 *      }
 * 
 *      for...in: duyệt qua các key của đói tượng đếm được (không dùng cho mảng)
 *      for(let yourvar in object){
 *          ///
 *      }
 */
let networkdata = {
    locaiton_id : "0000ZZ|1|1|1",
    dhid : "dhi1_1122233333",
    status: "Active"
}

for(let key in networkdata){
    console.log(key)
}

/*
 * -----------------------------------------
 *Function declaration và function expression kahsc nhau điểm gì?
 * 1. Cách khai báo function declẩtion và functiôn expression
 * // function expression
 * const fn = function(){
 *  // code here
 * }
 * 
 * 
 * 2. Cách khai báo function declaration
 * function fn(){
 *  // code here.....
 * }
 * 
 * 3. khác nhau giữa function declaration và function expression:
 * sayHello(); // Uncaught ReferenceError: sauHello í not defined
 * var sayHello = function(){//console.log('Hello');}
 * khi sử dụng function expression thì chúng ta gọi hàm trước khi khai báo sẽ xuất hiện error uncaught ReferenceError: sayHello í not defined
 * 
 * ngược lại thì khi khai bái function declaration thì chúng ta có thể thực hiện được điều đó. Đây chính là điềm khác biệt
*/
 