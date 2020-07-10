// var colors;
// colors=["white", "black","blue"];

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