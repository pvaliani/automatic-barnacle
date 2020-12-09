// import unit test assert function - built-in to node.js

const assert = require('assert');

// import Decorator and Paint_Can class

const Decorator = require('../decorator.js');

const Paint_Can = require('../paint_can.js')

const Room = require("../room");


describe('Decorator', function(){
    // define instance variables which are local to the describe parent class

    let decorator;
    let paint_can_1;
    let paint_can_2;
    let room;

    beforeEach(function(){
        // create new test instance objects for test methods below

        decorator = new Decorator([]);
        paint_can_1 = new Paint_Can(5);
        paint_can_2 = new Paint_Can(15);
        room = new Room(10);

    });

    it("should start with an empty paint stock", function(){

        // set actual to the stock property of the empty decorator object and compare to an empty list

        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])

    });

    it("should be able to add a can of paint to paint stock", function(){

        // add paint_can_1 to the empty decorator list then check that the list of the length has increased by finding the length of the stock property and compare it to the value of 1 representing increment

        decorator.addPaintCan(paint_can_1);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
        // two asserts added here - one checks the array object against stock so still 11 tests but two asserts for robustness
        assert.deepStrictEqual(decorator.stock, [paint_can_1])


    });

    it('should be able to calculate total litres paint in stock', function() {

        // add new paint cans to the decorator list, store the totalLitres in a variable called actual. The total of the two paint can objects is 20 litres therefore actual is compared against the value of 20

        decorator.addPaintCan(paint_can_1);
        decorator.addPaintCan(paint_can_2);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 20)
    });

    it('should be able to calculate whether enough paint exists to paint a room', function() {

        // A room requires at least 10 litres therefore we need to select paint_can_2 for the test. Add the paint can to the decorator list. Then apply the checkRoom method with this room instance and paint can to prove that the decorator has enough paint for the room. checkRoom calls totalLitres therefore a paint can of the correct size needs to be passed for the test to pass

        decorator.addPaintCan(paint_can_2);
        const actual = decorator.checkRoom(room);
        assert.strictEqual(actual, true);
    });


    it('should be able to paint a room if enough stock', function() {

        // should check that the value returned from checkRoom is true and compare to actual i.e true

        decorator.addPaintCan(paint_can_2);
        const actual = decorator.paintRoom(room);
        assert.strictEqual(actual, true);
    });

// ---------------- EXTENSIONS SOLNS --------------------------------









});