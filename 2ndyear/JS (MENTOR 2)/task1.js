// function add5() {
//     let arr=[1,2,3,4,5];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]+arr[j]==5 && i<j)
//             {
//                 console.log("(" + arr[i] + " " + arr[j] + ")");
//             }
//         }
//             }
//     }


  let arr = [5, 4, 3, 2, 1];
  let n = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] + arr[n] == 5 && n < i) {
      console.log("(" + arr[i] + " " + arr[n] + ")");
    n++;
    }

  }
