let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    )
  }

  passengers() {
    passengers = [];
    return store.trips.filter(
      function() {
        if (trip.driverId === this.id) {
          passengers.push(trip.passenger);
        }
        return passengers;
      }.bind(this)
    )
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name
    store.passengers.push(this);
  }

  // setDriver() {

  // }

  trips() {

  }

  drivers() {

  }
}

let Id = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++Id;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  // setDriver(driver) {
  //   this.driverId = driver.id;
  // }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}
