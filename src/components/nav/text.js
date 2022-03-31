// let n = 6;
// let x = 2;
// let y = 3;
// const ary = [1, 2, 3, 4, 5, 6];
// let maxNumber = 0;// 找出最大的分数
// ary.map((num) => {
//     if (num > maxNumber)
//         maxNumber = num;
// })
// let end = 0;
// let i =0;
// console.log('maxNumber: '+maxNumber);
// for(i = 0; i < maxNumber; i++){
//     let a=0,b=0;
//     ary.map(num =>{
//         if(num>i){
//             a++;
//         }else{
//             b++;
//         }
//     })
//     if(a>=x && a<=y && b>=x && b<=y){
//            end = i;
//     }
// }
// if(end!==0){
//     console.log(end);
// }else{
//     console.log(-1);
// }
// new Promise((resolve) => {
//     console.log('1')
//         resolve()
//     console.log('2')
//          }).then(() => {
//         console.log('3')
//          })
//          setTimeout(() => {
//         console.log('4')
//          })
//          console.log('5')
// let num = 13
// const toNum = num.toString(2);
// console.log(toNum)
// const ary = toNum.split('');
// let total = 0;
// let a=0;
// for (let i = 0; i < ary.length; i++) {
//     if (ary[i] == 0) {
//         if(a>total){
//             total=a;
//         }
//         a = 0;
//     } else {
//         a++;
//     }
// }
// console.log(total);

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }

// var foo = checkscope();
// console.log(foo());

// var fn = null;
// function foo() {
//     var c=0;
//     var a = 2;
//     function innnerFoo() { 
//         console.log(c); 
//         console.log(a);
//     }
//     fn = innnerFoo; 
// }

// function bar() {
//     var c = 100;
//     var a=5;
//     fn(); 
// }

// foo();
// bar();
// const Pending = 'pending';
// const Fulfilled = 'fulfilled';
// const Rejected = 'rejected';
// class myPromise {
//     constructor(executor) {
//         executor(this.resolve,this.reject);
//     }
//     status = null;
//     value = null;
//     reason = null;
//     resolve = (value)=>{
//         if(this.status === Pending){
//             this.value = value;
//             this.status = Fulfilled;
//         }
//     };

//     reject = (reason)=>{
//         if(this.status === Rejected){
//             this.value = reason;
//             this.status = Rejected;
//         }
//     }

//     then = (OnFulfilled,OnRejected) =>{
//         if(this.status ===Fulfilled){
//             OnFulfilled();
//         }else if(this.status ===Rejected){
//             OnRejected();
//         }
//     }
// }
// let s= "loveleetcode";
// console.log(s.length);
// let c='e';

// var shortestToChar = function(s="loveleetcode", c="e") {
//     let ary =[];
//     for(let i=0;i<=s.length;i++){
//         if(c===s[i]){
//             ary.push(i)
//         }
//     }
//     let mixL= null;
//     let val = [];
//     for(let j=0;j<=s.length;j++){
//         mixL = Math.abs(j-ary[0]);
//         for(let q=0;q<=ary.length;q++){
//             if(Math.abs(j-ary[q])<mixL){
//                 mixL=Math.abs(j-ary[q])
//             }
//         }
//         console.log(mixL);
//         val.push(mixL)
//     }
//     return val;
// };

// shortestToChar(s,c)

// for (var i = 0; i < 6; i++) {
//     setTimeout(() => {
//       console.log(i)
//     })
//   }
function Test(name) {
    this.name = name
    this.age='1';
    console.log(this) // Test { name: 'yck' }
    return;
}
const t = new Test('yck')
console.log(t) // { age: 26 }
console.log(t.age) // 'undefined'
