const Room = function (area){
    this.area = area;
    this.painted = false;

}

// Method to set a room to painted once painted

Room.prototype.paintRoom = function () {
    this.painted = true;
  }


// Export Room class for test file

module.exports = Room;