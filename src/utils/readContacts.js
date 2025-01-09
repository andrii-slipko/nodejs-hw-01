import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
}