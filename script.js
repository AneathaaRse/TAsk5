// for loop

const data = {
    "name": "Aneathaa RSe",
    "age": 27
    "contact": {
      "email": "anethaarse97@gmail.com",
      "phone": "+1234567890",
      "location":"Madurai"
    },
    
}
        
    "education": [
      {
        "school": "Sree Sowdambika Convent matric.higher.sec.school"
        "degree": "BACHELOR of ENGINEERING",
        "university": "Anna university",
        "location": "chennai",
        "dates": "2014 - 2018"
      },
     "skills":Javascript,Python,Html

    ],
   
  for (let key in data) {
    if (Array.isArray(data[key])) {
      console.log(`${key}:`);
      data[key].forEach(item => console.log(`- ${item}`));
    } else if (typeof data[key] === 'object') {
      console.log(`${key}:`);
      for (let innerKey in data[key]) {
        console.log(`- ${innerKey}: ${data[key][innerKey]}`);
      }
    } else {
      console.log(`${key}: ${data[key]}`);
    }
  }

  //forin loop
  for (let key in data) {
    if (Array.isArray(data[key])) {
      console.log(`${key}:`);
      data[key].forEach(item => console.log(`- ${item}`));
    } else if (typeof data[key] === 'object') {
      console.log(`${key}:`);
      for (let innerKey in data[key]) {
        console.log(`- ${innerKey}: ${data[key][innerKey]}`);
      }
    } else {
      console.log(`${key}: ${data[key]}`);
    }
  }


  //forEach loop

  Object.keys(data).forEach(key => {
    if (Array.isArray(data[key])) {
      console.log(`${key}:`);
      data[key].forEach(item => console.log(`- ${item}`));
    } else if (typeof data[key] === 'object') {
      console.log(`${key}:`);
      Object.keys(data[key]).forEach(innerKey => {
        console.log(`- ${innerKey}: ${data[key][innerKey]}`);
      });
    } else {
      console.log(`${key}: ${data[key]}`);
    }
  });

  //forof loop

  for (let skill of data.skills) {
    console.log(skill);
  }
  
  // Using for...of with object keys
  for (let key of Object.keys(data)) {
    if (Array.isArray(data[key])) {
      console.log(`${key}:`);
      for (let item of data[key]) {
        console.log(`- ${item}`);
      }
    } else if (typeof data[key] === 'object') {
      console.log(`${key}:`);
      for (let innerKey of Object.keys(data[key])) {
        console.log(`- ${innerKey}: ${data[key][innerKey]}`);
      }
    } else {
      console.log(`${key}: ${data[key]}`);
    }
  }

