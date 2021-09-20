//find peak element
function findPeak(arr, n)
{

  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

 
  for (var i = 1; i < n - 1; i++) 
  {
  
 
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}


var arr = [1, 3, 20, 4, 1, 0];
var n = arr.length;
console.log(findPeak(arr, n));

//subarray sum
function subarray(arr,n,sum)
    {
        let curr = arr[0], start = 0, i;
  
        for (i = 1; i <= n; i++) {
            
            while (curr > sum && start < i - 1) {
                curr = curr - arr[start];
                start++;
            }
  
           
            if (curr == sum) {
                
                console.log(
                     start+(i-1)
                    );
                return 1;
            }
  
           
            if (i < n)
                curr = curr + arr[i];
        }
  
      
        return -1;
    }
     
    let arr2=[15, 2,  23,7 ];
    let n2 = arr2.length;
    let sum2 = 23;
    subarray(arr2, n2, sum2);



    //find repeating elements 

    function repeating(arr,n)
    {
    
        for (let i = 0; i < n; i++)
        {
            let index = arr[i] % n;
            arr[index] += n;
        }
 
        
        for (let i = 0; i < n; i++)
        {
            if ((arr[i] / n) >= 2)
                console.log(i + " ");
        }
    }
    

    let arr3=[1, 6, 3, 1, 3, 6, 6];
    let n3 = arr3.length;
    repeating(arr3, n3);
//Promise tasks
//1
let promise = new Promise(function(resolve, reject) {
        resolve(1);
      
        setTimeout(() => resolve(2), 1000);
      });
      
promise.then(console.log(promise)); //The second resolve does not execute because only first call of resolve will execute
//2
//use promise to run the coe . promise returns then and catch  
function delay(ms) {
    // your code
    return new Promise((resolve,reject) => setTimeout(resolve,ms))
  }
  
  delay(3000).then(() => console.log('runs after 3 seconds'));
  //3 Everything aftr catch statement is executed
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise2 = job();
promise2.then(function() {
    console.log('Success 1');
})

.catch(function() {
    console.log('Error 1');
})
.then(function() {
    console.log('Success 2');
});
// 4    success is exeuted first , it'll return to false collar which returns error and prints and then this returned error goes to catch and  executes
function job2(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise3 = job2(true);

promise3

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});
//promise .all 
let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

