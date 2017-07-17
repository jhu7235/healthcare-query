const request = require('request');
const parseString = require('xml2js').parseString;


//Note: request is just a simple npm module that allows us to make requests to the web, we will use axios in our actual project
//to test: do node trial.js
request('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/FamilyMemberHistory?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB', (err, req, res) => {
  let xml = res;

  if(!err) {

  //result is the res, and then we have ... off it
    parseString(res, (err, result) => {
      if(!err) console.log('result', result.Bundle.type);
      else console.error(err);
    });

  }

});