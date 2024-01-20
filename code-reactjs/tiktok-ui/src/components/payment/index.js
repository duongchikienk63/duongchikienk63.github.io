import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = (props) => {
    const { amount, onSubmitPaypal, checkInformation } = props;

    const handleCreateOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: amount,
                            currency_code: 'USD',
                        },
                    },
                ],
            })
            .then((orderId) => {
                return orderId;
            });
    };

    const handleApprove = (data, actions) => {
        return actions.order.capture().then((order) => {
            onSubmitPaypal(order);
        });
    };
    
    const handleClick = (data, actions) => {
        if (checkInformation.current == false) {
            alert('Vui lòng điền đầy đủ thông tin trước khi thanh toán!');
            return actions.reject();
        } else if (!+amount) {
            alert('Vui lòng xem lại giỏ hàng trước khi thanh toán!');
            return actions.reject();
        }
        return actions.resolve();
    };

    const handleError = (data, actions) => {
        alert('Thanh toán không thành công, vui lòng thử lại!');
    };

    return (
        <PayPalButtons
            style={{
                color: 'gold',
                layout: 'horizontal',
                height: 50,
                tagline: false,
                shape: 'pill',
                label: 'pay',
            }}
            onClick={handleClick}
            createOrder={handleCreateOrder}
            forceReRender={[amount]}
            onApprove={handleApprove}
            onError={handleError}
        />
    );
};

export default PaypalCheckoutButton;
