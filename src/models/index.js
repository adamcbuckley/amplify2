// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Book, Author } = initSchema(schema);

export {
  Book,
  Author
};