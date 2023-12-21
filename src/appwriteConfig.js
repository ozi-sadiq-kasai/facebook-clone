import { Client,Databases,Account } from 'appwrite';

export const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
export const DATABASE_ID = process.env.REACT_APP_DATABASE_ID
export const COLLECTION_ID_MESSAGES = process.env.REACT_APP_COLLECTION_ID_MESSAGES


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('657f0ef5ae9de1be59b1');

export const databases = new Databases(client)
export const account = new Account(client)

export default client