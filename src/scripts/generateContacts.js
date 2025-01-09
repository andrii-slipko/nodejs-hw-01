import { readContacts} from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

async function generateContacts(count) {
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
}

const count = 5;
generateContacts(count);