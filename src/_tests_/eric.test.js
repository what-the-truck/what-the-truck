import React from 'react'
//render allows the rendering of all components and act will wait for all events such as axios to resolve
import {shallow} from 'enzyme'
import RegisterOptions from '../component/RegisterOptions'
import Header from '../component/Header'

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
describe("h1 displaying correct value",() => {
    it('display correct value',() => {
        const land = shallow(<Header/>)
        const h1 = land.find('h1').at(0).text()
        expect(h1).toEqual("What the Truck?")

    })
})










