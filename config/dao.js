const connection = require('./connection');

module.exports = {
  allQuery(queryString) {
    return new Promise(function(resolve, reject) {
      connection.query(queryString, function(err, res) {
        if (err) throw err;
        else if (!res) {
          console.log("No Results");
        } else {
          resolve(res);
        }
      });
    });
  },
  selectAll() {
    return allQuery(`SELECT * FROM burgers`)
  },
  insertOne(insertItem) {
    const queryString =  `INSERT INTO burgers (burger_name) values(${insertItem});`;
    return allQuery(queryString);
  },
  updateOne(updateColumn, updateItem, itemID) {
    queryString = `UPDATE burgers ${updateColumn} = ${updateItem} WHERE id = ${itemID}`;
    return allQuery(queryString);
  }
};