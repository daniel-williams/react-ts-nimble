import * as React from 'react';
import * as ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
// import { shallow, render } from 'enzyme';


import { default as Home } from '../src/Home';

describe('Home Unit Tests', () => {
  let renderedComponent = ReactTestUtils.renderIntoDocument(<Home></Home>);
  // const wrapper = shallow(<Home></Home>);

  it('should render', () =>  {
    // const el = wrapper.find('div');

    // expect(el.length).to.be.equal(1);
    expect(renderedComponent).to.not.be.undefined;
  });

});
