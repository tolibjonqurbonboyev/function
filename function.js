// function strCount(str,letter){
//     let a=0
//     for (i=0;i<str.length;i++){
//         if(str[i]==letter)
//         a++
//     }
//     return a
// }
// const str='hello'
// const letter='o'
// console.log(strCount(str,letter));

// const a = '324';
// const b = 12;
// const c= [1,2]

//  const me = {
//     a,
//     b,
//     c,
//     foo : function(a,b){
//         //return a+b
//         printime() {  
//         return (`${ this.blah} ${this.multiply}`)
//         }
//     }      
//  }
//  me.printime
// //  console.log(foo);


const math = {
    blah: 'hi',
    name: 'Tolibjon',
    multiply () {
        console.log(this.name);
        return this.name
    }
}
//math.multiply()

// math.name
// math.name = 'Tolibjon'
// math.add = function(a,b){
//     //return a + b
//     return `${ this.blah} ${this.multiply}`
// }
// math.multiply()


// const foo = math.multiply;

// console.log(foo());

const car ={
    name:'gelik',
    last:'Mers'
}


car.method = math.multiply
console.log(car);

    





