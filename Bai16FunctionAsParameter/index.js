//function as a parameter (callback)
//dungf fucntion nhuw moojt tham soos

var coffeeMachine={
    makeCoffee:function(onFinish){
        console.log("making coffee");
        //onFinish();
    }
};
var beep= function(){
    console.log("tit tick ...");
};
coffeeMachine.makeCoffee(beep);

//bai16
//1.
/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

function sayHello() {
    console.log("I love Coders,Tokyo");
  }
  
  function countAndDo(print) {
    for(i=1;i<=10;i++){
       console.log(i);
    }
    print();
  }
  countAndDo(sayHello);

  //2. 
  /**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

function double(num) {
    // viết code ở đây.
    return num*2;
  }
  
  function sumAndDo(nums, callback) {
    // viết code ở đây.
    if(nums.length===0){
        return 0;
    }else{
        var sumOfArr=0;
        for(i=0;i<nums.length;i++){
            sumOfArr+=nums[i];
        }
        return callback(sumOfArr);
    }
  }
  