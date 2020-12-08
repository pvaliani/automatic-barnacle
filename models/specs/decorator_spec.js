// import unit test assert function - built-in to node.js

const assert = require('assert');

// import Decorator and Paint_Can class

const Decorator = require('../decorator.js');

const Paint_Can = require('../paint_can.js')

const Room = require("../room");


describe('Decorator', function(){

    let decorator;
    let paint_can_1;
    let paint_can_2;
    let room;

    beforeEach(function(){

        decorator = new Decorator([]);
        paint_can_1 = new Paint_Can(5);
        paint_can_2 = new Paint_Can(15);
        room = new Room(10);

    });

    it("should start with an empty paint stock", function(){

        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])

    });

    it("should be able to add a can of paint to paint stock", function(){

        decorator.addPaintCan(paint_can_1);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);


    });

    it('should be able to calculate total litres paint in stock', function() {
        decorator.addPaintCan(paint_can_1);
        decorator.addPaintCan(paint_can_2);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 20)
    });

    it('should be able to calculate whether enough paint exists to paint a room', function() {
        decorator.addPaintCan(paint_can_2);
        const actual = decorator.checkRoom(room);
        assert.strictEqual(actual, true);
    });

    it('should be able to paint a room if enough stock', function() {
        decorator.addPaintCan(paint_can_2);
        const actual = decorator.paintRoom(room);
        assert.strictEqual(actual, true);
    });











});