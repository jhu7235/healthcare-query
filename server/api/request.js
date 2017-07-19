const axios = require('axios');
const router = require('express').Router();

//Defining useful constants
const baseUrl = 'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/';
// const medicalInfo = ['AllergyIntolerance', 'MedicationOrder', 'Condition', 'FamilyMemberHistory',
// 'Observation', 'DiagnosticReport', 'Immunization', 'Procedure', 'Device', 'DocumentReference', 'CarePlan'];

//Creating helper functions
const createPatientQuery = patient => `Patient?given=${patient.given}&family=${patient.family}`;
const getPatientId= async patient => {
  const response = await axios.get(`${baseUrl}${createPatientQuery(patient)}`);
  const patientId = response.data.entry[0].link[0].url.split("/").pop();
  return patientId;
};
const getRelevantMedicalInfo = async (patientId, medicalInfoWanted) => {
  const response = await axios.get(`${baseUrl}${medicalInfoWanted}?patient=${patientId}`);
  return response.data;
};

//Dummy patients
const patient1 = {given: 'Jason', family: 'Argonaut'};


//Routes
router.get('/patient', (req, res, next) => {
  getPatientId(patient1)
  .then(patientId => res.send(patientId))
  .catch(next);
});

router.get('/patient/:patientId/:relevantMedicalInfo', (req, res, next) => {

  const medicalInfoWanted = req.params.relevantMedicalInfo;
  const patient = req.params.patientId; //we wont have this yet and we will eventually need to make it an object or change getPatientId

  getPatientId(patient1)
  .then(patientId => {
    getRelevantMedicalInfo(patientId, medicalInfoWanted)
    .then(medicalData => {
      res.json(medicalData);
    })
    .catch(console.error);
  })
  .catch(console.error);

});

module.exports = router;
