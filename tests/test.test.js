import "core-js/stable";
import "regenerator-runtime/runtime";
import { getById, getByEmail, db } from '../database/index.js';

afterAll(done => {
  db.close();
  done();
});

describe('GET BY EMAIL', () => {
  test('TRUE EMAIL', async () => {
    const user = await getByEmail('mkmorgan1994@gmail.com').then(result => result);
    expect(user).toBeTruthy();
  });
  test('NULL EMAIL', async () => {
    const user = await getByEmail('masdfdfhjwertef94@gmailasdfasdf.com').then(result => result);
    expect(user).toBeNull();
  });
});


