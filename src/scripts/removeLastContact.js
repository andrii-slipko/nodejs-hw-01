import { readContacts} from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
  } else {
    console.log('No contacts to remove.');
  }
}

removeLastContact();