import { Map } from 'immutable';

//Create immutable hash map
let book = Map({ title: "Harry Potter" });

function publish(book) {
  // Need to call setter method to access property values
  // return is required since original book is immutable, need to return updated value and re-assign below
  return book.set("isPublished", true);
}

// Need to call getter method to access property values
console.log(book.get("title"));

book = publish(book);

// toJS() converts immutable hash map to javascript object
console.log(book.toJS());
