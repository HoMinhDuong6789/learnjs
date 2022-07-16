// var colors;
// colors=["white", "black","blue"];

/**
 * 
 * kiểu dữ liệu trong js:
 * kiểu dữ liệu nguyên thuỷ
 *  Number:
 *  String:
 *  Boolean:
 *  Undefine:
 *  Null:
 * 
 * Kiểu dữ liệu ko nguyên thuỷ:
 *  Object
 *  Array
 *  RegExp 
 * 
 * Kiểu String:
 *  1. Mố số ký tụe đặc biệt trong string:
 *    \': biểu dữn ký tự nháy đơn.
 *    \": biểu diễn ký tự nháy kép "
 *    \\: biểu diễn ký tự back slash \
 *    \r: đầu dòng
 *    \t: tab
 * 
 *  2. kiểu dữ liệu Number:
 *    trong js có thể xem là kiểu tổng hợp của int, float, double,... trong các ngôn ngữ lập trình khác
 *    trong kiểu number này cần lưu ý hai giá trị đặc biệt:
 *      infinity: là số "vô cực"
 *      NaN: là not a Number
 * 
 *  3. kiểu dữ liệu undefined:
 *    trong js, khi một biến đượckhai báo mà ko gắn vs bất kỳ giá trị nào thì biến đó gọi là underfine
 * 
 *  4. kiểu dữ liệu Null
 *  typeOf(underfine) = underfine
 *  typeOf(null) = Object
 * 
 * 
 */

function removeEnd(arr, n) {
    // your code here!
    var temp = new Array[arr.length];
    for (i = 0; i < arr.length - 1; i++) {
      if(n==1){
          continue;
      }else{
        temp[i] = arr[i];
      }  
    }
    temp = arr;
  }
  var arr = [40, 100, 1, 5, 25, 10];
  removeEnd(arr, 6);