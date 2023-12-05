//1
function minutesSeconds(minutes){
    const seconds = minutes * 60
    return `${seconds} seconds`
}
const minutes = 5
const minutestoseconds = minutesSeconds(minutes)
console.log(minutestoseconds)

//2
function ageDay(age){
    const day = age * 365
    return `${day}`
}
const age = 13
const ageToday = ageDay(age)
console.log(ageToday)

//3
const result = number => number * number
console.log(result(5))

//4
const triangle = (num1, num2) => num1 * num2 / 2
console.log(triangle(10, 10))

//5
const names = name1 => name1.split("").reverse().join("").charAt(0)
console.log(names("Petras"))

//6
const names5 = name2 => name2.toLowerCase().split("").reverse().join("")
console.log(names5("Petras"))

//7
const arr = [-1, -100, -5, 10, 0, 11]
function neigiamas(arr) {
    let neigiamas = 0
    for (let i = 0; i < arr.length; i++){
        const number = arr[i]
        if (number < 0 && (neigiamas === 0 || number > neigiamas)){
            neigiamas = number
        }
    }
    return neigiamas
}
console.log(neigiamas(arr));

//8
function random(count){
    const random = []
    for(let i = 0; i < count; i++){
        const randomNumber = Math.floor(Math.random() * 10) + 1
        random.push(randomNumber)
    }
    return random
}
const number = random(3)
console.log(number)

//9
const devyni = (num1, num2) => num1 + num2 > 100
console.log(devyni(110, 10))

//10
const people = [
    {name: "Alfredas", age: 25},
    {name: "Jonas", age: 25},
    {name: "Kasparas", age: 20}
    ]
const sort = people.filter((a, b) => a.age - b.age ? 1 : -1)
console.log(sort)

//11
function iseigine(date) {
    const iseigine = [
        new Date(date.getFullYear(), 11, 25),
        new Date(date.getFullYear(), 1, 16)
    ]
    return iseigine.some(x => x.getTime() == date.getTime())
}
console.log(iseigine(new Date(2023, 11, 25)))

//12
function MissingNumber(arr){
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != i + 1){
            return i + 1
        }
    }
    return arr.length + 1
}
const array = [1, 2, 4, 5]
const find = MissingNumber(array)
console.log(find)