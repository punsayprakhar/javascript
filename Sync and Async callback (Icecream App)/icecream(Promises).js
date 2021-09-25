let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
  };

  let is_shop_open = false;

  let order = (time, work) =>{
        
        return new Promise( (resolve, reject)=>{

            if( is_shop_open ){
                setTimeout(()=>{
                    resolve(work())
                }, time)
            }
            else{
                reject( console.log("Our shop is closed"));
            }

        })
  }

  order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
  .then(()=>{
      order(2000, ()=>console.log(`Fruits are chopped`))
  })
  .then(()=>{
    order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`))
})
.then(()=>{
    order(1000, ()=>console.log(`Machine was started`))
})
.then(()=>{
    order(2000, ()=>console.log(`${stocks.holder[0]} is selected`))
})
.then(()=>{
    order(2000, ()=>console.log(`${stocks.toppings[0]} are added`))
})
.then(()=>{
    order(2000, ()=>console.log(`Icecream is served`))
})
.catch(()=>{
    console.log("Customer left")
  })
  .finally(()=>{
    console.log("end of day")
  })