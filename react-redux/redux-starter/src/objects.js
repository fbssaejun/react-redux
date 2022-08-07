const person = {
   name: "John",
   address : {
    country: "USA",
    city: "San Francisco"
   }
  };

// One way of copying an object and updating key values
const updated = Object.assign({}, person, { name: "Bob", age: 30 })

console.log(updated) // {name: "Bob", age: 30}

// Another way of copying an object using spread operator, does a SHALLOW copy
// The problem with this is, if a property from original object, person, got referenced from this shallow copy and got updated, the original object will get mutated
const shallowUpdated = {...person, name: "Bob"}

// Doing a deep copy of the original object's all properties will prevent the original object from getting mutated
const deepUpdated = {
  ...person,
  address: {
    ...person.address,
    city: "New york"
  },
  name: "Bob"
}

