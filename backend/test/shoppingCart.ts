import { expect } from 'chai';
import * as sinon from 'sinon';
import { shoppingCartModel } from '../src/models/shoppingCart';
import { products, addProduct, deleteProduct } from '../src/services/shoppingCart';
import mongoose from "mongoose";

describe('Shopping Cart Services', () => {

  it('Should see a list of products', async ()=> {
    sinon.stub(mongoose.Query.prototype, 'populate').resolves([
      {
        name: 'fake name'
      }
    ]);
  
    const result = await products();
  
    expect(result.length).to.equal(1);
  });

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
