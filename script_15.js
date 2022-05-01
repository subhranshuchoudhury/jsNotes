// promise

const ingredients = ["vegitables","salt","rice"];

const myPromise = new Promise(function(resolve,reject){
    if(ingredients.includes("vegitables")&& ingredients.includes("salt")){
        resolve({value:"fried rice ready."})
    }else{
        reject(new Error("ingredients not available in kitchen."));
    }
});


myPromise.then((status)=>{
    console.log("Status: "+status.value);
},(error)=>{
    console.log(error);
})

//.catch(error)=>{console.log(error)}; This will print ingredients not available in kitchen, when error.
