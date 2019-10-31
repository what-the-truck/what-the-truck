import React from "react";
import {TruckRegister} from '../component/TruckRegister'
import {shallow} from 'enzyme'
import {Login} from '../component/Login'


// test#1
describe("Should Type Input", () => {
    it("Input should have placeholder Type", () => {
      const land = shallow(<TruckRegister />);
      const input = land.find("input#Type");
      expect(input.props()).toHaveProperty("placeholder", "Type");
    });
  });

// test#2
describe("Should  Description textarea", () => {
    it("textarea should have placeholder Description", () => {
      const land = shallow(<TruckRegister />);
      const textarea = land.find("textarea#Description");
      expect(textarea.props()).toHaveProperty("placeholder", "Description");
    });
  });
// test#3
describe("h1 displaying correct value",() => {
    it('display correct value',() => {
        const land = shallow(<TruckRegister/>)
        const h1 = land.find('h1').at(0).text()
        expect(h1).toEqual("Truck Registration")

    })
})
// test#4
describe('button info',() => {
    it('display Submit button',()=> {
        const land = shallow(<TruckRegister/>)
        const btn = land.find('button').at(0).text()
        expect(btn).toEqual('Submit')
    })
})

// test#5
describe("Should Email Input", () => {
    it("Input should have placeholder Email", () => {
      const land = shallow(<Login />);
      const input = land.find("input#Email");
      expect(input.props()).toHaveProperty("placeholder", "Email");
    });
  });

