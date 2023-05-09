//explicit types
let character: string
let age: number
let isLoggedIn: Boolean

age = 56

//arrays
let ninjas: string[] = []

ninjas.push("mkuru")

//union types
let mixed: (string|number|boolean)[] = []
mixed.push(23)
mixed.push(true)
mixed.push("mkuru")
console.log(mixed)

//objects
let nin jaone: object
ninjaone = { name: "Mkuru", age: 19}