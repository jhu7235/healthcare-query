const parseString = require('xml2js').parseString;
const axios = require('axios');


axios.get('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/AllergyIntolerance?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB')
.then(res => {
  console.log(res.data);
})
.catch(console.error);


