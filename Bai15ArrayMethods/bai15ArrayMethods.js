console.log("hello world");
//Các mthod của một array
var arr=["black", "blue", "green"];
arr.concat("yellow");// ghép các mảng con lại với nhau rồi trả về  một mảng mới, hai mảng con ban đầu ko thay đổi
arr.push(4); // thêm một phần tử  mới vào vị trí cuối mảng, giá trị trả về  là độ dài của mảng mới, length
arr.pop(); // xóa phần tử nằm ở vị trí cuối mảng, trả về phần tủ bị đẩy ra khỏi mảng.
arr.shift(); //xóa phần tử nằm ở vị trí đầu măng, trả về phần tủ thêm vào mảng.
arr.unshift(); //thêm một phân tử mới vào vị trí đầu mảng, trả về length
arr.toString();