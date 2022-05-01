// More than one Js file.

/*

In index.html

<script src="...." type="module"</script>
defer not needed.

*/

// ************************************

import {firstName} from "test.js";

console.log(firstName);

// or {short the variable or change it}

import {firstName as fName} from "test.js";

console.log(fName);


// In test.js file *********************

export const firstName = "Subhranshu";

//or

const firstName = "Subhranshu";
export {firstName};
