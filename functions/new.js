require('dotenv').config();
const faunadb = require('faunadb');
const shortid = require('shortid');
const axios = require('axios');
const querystring = require('querystring');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB
});

module.exports.handler = async event => {
  const data = querystring.parse(event.body);
  const uniquePath = shortid.generate();
  data.path = uniquePath;

  const page = {
    data: data
  };

  try {
    const queryResponse = await client.query(
      q.Create(
        q.Collection('page'),
        page
      )
    );
    try {
      await axios.post('https://api.netlify.com/build_hooks/5e1c353a1a247acd66723af7')
    } catch(error) {
      console.error('Netlify Build Error', error);
    }

    const response = {
      statusCode: 302,
      body: JSON.stringify(queryResponse),
      headers: {
        Location: `/mypage/${uniquePath}`
      }
    }
    return response;
  } catch(error) {
    const errorResponse = {
      statusCode: 400,
      body: JSON.stringify(error)
    }
    return errorResponse;
  }

  
}