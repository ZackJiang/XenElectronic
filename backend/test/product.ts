import { expect } from 'chai';
import * as sinon from 'sinon';
import { productModel } from '../src/models/product';
import { products } from '../src/services/product';

describe('Products Services', () => {
  it('Should list of products', async ()=> {
    
    sinon.stub(productModel, 'find').resolves([
      {
        title: 'fake titile',
        description: 'fake description',
      },
      {
        title: 'fake titile',
        description: 'fake description',
      }
    ]);

    const result = await products();
 
    expect(result.length).to.equal(2);
  });
})
