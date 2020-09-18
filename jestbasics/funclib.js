// funclib.js - Library of some function
var funclib = {
    Add: function (x, y) {
        return x +y;
    },

    Mult: function(x, y) {
        return x*y;
    },

    Power: function(x, y) {
        return Math.pow(x,y);
    }
}

module.exports = funclib;