import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://sample-c040f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
            
            if(!response.ok) {
                throw new Error('Fetching cart data failed');
            }
            const cartData = await response.json();
            dispatch(cartActions.replaceCart(cartData));
        }

        try {
            await fetchData();
        }catch(error) {
            dispatch(uiActions.showNotification({
                'status': 'error',
                'title': 'Error!',
                'message': error.message
            }));
        }
    }
}

export const sendCartData =  (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            'status': 'pending',
            'title': 'Sending...',
            'message': 'Sending Cart Data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://sample-c040f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if(!response.ok){
                throw new Error('Response is not ok')
            }
        }

        try{
            await sendRequest();
            dispatch(uiActions.showNotification({
                'status': 'success',
                'title': 'Success!',
                'message': 'Sent Cart Data successfully'
            }));
        }
        catch(error) {
            dispatch(uiActions.showNotification({
                'status': 'error',
                'title': 'Error!',
                'message': 'Sending Cart Data Failed'
            }));
        }
    }
}