import { expect } from 'chai';
import * as sinon from 'sinon';
import { shoppingCartModel } from '../src/models/shoppingCart';
import { addProduct, deleteProduct } from '../src/services/shoppingCart';

describe('Shopping Cart Services', () => {

  it('Should add product', async ()=> {
    
    sinon.stub(shoppingCartModel, 'insertMany').resolves(true);

    const result = await addProduct('');
 
    expect(result).to.equal(true);
  });

  it('Should delete product', async ()=> {
    
    sinon.stub(shoppingCartModel, 'deleteOne').resolves(null);

    const result = await deleteProduct('');
 
    expect(result).to.equal(null);
  });
})
