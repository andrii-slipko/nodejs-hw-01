import { readContacts } from '../utils/readContacts.js';

async function countContacts() {
  const contacts = await readContacts();
  console.log(`Number of contacts: ${contacts.length}`);
}

countContacts();