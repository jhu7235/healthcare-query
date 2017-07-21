import axios from 'axios';
import {ALLERGIES_RECEIVED, MEDICATIONS_RECEIVED, CONDITIONS_RECEIVED, FAMILY_HISTORY_RECEIVED,
	OBSERVATIONS_RECEIVED, REPORTS_RECEIVED, IMMUNIZATIONS_RECEIVED, PROCEDURES_RECEIVED,
  DEVICES_RECEIVED, DOCUMENTS_RECEIVED, CARE_PLAN_RECEIVED} from './constants';


//Action Creators
const createAllergiesReceivedAction = allergies => ({ type: ALLERGIES_RECEIVED, allergies});
const createMedicationsReceivedAction = medications => ({ type: MEDICATIONS_RECEIVED, medications});
const createImmunizationsReceivedAction = immunizations => ({ type: IMMUNIZATIONS_RECEIVED, immunizations});
const createProceduresReceivedAction = procedures => ({ type: PROCEDURES_RECEIVED, procedures});
const createFamilyHistoryReceivedAction = familyHistory => ({ type: FAMILY_HISTORY_RECEIVED, familyHistory});


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
      const onsetAt = resource.reaction[0].onset.slice(0, 10);
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
      const routeOrMethod = resource.dosageInstruction[0].route.text;
      let refillsListed = resource.dispenseRequest.numberOfRepeatsAllowed || 'no';
      refillsListed += ' refills listed';
      return {type, patientName, dateWritten, status, prescriber, medicationReference, dosageInstruction, routeOrMethod, refillsListed, resourceId};
    });
  })
  .then(medicationsRelevantInfo => {
    dispatch(createMedicationsReceivedAction(medicationsRelevantInfo));
  })
  .catch(console.error);
};


export const fetchImmunizationsThunkCreator = () => dispatch => {
   return axios.get('/api/request/patient/1/Immunization')
  .then(response => {
    const immunizations = response.data.entry;
    return immunizations.map(immunization => {
      const resource = immunization.resource;
      const resourceId = resource.id;

      const type = resource.resourceType;
      const date = resource.date.slice(0, 10);
      const wasNotGiven = resource.wasNotGiven;
      const patientName = resource.patient.display;

      const vaccineCode = resource.vaccineCode.text;
      const vaccineCode2 = resource.vaccineCode.coding[0].display;
      return {type, patientName, resourceId, date, wasNotGiven, vaccineCode, vaccineCode2 };
    });
  })
  .then(immunizationsRelevantInfo => {
    dispatch(createImmunizationsReceivedAction(immunizationsRelevantInfo));
  })
  .catch(console.error);
};

export const fetchProceduresThunkCreator = () => dispatch => {
  return axios.get('/api/request/patient/1/Procedure')
  .then(response => {
    const procedures = response.data.entry;
    return procedures.map(procedure => {
      const resource = procedure.resource;
      const resourceId = resource.id;

      const patientName = resource.subject.display;
      const type = resource.resourceType;
      const status = resource.status;
      const date = resource.performedDateTime.slice(0, 10) + ' Time: ' + resource.performedDateTime.slice(11, 16);
      const procedure1 = resource.code.text;
      const procedure2 = resource.code.coding[0].display;

      return {type, patientName, resourceId, status, date, procedure1, procedure2};
    });
  })
  .then(proceduresRelevantInfo => {
    dispatch(createProceduresReceivedAction(proceduresRelevantInfo));
  })
  .catch(console.error);
};

export const fetchFamilyHistoryThunkCreator = () => dispatch => {
  return axios.get('/api/request/patient/1/FamilyMemberHistory')
  .then(response => {
    const familyHistory = response.data.entry;
    return familyHistory.map((familyHistoryEntry, index) => {
      const resource = familyHistoryEntry.resource;
      const resourceId = index;
      const type = resource.resourceType;
      const date = resource.date;
      const patientName = resource.patient.display;

      const relativeName = resource.name;
      const relationship = resource.relationship.text;

      let conditionsArray = [];

      if (resource.condition) {
        resource.condition.forEach((condition, i) => {
          conditionsArray.push(resource.condition[i].code.text);
        });
      }

      return {type, patientName, resourceId, date, relativeName, relationship, conditionsArray };
    });
  })
  .then(familyHistoryRelevantInfo => {
    dispatch(createFamilyHistoryReceivedAction(familyHistoryRelevantInfo));
  })
  .catch(console.error);
};
