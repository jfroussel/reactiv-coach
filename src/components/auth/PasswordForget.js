import React, { Component } from 'react';
import { FormControl, FormGroup, Button, Grid, Row, Col } from 'react-bootstrap';
import { auth } from '../../firebase';

const PasswordForgetPage = () =>
  <div>
    <Grid>
      <Row className="d-flex justify-content-around pt-5 ">
        <Col className="pt-5">
          <h3 className="font-weight-light">Password forget</h3>
          <PasswordForgetForm />
        </Col>
      </Row>
    </Grid>    
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
  
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { 
      ...INITIAL_STATE,
    };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
   
    const {
      email,
      error,
    } = this.state;

    

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <FormControl
            value={this.state.email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
        />
        </FormGroup>
        <Button disabled={isInvalid} type="submit" bsStyle="info">
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}


export default PasswordForgetPage;

export {
  PasswordForgetForm,
};