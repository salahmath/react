const contacts = require('../models/contact');

// Function to get all contacts
exports.getContacts = (req, res) => {
  contacts
    .find({})
    .then((contacts) => {
      res.status(200).json({ contacts });
    })
    .catch((error) => {
      console.error("Error in getContacts:", error);
      res.status(400).json({ error: "An error occurred while fetching contacts." });
    });
};

// Function to delete a contact
exports.deleteContact = (req, res) => {
  const contactId = req.params.id;
  contacts
    .findByIdAndDelete(contactId)
    .then((contact) => {
      res.status(200).json({ message: "Contact deleted successfully" });
    })
    .catch((error) => {
      console.error("Error in deleteContact:", error);
      res.status(400).json({ error: "An error occurred while deleting the contact." });
    });
};

// Function to update a contact
exports.updateContact = (req, res) => {
  const contactId = req.params.id;
  const contactData = {
    nom: req.body.nom,
    numero: req.body.numero,
  };

  contacts
    .findByIdAndUpdate(contactId, contactData)
    .then((contact) => {
      res.status(200).json({ message: "Contact updated successfully" });
    })
    .catch((error) => {
      console.error("Error in updateContact:", error);
      res.status(400).json({ error: "An error occurred while updating the contact." });
    });
};

// Function to add a new contact
exports.addContact = (req, res) => {
  const contactData = {
    nom: req.body.nom,
    numero: req.body.numero,
  };

  const newContact = new contacts(contactData);

  newContact
    .save()
    .then((contact) => {
      res.status(200).json({ message: "Contact added successfully", contact });
    })
    .catch((error) => {
      console.error("Error in addContact:", error);
      res.status(400).json({ error: "An error occurred while adding the contact." });
    });
};
