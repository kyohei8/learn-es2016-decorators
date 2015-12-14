import SingleClass from '../src/exam/2/'
import Chai from 'chai';
const expect = Chai.expect;
import mochaSinon from 'mocha-sinon';
mochaSinon();

describe('exam2のテスト', () => {
  describe('Singletonのdecoratorが正常に動作するか', () => {
    it('call1のmethodが呼べる', () => {
      expect(SingleClass.call1()).to.be.eq('call1');
    });

    it('newができない', () => {
      expect(SingleClass).to.be.a('object');
      expect(SingleClass).to.not.be.a('function');
    });

    it('getInstanceを持っているかどうか', () => {
      expect(SingleClass).to.have.property('getInstance');
      expect(SingleClass.getInstance).to.be.a('function');
    });

    it('同一インスタンスかどうか', () => {
      const s1 = SingleClass.getInstance();
      const s2 = SingleClass.getInstance();
      expect(s1).to.deep.equal(s2);
    });
  });
});
