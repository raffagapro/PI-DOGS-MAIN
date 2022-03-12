const { Dog, Temperament, conn } = require('../../src/db.js');
const { expect, assert } = require('chai');
const nala = {
  name: 'nala',
  weight: '35-40',
  height: '25-20'
}
const fakeTemps = ['boludo', 'boludizimo', 'enfrijolado'];

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));

    it('should work when its a valid name, height, & weight', async() => {
      const result = await Dog.create(nala);
      expect(result.name).to.be.a("String");
    });

    describe('name', () => {

      it('should throw an error if name is null', (done) => {
        Dog.create({
          weight: '35-40',
          height: '25-20'
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(e => {
            let grabbedErr = false;
            e.errors.forEach(err => {
              if (err.message === "dog.name cannot be null") grabbedErr = true;
            });
            expect(grabbedErr).to.be.true;
            done();
          });
      });
      it('should be a String', async() =>{
        const result = await Dog.create({
          name: 'Pug',
          height: 7,
          weight: 8
        });
        expect(result.weight).to.be.a("String");
      })
    });

    describe('height', () => {
      it('should throw an error if height is null', (done) => {
        Dog.create({
          name: 'nala',
          weight: '25-20'
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(e => {
            let grabbedErr = false;
            e.errors.forEach(err => {
              if (err.message === "dog.height cannot be null") grabbedErr = true;
            });
            expect(grabbedErr).to.be.true;
            done();
          });
      });
      it('should be a String', async() =>{
        const result = await Dog.create({
          name: 'Pug',
          height: 7,
          weight: 8
        });
        // console.log(result);
        expect(result.height).to.be.a("String");
      })
    });

    describe('weight', () => {
      it('should throw an error if weight is null', (done) => {
        Dog.create({
          name: 'nala',
          height: '25-20'
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(e => {
            let grabbedErr = false;
            e.errors.forEach(err => {
              if (err.message === "dog.weight cannot be null") grabbedErr = true;
            });
            expect(grabbedErr).to.be.true;
            done();
          });
      });
      it('should be a String', async() =>{
        const result = await Dog.create({
          name: 'Pug',
          height: 7,
          weight: 8
        });
        expect(result.weight).to.be.a("String");
      })
    });
  });

  describe('Many to Many Relations', () =>{
    beforeEach(async() => {
      await Dog.sync({ force: true });
      await Temperament.sync({ force: true });
      fakeTemps.forEach(async f => await Temperament.create({ name: f }));
    });

    describe('TEMP: enfrijolado', () =>{
      it('should be associated to the DOG Model', async() => {
        const result = await Dog.create(nala);
        const enfriTemp = await Temperament.findOne({where:{name:'enfrijolado'}});
        await result.addTemperament([enfriTemp.id]);
        let grabbedDog = await Dog.findOne({
          where:{id: result.id},
          include: Temperament
        });
        expect(grabbedDog.temperaments[0].name).to.be.equal("Enfrijolado");
      });
    });

    describe('Passing 3 temperaments', () =>{
      it('It should associate 3 temperaments to the DOG model', async() =>{
        const result = await Dog.create(nala);
        await result.addTemperament([1,2,3]);
        let grabbedDog = await Dog.findOne({
          where:{id: result.id},
          include: Temperament
        });
        expect(grabbedDog.temperaments.length).to.be.equal(3);
      });
    });
    
  });
});
