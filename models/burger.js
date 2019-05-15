var orm = require("../config/orm");

var burger = {
    all: (cb) => {
        orm.selectAll("burgers", (result) => {
            cb(result)
        })
    },
    create: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }


};



module.exports = burger;