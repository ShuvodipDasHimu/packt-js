let company = {
  companyName: "Healthy Candy",
  activity: "food manufactoring",
  address: {
    street: "2nd Street",
    number: "5054",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};

company.address.zipcode = "33117";
company["address"]["number"] = "100";

company = {
  companyName: "Healthy Candy",
  acitivities: ["food manufacturing", "improving kids' health", "manufactoring toys"],
  address: {
    street: "2nd Street",
    number: "5054",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};

let activity = company.acitivities[1]
console.log(activity);

let addresses = [{
  street: "2nd street",
  number: "123",
  zipcode: "33116",
  city: "Miami",
  state: "Florida"
},
{
  street: "1st East avanue",
  number: "5",
  zipcode: "75001",
  city: "Addison",
  state: "Texas"
}
];

let streetName = addresses[0].street
console.log(streetName);

company = {
  companyName:"Healthy Candy",
  acitivities: ["food manufactoring", "improving kids health", "manufactoring toys"],
  address: [{
    street:"2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street:"1st East avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }],
  yearOfEstablishment: 2021
}


let streetName2 = company.address[0].street;