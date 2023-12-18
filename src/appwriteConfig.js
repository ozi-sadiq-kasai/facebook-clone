import { Client } from 'appwrite';

export const PROJECT_ID ='657f0ef5ae9de1be59b1'
export const DATABASE_ID ='657f14ea5b5dc4d1be22'
export const COLLECTION_ID_MESSAGES ='657f1500cce8a5a335e3'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('657f0ef5ae9de1be59b1');