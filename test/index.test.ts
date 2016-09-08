import { expect } from 'chai';

describe('Unit Tests', () => {

  it('true should be true', () =>  {
    expect(true, 'true should be true').to.be.true;
  });

  it('false should be false', () =>  {
    expect(false, 'false should be false').to.be.false;
  });

});

