const { Dog, Temperament, conn } = require('../../src/db.js');
const { expect, assert } = require('chai');
const boludo = {
  name: 'boludo',
}
const nala = {
  name: 'nala',
  weight: '35 - 40',
  height: '25 - 20'
}
const snow = {
  name: 'snow',
  weight: '40 - 45',
  height: '30 - 35'
}

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));

    it('should work when its has valid name', async() => {
      const result = await Temperament.create(boludo);
      expect(result.name).to.be.a("String");
    });

    describe('name', () => {

      it('should throw an error if name is null', (done) => {
        Temperament.create()
          .then(() => done(new Error('It requires a valid name')))
          .catch(e => {
            let grabbedErr = false;
            e.errors.forEach(err => {
              if (err.message === "temperament.name cannot be null") grabbedErr = true;
            });
            expect(grabbedErr).to.be.true;
            done();
          });
      });
      it('should be a String', async() =>{
        const result = await Temperament.create({
          name: 'Boludin',
        });
        expect(result.name).to.be.a("String");
      })
    });
  });

  describe('Many to Many Relations', () =>{
    beforeEach(async() => {
      await Dog.sync({ force: true });
      await Temperament.sync({ force: true });
      await Temperament.create(boludo);
    });

    describe('Passing 2 dogs', () =>{
      it('It should associate them to the TEMPERAMENT model', async() =>{
        const dog1 = await Dog.create(nala);
        const dog2 = await Dog.create(snow);
        await dog1.addTemperament([1]);
        await dog2.addTemperament([1]);
        let grabbedTemp = await Temperament.findOne({
          where:{id: 1},
          include: Dog
        });
        expect(grabbedTemp.dogs.length).to.be.equal(2);
      });
    });
    
  });
});
