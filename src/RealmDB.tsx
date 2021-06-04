import Realm from 'realm';

// DB Schema Design -------
const FormSchema = {
  name: 'Form',
  properties: {
    _id: 'int',
    name: 'string',
    place: 'string',
    company: 'string',
  },
  primaryKey: '_id',
};

// Initialize DB -----------
let realm = new Realm({
  path: 'formrealm',
  schema: [FormSchema],
});

// Get List from DB ---------
const getFormList = () => {
  return realm.objects('Form');
};

// Add entry into DB --------
const addToForm = (name: string, place: string, cmpy: string) => {
  let id = realm.objects('Form').max('_id') + 1;
  realm.write(() => {
    const form = realm.create('Form', {
      _id: isNaN(id) ? 0 : id,
      name: name,
      place: place,
      company: cmpy,
    });
  });
};

// Delete All entries --------
const deleteForm = () => {
  realm.write(() => {
    realm.delete(getFormList());
  });
};

export default realm;

export {getFormList, addToForm, deleteForm};
