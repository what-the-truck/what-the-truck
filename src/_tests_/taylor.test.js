import React from "react";
import {TruckRegister} from '../component/TruckRegister'
import {shallow} from 'enzyme'


//test #1
describe("Should see Name Input", () => {
    it("Input should have placeholder Name", () => {
      const land = shallow(<TruckRegister />);
      const input = land.find("input#Name");
      expect(input.props()).toHaveProperty("placeholder", "Name");
    });
  });
 //test#2
  describe("Should see Email Input", () => {
    it("Input should have type text", () => {
      const land = shallow(<TruckRegister />);
      const input = land.find("input#Email");
      expect(input.props()).toHaveProperty("placeholder", "Email");
    });
  });
  //test#3
  describe("Should see Password Input", () => {
    it("Input should have type password", () => {
      const land = shallow(<TruckRegister />);
      const input = land.find("input#Password");
      expect(input.props()).toHaveProperty("type", "password");
    });
  });
//test#4
  describe("Should see Phone Input", () => {
    it("Input should have type tel", () => {
      const land = shallow(<TruckRegister />);
      const input = land.find("input#Phone");
      expect(input.props()).toHaveProperty("type", "tel");
    });
  });
  //test#5
  describe("Should see Img URL Input", () => {
    it("Input should have type text", () => {
      const land = shallow(<TruckRegister />);
      const input = land.find("input#Img");
      expect(input.props()).toHaveProperty("type", "text");
    });
  });











