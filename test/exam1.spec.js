import Klass from '../src/exam/1/'
import Chai from 'chai';
const expect = Chai.expect;
import mochaSinon from 'mocha-sinon';
mochaSinon();
import Chance from 'chance';
const chance = new Chance();

describe('exam1のテスト', () => {
  describe('非推奨decoratorが正常に動作するか', () => {
    beforeEach(function() {
      this.sinon.stub(console, 'warn');
    });

    it('method1が正常に動作するか', () => {
      const kw = chance.string({length: 5});
      const k = new Klass(kw);
      const actual = k.method1();
      expect( actual ).to.be.a('string');
      expect( actual ).to.equal(`${kw}のメソッド`);
    });

    it('@deprecatedが正常に動作するか', () => {
      const kw = chance.string({length: 5});
      const k = new Klass(kw);
      const actual = k.method1();
      expect( actual ).to.be.a('string');
      expect( actual ).to.equal(`${kw}のメソッド`);
      expect( console.warn.calledOnce ).to.be.true
      expect( console.warn.calledWith(`method1 is deprecated`)).to.be.true;
    });
  });
});
