import React from 'react'
//render allows the rendering of all components and act will wait for all events such as axios to resolve
import {shallow} from 'enzyme'
import RegisterOptions from '../component/RegisterOptions'
import truckReducer from '../ducks/truckReducer'
import userReducer from '../ducks/userReducer'

//axios must be imported when axios calls are being made




// test #1

describe("button Truck",() => {
    it('display Truck button',() => {
        const land = shallow(<RegisterOptions/>)
        const btn = land.find('button').at(1).text()
        expect(btn).toEqual("Truck")

    })
})

// test #2

describe("h1 displaying correct value",() => {
    it('display correct value',() => {
        const land = shallow(<RegisterOptions/>)
        const h1 = land.find('h1').at(0).text()
        expect(h1).toEqual("RegisterOptions")

    })
})

//test #3
describe("Link displaying correct value",() => {
    it('display correct value',() => {
        const land = shallow(<RegisterOptions/>)
        const Link = land.find('Link').at(0).text()
        expect(Link).toEqual("User")

    })
})


//test #4
describe("truckReducer", () => {
  it("should return the initial state", () => {
    expect(truckReducer(undefined, {})).toEqual({
      loggedIn: false,
      truckId: null,
      truck: null,
      name: "",
      email: "",
      foodTruck: [],
      eventId: null,
      events: [],
      attend: [],
      follows: []
    });
  });
});

// test #5
describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      loggedIn: false,
      name: "",
      phone: "",
      email: "",
      userId: null,
      user: null
    });
  });
});










