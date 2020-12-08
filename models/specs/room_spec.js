// import unit test assert function - built-in to node.js

const assert = require('assert');

// import Room class

const Room = require('../room.js')


describe('Room', function(){

    // create new room object in parent for describe method
    let room;

    beforeEach(function(){

        room = new Room(5)

    });



});

