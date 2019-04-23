/**
 * node uses expresss instead of http
 * 
 * representational state transfer
 * 
 * server is used for CRUD operations
 * 
 * http://vidly.com/api/customers
 * is an endpoint for customers
 * 
 * /api/ is a convention
 * 
 * HTTP methods:
 * GET
 * POST
 * PUT
 * DELETE
 * 
 * to get the list of customers
 * send a get request to /api/customers
 * 
 * repsonse:
 * [
 *      {id: 1, name: ''},
 *      ...
 * ]
 * 
 * if we want a single customer
 * we should include the id of that customer in the address
 * GET /api/customers/1
 * 
 * response:
 * {id: 1, name: ''}
 * 
 * to update a customer
 * we should send an http put request to the endpoint
 * /api/customers/1
 * 
 * to delete a customer
 * we should send an http delete request to the endpoint
 * /api/customers/1
 * 
 * to create a customer
 * we should send an http post request to the endpoint
 * /api/customers
 * (no id in the address)
 * 
 * RESTful convention:
 * GET /api/customers
 * GET /api/customers/1
 * PUT /api/customers/1
 * DELETE /api/customers/1
 * POST /api/customers
 * 
 * --
 * introducing express
 * 
 * When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same.
 * 
 * Frameworks add more routes while keeping the code maintainable
 * 
 * nodemon - nodemonitor
 * npm i -g nodemon
 * 
 * then run nodemon index.js
 * 
 * in cmd to set the port:
 * set PORT = 5000
 * 
 * 
 * 
 * 
 * 
 */