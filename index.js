let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  //initialized with a name; returns a JavaScript object that has attributes of id, and name
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  //returns all of the trips that a passenger has taken
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }

  //returns all of the passengers that a driver has taken on a trip
  passengers() {
    let ps = [];
    let trips = this.trips();
    trips.forEach((e) => {
      ps.push(e.passenger());
    });
    return ps;
  }
}

let passengerId = 0;

class Passenger {
  //initialized with a name; returns a JavaScript object that has attributes of id, and name
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  //returns all of the trips that a passenger has taken
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }

  drivers() {
    let ds = [];
    let trips = this.trips();
    trips.forEach((e) => {
      ds.push(e.driver());
    });
    return ds;
  }
}

let Id = 0;

class Trip {
  // initialized with an instance of driver and an instance of passenger; returns a JavaScript that object has attributes id, driverId, and passengerId
  constructor(driver, passenger) {
    this.id = ++Id;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  //returns the driver associated with the trip
  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }



  //returns the passenger associated with the trip
  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}
