const contacts = require("././node-CommonJs-module/contacts");
const { program } = require("commander");
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const listContactId = await contacts.listContacts();
      return console.log(listContactId);
    case "getById":
      const oneContacts = await contacts.getContactById(id);
      return console.log(oneContacts);
    case "add":
      const newContacts = await contacts.addContact({ id, name, email, phone });
      return console.log(newContacts);
    case "deleteById":
      const deleteContact = await contacts.removeContact(
        "drsAJ4SHPYqZeG-83QTVW"
      );
      return console.log(deleteContact);
    default:
      return console.log("непрацює");
  }
};

program
  .option("-d, --deleteById")
  .option("-i, --getById, ")
  .option("-n, --name")
  .option("-e, --email")
  .option("-a, --add");

program.parse();

const options = program.opts();
invokeAction(options);
