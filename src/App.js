import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    let timer_id;
    if (cart.changed) {
      dispatch(sendCartData(cart));

      timer_id = setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
    }

    return () => {
      clearTimeout(timer_id);
    }
  }, [cart, dispatch]);



  return (
    <>
      { notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
