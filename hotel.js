var jsHotel = {
    hotelName: "JavaScript Hotel",
    hotelMotto: "We're the Object of Your Desire!",
    availableRooms: [101, 102, 103, 104, 105],
    bookedRooms: [],
    roomPrice: 350,
    
    bookRoom: function() {
        (this.bookedRooms = this.bookedRooms.concat(this.availableRooms.shift()));
    },
    
    showAvailableRooms: function() {
        console.log("Here are the available rooms:", this.availableRooms);
    },
    
};