// import unit test assert function - built-in to node.js

const assert = require('assert');

// import Decorator and Paint_Can class

const Decorator = require('../decorator.js');

const Paint_Can = require('../paint_can.js')


describe('Decorator', function(){

    let decorator;
    let paint_can;

    beforeEach(function(){

        decorator = new Decorator([]);
        paint_can = new Paint_Can(5);

    });

    it("should start with an empty paint stock", function(){

        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])

    });







});