import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(contacts) {
  try {
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
}