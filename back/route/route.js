const express = require('express');
const router = express.Router();
const added = require('../function/function'); // Make sure this path is correct

router.get('/get', added.getContacts);
router.get('/:id/supprimer', added.deleteContact);
router.post('/:id/update', added.updateContact);
router.post('/ajouter', added.addContact);

module.exports = router;
