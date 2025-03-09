const theList = ["Laurence", "Svekis", true, 35, null, undefined, {
  test: 'one',
  score: 55
},
['one', 'two']];

theList.pop();
theList.splice(0, 1, "FIRST");
theList.splice(2, 3, "MIDDLE");
theList.push("LAST");
theList.splice(3, 2, "hello world");
// console.log(theList);

const storeItems = [];

const itemOne = {
  name:"MSI Computer",
  model:"BM64",
  cost:400000,
  quantity:101
}

const itemTwo = {
  name:"ASUS ROG Smartphone",
  model:"Gaming",
  cost:150000,
  quantity:102
}

const itemThree = {
  name: "Xiaomi Redmi",
  model:"World Champions",
  cost: 64000,
  quantity: 103
}

storeItems.push(itemOne,itemTwo,itemThree);
console.log(storeItems);
console.log(storeItems[2]["quantity"]);