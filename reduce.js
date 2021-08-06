let a=[1,2,3,4,5];

function sum(a,b)
{
return a+b;

}

let ans=a.reduce(sum);
console.log(a);
console.log(ans);



function myReduce(arr,fun){
   let ans=arr[0];
    for(let i=1;i<arr.length;i++){
ans=fun(ans,arr[i]);
    }
    return ans;
}

console.log(myReduce(a,sum));