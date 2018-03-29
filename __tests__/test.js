import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import * as Marshalling from "../index";
jest.mock('../index');

it('We can check if the consumer called the class constructor', () => {
    const m = new Marshalling.Marshall();
    expect(m);
  });