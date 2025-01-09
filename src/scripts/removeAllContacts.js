import { writeContacts } from '../utils/writeContacts.js';

async function removeAllContacts() {
  await writeContacts([]);
}

removeAllContacts();