const request = require('supertest');
const server = require('./server.js');
// 1.  use `jest` and `supertest` to write the tests.
// 1.  Your API must be able to **create** and **delete** a _resource_ of your choosing.
// 1.  Write a minimum of two tests per route handler.
// 1.  Add tests to verify that the endpoints return the correct HTTP status codes.
// 1.  Write the **tests BEFORE** writing the route handlers.

describe('server.js', () => {
  it('should respond to appropriate requests at the endpoint', async () => {

    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
  })

  it('should get some kind of data, because sheesh', async () => {

    const response = await request(server).get('/');
    expect(response.body.data).toEqual(expect.any(Array));

  })

  it('must successfully insert a resource', async () => {

    const goodObject = {};

    const response = await request(server).post('/', goodObject);
    expect(response.status).toEqual(200);
  })

  it('should fail if passed the wrong schema on insert', async () => {

    const badObject = {}

    const response = await request(server).post('/', badObject);
    expect(response.status).toEqual(400);

  })

  it('must delete a resource', async () => {

    const response = await request(server).delete('/1');
    expect(response.status).toEqual(200);

  })

  it('should fail if passed an invalid deletion', async () => {

    const response = await request(server).delete('/0');
    expect(response.status).toEqual(500);
  })
})