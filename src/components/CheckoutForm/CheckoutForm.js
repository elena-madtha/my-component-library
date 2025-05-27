import React from 'react';
import PropTypes from 'prop-types';

import Button from 'elements/Button/Button';
import Form from 'elements/Form/Form';
import FormInput from 'components/FormInput/FormInput';

const CheckoutForm = ({ submitOrderFunction }) => (
  <Form>
    <FormInput label="Name" />
    <FormInput label="Street address" type="address" />
    <FormInput label="City" />
    <FormInput label="Email address" type="email" />
    <FormInput label="Telephone number" type="tel" />

    <div style={{
      marginTop: "3rem"
    }}>
     <Button onClickEvent={ submitOrderFunction }>Place order</Button>
    </div>
  </Form>
);

CheckoutForm.propTypes = {
  /**
   * Function to handle submitting the order.
   */
  submitOrderFunction: PropTypes.func.isRequired
};

export default CheckoutForm;