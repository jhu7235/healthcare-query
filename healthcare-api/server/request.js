const axios = require('axios');

//axios automatically converts xml to request 
axios.get('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/FamilyMemberHistory?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB')
.then(res => {
  console.log('data', res.data);
})
.catch(console.error);
