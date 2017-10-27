'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */
describe('Basic math', function() {

    it('should add numbers correctly', function() {
        //javascript
        let result = 1+1;
        //assertion
        expect(result).toEqual(2)
    });

});

describe('invertCase() function', function() {

    it('Returns upper case', function() {
        let result = 'ABCDEFG';
        let test = invertCase('abcdefg');
        expect(test).toEqual(result);
    });

})

describe('button displays correctly', function() {
    
        it('Button Displayed', function() {
            // let button = document.querySelector('button');
            document.querySelector('#panic-button').click();
            expect(h1.textContent).toEqual('Red Alert!');
        });
    
    })