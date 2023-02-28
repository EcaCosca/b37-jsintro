function talk() {
    console.log('wooff woofff')

    // function eat(){
    //     console.log("hey, we are eating here")
    // }

    // eat()
}

talk()

function doMath(number) {
    talk()
    console.log(number+5)
}

doMath(5)
doMath(6)
doMath(7)
doMath(8)

function eat(food = "dog food") {
    talk()
    console.log("I love eating "+food)
}

eat("tacos")
eat("watermelon")
eat()

const stay = () => {
    console.log("I am a good boy")
}

stay()


const callTheDog = (name) => {
    console.log(`Get over here ${name}`)
}

let dogs = ['Corcho', "bethoven", "loki", "snoopy", "smookey"]

// callTheDog(dogs[0])
// callTheDog(dogs[1])
// callTheDog(dogs[2])
// callTheDog(dogs[3])
// callTheDog(dogs[4])
// callTheDog(dogs[5])

for (let i = 0;i < dogs.length; i++){
    callTheDog(dogs[i])
}

console.log("done with the for loop")


