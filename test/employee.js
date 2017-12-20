'use strict';
var server = require('../server/server')
var request = require('supertest')(server)
describe('/Users test suite', function() {
describe('login/logout for User', function() {
    it('should be able to create a employee without address', function(done) {
        request.post('/api/Employees')
            .send({
                first_name: 'Test', 
                last_name: 'User2', 
                phone: '9832898983',
                email:'testuser2@maiil.com'
            })
            .expect(200, done);
    });
    it('should be able to create a employee with address', function(done) {
        request.post('/api/Employees')
            .send({
                first_name: 'Test', 
                last_name: 'User2', 
                phone: '9832898983',
                email:'testuser2@maiil.com',
                address:'address2'
            })
            .expect(200, done);
    });
    it('should be able to create a employee with address', function(done) {
        request.get('/api/Employees')
            .expect(200, done);
    });
    it('should not be able to create a employee without lastname', function(done) {
        request.post('/api/Employees')
            .send({
                first_name: 'Test', 
                phone: '9832898983',
                email:'testuser2@maiil.com',
                address:'address2'
            })
            .expect(422, done);
    });
});
})