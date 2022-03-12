/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height: 57,
  weight: 32
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('POST /dog', () => {
    it('should get 200', () =>
      agent.post('/dog').send({a:'hola'}).expect(200)
    );
    it('should create a new breed and return an object', () =>{
      agent.post('/dog').send({
        name: "Chihualoco",
        height_min: 13,
        height_max: 15,
        weight_min: 3,
        weight_max: 5,
        life_span: 12,
        temperaments:[1,3,7],
        imgUrl:null
      })
      .then(res =>{
        expect(res.body).to.be.a('Object');
      });
    })

    it('should return an error message if an attribute is missing', () =>
      agent.post('/dog').send({a:'hola'})
      .then(res =>{
        expect(res.body).to.haveOwnProperty('error');
      })
    );
  });

  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
    it('should get an array of all the breeds', () =>
      agent.get('/dogs').then(res =>{
        expect(res.body).to.be.a('Array');
      })
    );
    it('each list item should have a name attribute', () =>
      agent.get('/dogs').then(res =>{
        expect(res.body[0]).to.haveOwnProperty('name');
      })
    );
    it('each list item should have a weight attribute', () =>
      agent.get('/dogs').then(res =>{
        expect(res.body[0]).to.haveOwnProperty('weight');
      })
    );
    it('each list item should have a image attribute', () =>
      agent.get('/dogs').then(res =>{
        expect(res.body[0]).to.haveOwnProperty('img');
      })
    );
    it('each list item should have a temperament attribute', () =>
      agent.get('/dogs').then(res =>{
        expect(res.body[0]).to.haveOwnProperty('temperament');
      })
    );
  });

  describe('GET /dogs?breed="..."', ()=>{
    it('should get 200', () =>{
      agent.get('/dogs?breed=husky').expect(200);
    });
    it('should get an array of the found breeds', () =>
      agent.get('/dogs?breed=husky').then(res =>{
        expect(res.body).to.be.a('Array');
      })
    );

    it('should get breeds that contains Husky', () =>
      agent.get('/dogs?breed=husky').then(res =>{
        res.body.forEach(b => {
          expect(b.name).to.have.string('Husky');
        });
      })
    );

    it('should get an error message if breed is not found', () =>
      agent.get('/dogs?breed=chris').then(res =>{
        expect(res.body.error).to.be.equal('Breed not found!');
      })
    );
  });

  describe('GET /dogs/{idRaza}', ()=>{
    it('should get 200', () =>{
      agent.get('/dogs/226').expect(200);
    });
    it('should get an object with info of the breed', () =>
      agent.get('/dogs/226').then(res =>{
        expect(res.body).to.be.a('Object');
      })
    );
    it('each object should have a weight attribute', () =>
      agent.get('/dogs/226').then(res =>{
        expect(res.body).to.haveOwnProperty('weight');
      })
    );
    it('each object should have a height attribute', () =>
      agent.get('/dogs/226').then(res =>{
        expect(res.body).to.haveOwnProperty('height');
      })
    );
    it('each object should have a life_span attribute', () =>
      agent.get('/dogs/226').then(res =>{
        expect(res.body).to.haveOwnProperty('life_span');
      })
    );
  });

  describe('GET /temperament', () =>{
    it('should get 200', () =>{
      agent.get('/temperament').expect(200);
    });
    it('should get an array of all the breeds', () =>
      agent.get('/temperament').then(res =>{
        expect(res.body).to.be.a('Array');
      })
    );
  });
});
