require('dotenv').config();
const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB
});

module.exports = () => {
  return new Promise((resolve, reject) => {
    client.query(
      q.Paginate(q.Match(q.Ref('indexes/all_pages')), { size: 100 })
    ).then(response => {
      const pages = response.data;
      const getAllDataQuery = pages.map(ref => {
        return q.Get(ref);
      });
      return client.query(getAllDataQuery).then(ret => {
        resolve(ret);
      });
    }).catch((error) => {
      console.error({ error });
      reject(error);
    });
  });
}