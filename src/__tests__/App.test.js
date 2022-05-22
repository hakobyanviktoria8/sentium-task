import React from 'react';  
import App from "./../App"  
import NavBar from '../components/NavBar';
import { shallow } from "enzyme"; 

describe('A suite', function() {
    it('App component render successfully', function() {
        expect(shallow(<App />));
    });
    it('App component contain className as app', function() {
        expect(shallow(<App />).is('.app')).toBe(true);
    });
    it('App component contain NavBar component', function() {
        expect(shallow(<App />).contains(<NavBar />)).toBe(true);
    });
});
