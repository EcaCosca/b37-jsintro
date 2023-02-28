const typeString = "Hello world"
const typeString2 = 'Hello single quotations'
const typeString3 = `Bactics`

const typeNumber = 123
const typeNumber2 = "123"

// console.log(typeof typeNumber)
// console.log(typeof typeNumber2)


console.log(5 + 5 + typeNumber)
const adding = typeNumber + typeNumber2

console.log("value of adding:"+adding)

// console.log(typeof adding)

const typeBoolean = true

const typeArray = ['string', 2, true, [1, 2, 3, 4]]

console.log(typeArray[typeArray.length-1])

let typeObj = {
    firstthing: "hey",
    secondthing: true,
    array:[1,2,3,4],
    obj: {babushka: 'mamushka',
          more: {
            firstthing: "hey",
            secondthing: "there",
            array:[1,2,3,4],
            obj: {babushka: 'mamushka'
            }
        },  
}
}

console.log(typeObj.obj.more.obj.babushka)

const name = "Paco"
let lastName = "Amoroso"

console.log(name)
console.log(lastName)

// name = "Sanchez"
lastName = "Sanchez"

console.log(name)
console.log(lastName)

// const alpha1 = "Cheese"
let ingridient = "cheese";
let ingridientsArr = ["cheese", 'flour', 'tomato', 'olives']

console.log(ingridientsArr)
ingridientsArr.shift()
console.log(ingridientsArr)
ingridientsArr.pop()
console.log(ingridientsArr)
ingridientsArr.push('Mango')
console.log(ingridientsArr)


let pokemon = "pikachu"

function pokemonGo(){
    let pokemon = "squirtle"

    pokemon = "charmander"
    console.log(pokemon)
}

pokemonGo()

let theMasterKey = true

let crowbar = true

if(theMasterKey){
    console.log("access accepted")
}else if(crowbar){
    console.log("that escalated quickly")
}else{
    alert("u shall not pass")
}

if(5 === 3){
    console.log("5 is greater than 3")
}else{
    console.log("Don't make me do math")
}

// ternary operator

5 === "5" ? console.log("5 is 5") : console.log("5 is not '5'")

let day = ''

switch (3) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
      default:
        day = "That's not a day"
  }

  console.log(day)



  let crazyString = "crazy String"

  console.log(crazyString.slice(1,5))
  const newArr = crazyString.split(' ')

  console.log(typeof crazyString)
  console.log(typeof newArr)