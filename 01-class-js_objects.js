// Class code examples

const person1 ={ 
firstName : "Chee Kean",
weight : 231,
height : 1.7
}

const person2 = { 
firstName : "Marco Santo",
 weight : 231,
 height : 1.7
}

const person3 = {
firstName : "Carlos Max",
weight : 231,
 height : 1.7
}

const person4= { 
firstName : "Coroluna",
 weight : 231,
 height : 1.7
}

// Accessing a property with dot notation
console.log(
person1.firstName,
person1.weight
)

//Accessing a property with bracket notation (indirect acces or dynamic)
console.log(person1["weight"])

const personKey = ["firstName", "weight", "height"]

for (key of personKey){
   console.log(`person1 ${key}: `, person1[key])
}

person1.nationality = "Italian"

console.log(person1.favFood)
// If you try to access a property/jey that is missing, we will receive an undefined

person1["favFood"] = "pizza"

const newKey = `favBook`
person1[newKey] = "guide to galaxy"

//You can create new properties on the fly

console.log("person1: ", person1)

for(value in person1) console.log(person1[value]) // We got all the keys

//Object.keys(person1)
for(key of Object.keys(person1)) console.log(person1[key])

console.log("accessing a number", person1[1]) // There is no order in objects

console.log("reading index from keys", Object.keys(person1)[1])
console.log("object length ", person1.length)//undefined

const twin1 = {
    name: "Carlos",
    age: 24
}
const twin2 = {
    name: "Carlos",
    age: 24
}

console.log(twin1 === twin2, //They represent identical data but they are still different objects
    "Carlos" === "Carlos") 