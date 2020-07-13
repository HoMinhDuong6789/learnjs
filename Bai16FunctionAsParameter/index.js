//function as a parameter (callback)
//dungf fucntion nhuw moojt tham soos

var coffeeMachine = {
    makeCoffee: function (onFinish) {
        console.log("making coffee");
        //onFinish();
    }
};
var beep = function () {
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
    for (i = 1; i <= 10; i++) {
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
    return num * 2;
}

function sumAndDo(nums, callback) {
    // viết code ở đây.
    if (nums.length === 0) {
        return 0;
    } else {
        var sumOfArr = 0;
        for (i = 0; i < nums.length; i++) {
            sumOfArr += nums[i];
        }
        return callback(sumOfArr);
    }
}

//3.
/**
* 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
* Nội dung của hàm bao gồm:
* - Khai báo 1 biến result có giá trị là 1 empty array
* - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
* được kết quả bao nhiêu thì push vào array khai báo ở trên
* - Trả về result array
*/

function transform(numbers, callback) {
    var result = [];
    for (i = 0; i < numbers.length; i++) {
        result[i] = callback(numbers[i]);
    }
    return result;
}

function double(num) {
    return num * 2;
}

//bai 17 Arra.map dung ntn
/*
    map tuwsc laf dunf den biesn doi mot cac gi day thanh mot cac gi day theo mot quy tat nhat dinh
    vi du chuyen cac phan tu trong mang thanh mot mang co cac phan tu moi
    
*/

//bai1
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */
function tripple(num) {
    return num * 3;
}

function multiply(numbers) {
    return numbers.map(tripple);
}

//bani2
// Use array map make an array of strings of the names

var users = [
    {
        name: "Angelina Jolie",
        age: 80

    },
    {
        name: "Eric Jones",
        age: 2

    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16

    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

function namesOnly(arr) {
    return arr.map(i => i.name);
}


//Bai3
// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>
function readyToPutInTheDOM(arr) {
    var result = [];
    arr.map((c) => {
      result.push("<h1>" + c.name + "</h1><h2>" + c.age + "</h2>");
    });
    return result;
    
    arr.map(c => {
        document.write("<h1>" + c.name + "</h1>");
        document.write("<h2>" + c.age + "</h2>");
    });

    arr.forEach(c => {
        document.write("<h1>" + c.name + "</h1>");
        document.write("<h2>" + c.age + "</h2>");
    });
}


// Lesson 18 array.filter
// tra ve nhung gia tri thoa man dieu kien
var numbers = [1, 2, 3, 4, 6, 66, 7];
var evenNumbers=numbers.filter(function(number){
    return number%2==0;
});
evenNumbers;


//Lesson19 array.find
// no se duyet qua tung phan tu mot, khi nao tim duoc phan tu thoa man dieu kien thi dung lai va khong tim kiem tu phan tu khac nua
//chi tra ve mot phan tu duy nhat


//lesson20 array.reduce
/*
    reduce giam nhieu phan tu trong mot mang, tra ve 

*/
