import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage.js'; 
import sinon from 'sinon';

describe('Login Page', () => {
  let subject = null;
  let submitting; 
  let touched; 
  let error; 

  beforeEach(() => {
    submitting = false;
    touched = false;
    error = null;
  });

  const buildSubject = () => {
    const props = {
      // The real redux form has many properties for each field,
      // including onChange and onBlur handlers. We only need to provide
      // the ones that will change the rendered output.
      fields: {
        username: {
          value: '',
          touched,
          error,
        },
        password: {
          value: '',
          touched,
          error,
        },
      },
      handleSubmit: fn => fn,
    };
    return shallow(<LoginPage {...props} />);
  };

  it('has username input', () => {
    subject = buildSubject();
    expect(subject.find('input#username')).toExist();
  });
  it('has password input', () => {
    subject = buildSubject();
    expect(subject.find('input#password')).toExist();
  });
  it('has remember me checkbox');
  it('has forget password link');
  it('has sign up link');
  it('displays loading icon when trying to login');
  it('displays error message');
  it('redirects to main page after successfully login');
});

