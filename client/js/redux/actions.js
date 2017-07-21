import axios from 'axios';
import {ALLERGIES_RECEIVED, MEDICATIONS_RECEIVED, CONDITIONS_RECEIVED, FAMILY_HISTORY_RECEIVED, 
	OBSERVATIONS_RECEIVED, REPORTS_RECEIVED, IMMUNIZATIONS_RECEIVED, PROCEDURES_RECEIVED, 
  DEVICES_RECEIVED, DOCUMENTS_RECEIVED, CARE_PLAN_RECEIVED} from './constants';


//Action Creators
const createAllergiesReceivedAction = allergies => ({ type: ALLERGIES_RECEIVED, allergies});
const createMedicationsReceivedAction = medications => ({ type: MEDICATIONS_RECEIVED, medications});
const createImmunizationsReceivedAction = immunizations => ({ type: IMMUNIZATIONS_RECEIVED, immunizations});
const createProceduresReceivedAction = procedures => ({ type: PROCEDURES_RECEIVED, procedures});
const createFamilyHistoryReceivedAction = conditions => ({ type: CONDITIONS_RECEIVED, conditions});


//Thunk Creators
export const fetchAllergiesThunkCreator = () => dispatch => {
  return axios.get('/api/request/patient/1/AllergyIntolerance')
  .then(response => {
    const allergies = response.data.entry;
    return allergies.map(allergy => {
      const resource = allergy.resource;
      const type = resource.resourceType;
      const patientName = resource.patient.display;
      const substance = resource.substance.text;
      const certainty = resource.reaction[0].certainty;
      const onsetAt = resource.reaction[0].onset;
      return {type, patientName, substance, certainty, onsetAt};
    });
  })
  .then(allergiesRelevantInfo => {
    dispatch(createAllergiesReceivedAction(allergiesRelevantInfo));
  })
  .catch(console.error);
};

export const fetchMedicationsThunkCreator = () => dispatch => {
  return axios.get('/api/request/patient/1/MedicationOrder')
  .then(response => {
    const medications = response.data.entry;
    return medications.map(medication => {
      const resource = medication.resource;
      const resourceId = resource.id

      const type = resource.resourceType;
      const dateWritten = resource.dateWritten
      const status = resource.status
      const patientName = resource.patient.display;

      const prescriber = resource.prescriber.display;
      const medicationReference = resource.medicationReference.display
      const dosageInstruction = resource.dosageInstruction[0].text;
      const routeOrMethod = resource.dosageInstruction[0].route.text
      const refillsListed = resource.dispenseRequest.numberOfRepeatsAllowed || 'none listed'
      return {type, patientName, dateWritten, status, prescriber, medicationReference, dosageInstruction, routeOrMethod, refillsListed, resourceId};
    });
  })
  .then(medicationsRelevantInfo => {
    dispatch(createMedicationsReceivedAction(medicationsRelevantInfo));
  })
  .catch(console.error);
};
