//Es6 basics

//And Operator Values

// True && True => True
// True && False => False
// False && True => False
// False && False => False

//Or Operator Values

// True || True => True
// True || False => True
// False || True => True
// False || False => False

// Not Operator

// True => False
// False => True

//Program 1

let a1 = "shubham"||"pravin"||"tushar"
console.log(a1)

let age=20
let firstName = " "
let q1= firstName||++age
console.log(q1)
console.log(age)


//Program 2

let q2 = "shubham" && 0 && "tushar" && "bapurao"
console.log(q2)


let age2 = 30
age2 && console.log("Good Morning")


let q3 = "shubham" && null && "tushar" && "bapurao"
console.log(q3)


//nullish coalesing operator is shown by ?? i.e. double question mark
//ye falsy values ko as it is print karke dega
//null or undefined hoga tab hi aage badega

//falsy values = 0,false,undefined,NaN,null,8!==8
//truthy values = true,2,-3,44,  {} , [] , 8 === 8 , 'shubham' , 'c' 
let info ={
    firstName:5===5,
    lastName:"kamble"

}

let s= info.firstName??"Hello" //true
console.log(s)

//Rest Operator
//  1,2,3,4,5,6,7,8,9===> [1,2,3,4,5,6,7,8,9]

function addition(...arr){
    // console.log(...arr)

    return arr.reduce(function(acc,el){
        return acc+el

    },0)


}
let sum = addition(1,2,3,4,5,6,7,8,9)
console.log(sum)



let w= [1,2,3]
let x=[4,5,6]

let r1=[...w,...x] //used =to join two arrays and make one big array
console.log(r1)


// Spread Operator

// [1,2,3,4,5,6,7,8,9] ===> 1,2,3,4,5,6,7,8,9

let marks = [10,20,30,40,50,60,70,80,90,100]

function firstSix(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f)
}

// firstSix(marks[0],marks[1],marks[2],marks[3],marks[4],marks[5]) //output = 210
firstSix(...marks) //output = 210



function addB(a,...arr){
    let q4 =arr.filter(function(el){
        return el>a
    })
    console.log(q4)
}
addB ( 50, 1,15,46,782,964,78,42,36,15,98,4,75,33,44,220,8,9,7,4,1)
//yaha pe mujhe elements greater than 50 chahiye isiliye 50 call karte samay sabse pehle liya..aur baki ke elements jo aage hai usme se hume 50 se upar wale ek array me compile hoke milenge


function addB(a,b,...arr){
    let q5 =arr.filter(function(el){
        return el>a
    })
    console.log(q5)
}
addB ( 50, 100,15,46,782,964,78,42,36,15,98,4,75,33,44,220,8,9,7,4,1)
//yaha pe mujhe elements greater than 50 aur gretaer than 100  chahiye isiliye 50 call karte samay sabse pehle liya aur uske baad 100 hai..aur baki ke elements jo aage hai usme se hume 50 se upar wale aur 100 se upar wale ek array me compile hoke milenge


//Optional Parameter -- isko hum single question mark se define karte hai

let infoA={

    firstName:"shubahm",
    lastName:"kamble",
    parent:{
        father:"pandurang",
        mother:"anuradha"
    }

}
console.log(infoA.parent?.mother) // anuradha
console.log(infoA.paren?.mother) // parent nahi hai isiliye uske baad checkd karne ke liye question mark likha hai i.e. optional paramter likha hai jo ki paren nahi hai isiliye 'undefined; de raha hai

