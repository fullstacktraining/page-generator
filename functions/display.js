require('dotenv').config();
const faunadb = require('faunadb');
const pageTemplate = require('./template.js');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB
});

module.exports.handler = async event => {
  const path = event.queryStringParameters.id.replace('/', '');
  try {
    const queryResponse = await client.query(
      q.Get(q.Match(q.Index('page_by_path'), path))
    );

    const response = {
      statusCode: 200,
      body: pageTemplate(queryResponse.data)
    }
    return response;
  } catch(error) {
    const errorResponse = {
      statusCode: 301,
      headers: {
        Location: `/notfound.html`
      }
    };
    return errorResponse
  }
}