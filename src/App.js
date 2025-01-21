import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    console.log("Triggered");
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        'status': 'pending',
        'title': 'Sending...',
        'message': 'Sending Cart Data!'
      }));
      const response = await fetch('https://sample-c040f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if(!response.ok){
        throw new Error('Response is not ok')
      }

      // const data = response.json();
      // console.log(data);

      dispatch(uiActions.showNotification({
        'status': 'success',
        'title': 'Success!',
        'message': 'Sent Cart Data successfully'
      }));
    }
    if(isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        'status': 'error',
        'title': 'Error!',
        'message': 'Sending Cart Data Failed'
      }));
    });
  }, [dispatch, cart]);

  return (
    <>
      {notification && <Notification {...notification}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
