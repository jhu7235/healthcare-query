const axios = require('axios');

let allergyOutputArray = []
axios.get('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/AllergyIntolerance?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB')
.then(res => {
  let allergyDataArray = res.data.entry
  console.log(allergyDataArray)
  for (let i = 0; i < allergyDataArray.length; i++) {

    let type = allergyDataArray[i].resource.resourceType
    console.log(res.data.entry)
    console.log('Type--, ', type)
    console.log('patient name--, ', allergyDataArray[i].resource.patient.display)
    console.log('Substance--, ', allergyDataArray[i].resource.substance.text)
    console.log('Certainty--, ', allergyDataArray[i].resource.reaction[0].certainty, ' with onset at ', allergyDataArray[i].resource.reaction[0].onset)
    console.log('')
  }
})
.catch(console.error);


