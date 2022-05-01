/**** TYPE 1 ***

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data)=>{
    console.log(data)
  })
  .catch(error=>{
    console.log("Error!!!")
  })

*/

/*** TYPE 2 ***

const URL = "https://jsonplaceholder.typicode.com/posts";
async function getPosts(){
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Error in fetching JSON data.");
  }
  const data = await response.json(); // it will wait to resolve.
  console.log(data)
  return data;
}

getPosts()
  .then(mydata=>{
    console.log(mydata)
  })
  .catch(error=>{
    console.log(error) // it will wont run.
  })

*/

/* TYPE 3 */

const URL = "https://jsonplaceholder.typicode.com/posts";


const getPosts = async()=>{

  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Error in fetching JSON data.");
  }
  const data = await response.json(); // it will wait to resolve.
  console.log(data)
  return data;

}

getPosts()
  .then(mydata=>{
    console.log(mydata)
  })
  .catch(error=>{
    console.log(error) // it will wont run.
  })
