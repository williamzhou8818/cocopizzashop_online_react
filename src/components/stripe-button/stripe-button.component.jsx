import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton  =  ({price}) => {
        // Stripe wanna see value in 0.01
        // Deliey price will be check destanic or sub and change
        const priceForStripe = (price + 8) * 100 ;
        const publishableKey = 'pk_test_5NZLMcpfMqEPOHNVDz5wJphQ00TkUP8sA0';

        const onToken = token => {
            console.log(token);
            alert('Payment Successful, Thank you for your shopping!!');
        }

        return (
            <StripeCheckout 
                label='Pay +A$8, Delivery For Me'
                name='Coco Pizza Shop'
                shippingAddress
                billingAddress
                image='https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/CoCoPizzaLogo.svg?alt=media&token=a505500d-ec1b-4454-b31f-328590f7b38f'
                currency='AUD'
                description={`Your total is A$${price + 8}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        )


};

export default StripeCheckoutButton;

