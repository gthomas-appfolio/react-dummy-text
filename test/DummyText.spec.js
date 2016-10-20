/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import DummyText from '../src/components/DummyText.js';

/**
 * Sample unit test.
 */
describe('<DummyText />', () => {
  const component = mount(<DummyText />);
  it('should render correctly', () => {
    assert(component);
  });

  // TODO assert blocks and props
});
