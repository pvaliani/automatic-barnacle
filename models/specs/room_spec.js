// import unit test assert function - built-in to node.js

const assert = require('assert');

// import Room class

const Room = require('../room.js')


describe('Room', function(){

    // create new room object in parent for describe method
    let room;

    // beforeEach allows each test to access the new room object for testing purposes

    beforeEach(function(){

        room = new Room(5)

    });

    it("should have an area", function(){

        // set actual to be the area attribute of room object and assert actual to expected value of 5
        const actual = room.area;
        assert.strictEqual(actual, 5)

    });

    it("should start unpainted", function(){

        // set actual to be current room painted status (which is false) and compare to expected result of false
        const actual = room.painted;
        assert.strictEqual(actual, false)


    });



});

