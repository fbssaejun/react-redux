// Import composr and pipe from lodash library for writing cleaner functions calls wrapped inside function calls
import { compose, pipe} from 'lodash/fp';

// Transforming a string with string concatenation
let input = "  Javascript  ";
let output = "<div>" + input.trim() + "</div>";

// Define functions to operate string transformation
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// Nest functions inside multiuple function calls which is not very clean
result = wrapInDiv(toLowerCase(trim(input)));

// With lodash's compose function, can organized and compose all functions together. No need to nest functions.
// One problem with compose function is the order, need to read it from left to right.
const transformCompose = compose(wrapInDiv, toLowerCase, trim)
transformCompose(input)

// To solve the problem above from compose function, use pipe function from lodash which composes functions in order from left to right.
const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
transformPipe(input)
