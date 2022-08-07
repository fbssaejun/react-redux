// Import composr and pipe from lodash library for writing cleaner functions calls wrapped inside function calls
import { compose, pipe} from 'lodash/fp';

// Transforming a string with string concatenation
let input = "  Javascript  ";
let output = "<div>" + input.trim() + "</div>";

// Define functions to operate string transformation
const trim = str => str.trim();
// Modify wrapInDiv function with wrap as a currying function to pass it in compose and pipe functions
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// Nest functions inside multiuple function calls which is not very clean
result = wrapInDiv(toLowerCase(trim(input)));

// With lodash's compose function, can organized and compose all functions together. No need to nest functions.
// One problem with compose function is the order, need to read it from left to right.
const transformCompose = compose(wrap("span"), toLowerCase, trim)
transformCompose(input)

// To solve the problem above from compose function, use pipe function from lodash which composes functions in order from left to right.
// Since wrap function is a currying function, it will return a function and the trnasformed string from previous trim and toLowerCase functions will be passed into the returned function from wrap("div")
const transformPipe = pipe(trim, toLowerCase, wrap("div"));
transformPipe(input)
