import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import HomePage from './HomePage.js'; 

describe('Home Page', () => {
  it('has title', () => {
    const wrapper = shallow(<HomePage />);
    const title = wrapper.find('h1').first();
    expect(title.text()).toEqual('Kasih.in'); 
  });
  it('has tagline', () => {
    const wrapper = shallow(<HomePage />);
    const tagline = wrapper.find('h4').first();
    expect(tagline.text()).toEqual('Helping is easy.'); 
  });
});
