const axios = require('axios');
 
//Create necessary strings
const baseUrl = 'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/';
const createPatientQuery = (patient) => `Patient?given=${patient.given}&family=${patient.family}`;
let response;
const getPatientId = async (patient) => {
  response = await axios.get(`${baseUrl}${createPatientQuery(patient)}`);
  console.log('response', response.data);
  return response.data;
};


const patient1 = {given: 'Jason', family: 'Argonaut'};

getPatientId(patient1);
let thing = response;

console.log('thing', thing);
// console.log(await getPatientId(patient1));

  // axios.get(`${baseUrl}${createPatientQuery(patient1)}`)
  // .then(res => {
  //   console.log('data', res.data.entry);
  // })
  // .catch(console.error);


  // const response = await axios.get(`${baseUrl}${createPatientQuery(patient1)}`);
  // console.log('data', response.data);


const neededInfo = ['AllergyIntolerance', 'MedicationOrder', 'Condition', 'FamilyMemberHistory',
'Observation', 'DiagnosticReport', 'Immunization', 'Procedure', 'Device', 'DocumentReference', 'CarePlan'];

// neededInfo.forEach(item => {

//   axios.get(`https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/${item}?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB`)
//   .then(res => {
//     console.log('data', res.data);
//   })
//   .catch(console.error);

// });

