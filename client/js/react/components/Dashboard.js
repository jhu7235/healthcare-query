import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllergyDash from './allergy/AllergyDash';
import MedicationDash from './medication/MedicationDash';
import FamilyHistoryDash from './family-history/FamilyHistoryDash';
import ImmunizationDash from './immunization/ImmunizationDash';
import ProcedureDash from './procedure/ProcedureDash';

export default function Dashboard () {
  return (

    <div>
      <AllergyDash />
      <MedicationDash />
      <FamilyHistoryDash />
      <ImmunizationDash />
      <ProcedureDash />
    </div>

  );
}

