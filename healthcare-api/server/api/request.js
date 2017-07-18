const axios = require('axios');
const router = require('express').Router();

//axios automatically converts xml to request 
router.get('/patient/', (req, res, next) => {
	axios.get('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/FamilyMemberHistory?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB')
	.then(res => {
	  console.log('data', res.data);
	});
})
.catch(console.error);
