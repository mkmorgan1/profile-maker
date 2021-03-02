import "core-js/stable";
import "regenerator-runtime/runtime";
import { getById, getByEmail, db } from '../database/index.js';

afterAll(done => {
  db.close();
  done();
});

describe('GET BY EMAIL', () => {
  test('TRUE EMAIL', async () => {
    const user = await new Promise((resolve, reject) => {
      getByEmail('mkmorgan1994@gmail.com', (err, res) => {
        err ? reject(err) : resolve(res);
      });
    }).then(result => result).catch(err => err);
    expect(user).toBeTruthy();
  });
  test('NULL EMAIL', async () => {
    const user = await new Promise((resolve, reject) => {
      getByEmail('masdfdfhjwertef94@gmailasdfasdf.com', (err, res) => {
        err ? reject(err) : resolve(res);
      });
    }).then(result => result).catch(err => err);
    expect(user).toBeNull();
  });
});

describe('GET BY ID', () => {
  test('TRUE ID', async () => {
    const user = await new Promise((resolve, reject) => {
      getById('60383009d4dc251574ca701b', (err, res) => {
        err ? reject(err) : resolve(res);
      });
    }).then(result => result).catch(err => err);
    expect(user).toBeTruthy();
  });
  test('NULL ID', async () => {
    const user = await new Promise((resolve, reject) => {
      getById('12345678d4dc123456ca701b', (err, res) => {
        err ? reject(err) : resolve(res);
      });
    }).then(result => result).catch(err => err);
    expect(user).toBeNull();
  });
});
