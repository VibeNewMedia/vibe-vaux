import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { AppNavbarBrand } from '@coreui/react';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import PropTypes from 'prop-types'
import ReeValidate from 'ree-validate'
import AuthService from '../../../services'
import vaux from  '../../../assets/img/brand/vaux.png'
import BGlogin from  '../../../assets/img/content/vaux-login.jpg'

class Page extends Component {
  constructor(props) {
        super(props);
        this.validator = new ReeValidate({
            email: 'required|email',
            password: 'required|min:6'
        });

        this.state = {
            modalOpen: false,
          
            isAuthenticated:'',
            credentials: {
                email: '',
                password: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isLoading: true,
            isSuccess: false,
            errors: this.validator.errors
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    // handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     const { errors } = this.validator;
    //     const {credentials} = this.state;
    //     credentials[name] = value;

    //     this.setState({credentials})
    // }

    handleToggle(){
      console.log('clickyclicky/');

      this.setState({
        modalOpen: !this.state.modalOpen,
        buttonClicked: !this.state.modalOpen
      })
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const { errors } = this.validator;
        const {credentials} = this.state;
        credentials[name] = value;

        this.setState({credentials})
    }

    handleKeyUp(event) {
      // submit on enter
        if ( event.keyCode === 13 ) {
          this.handleSubmit(event);
        }
    }

    handleSubmit(event) {

        event.preventDefault();
        const {credentials} = this.state;

        const { errors } = this.validator;

        this.validator.validateAll(credentials)
            .then(success => {
                if (success) {
                    this.setState({
                        isLoading: true
                    });
                    this.submit(credentials);
                } else {
                  this.setState({ errors });
                }
            });
    }

    submit(credentials) {
      this.props.dispatch(AuthService.login(credentials))
      .catch(({error, statusCode}) => {
          const responseError = {
              isError: true,
              code: statusCode,
              text: error
          };
          this.setState({
            responseError,
            isLoading: false
          });
      });
    }

    onSocialClick(event, data) {
       window.location.assign(`redirect/${data.service}`);
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        });
    }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated } = this.props;
    // const { errors, isSuccess } = this.state

    let successMessage = <div></div>;
    if ( isAuthenticated ) {
      successMessage = <Alert color="success">{"Congradulations you are logged in."}</Alert>;
      return (
		    <Redirect to={ from }/>
		  )
    }

    // a switch to display frontend Validator for errors
    let validatorMessage = <div></div>;
    if (this.state.errors.items.length > 0){
      validatorMessage = this.state.errors.items.map((item) => {
        return (
          <Alert color="danger">{item.msg}</Alert>
        );
      });
    }
   
    // a switch to display backend Server for errors
    let serverMessage = <div></div>;
    if (this.state.responseError.isError){
      console.log(this.state.responseError);
        serverMessage = <Alert color="danger">{this.state.responseError.text}</Alert>
    }
    
    return (
      <div className="app flex-row align-items-center">        
        <Container>
          <Row className="justify-content-center">
            <Col md="8">  
            
              <CardGroup>
                <Card className="p-4" style={{backgroundImage: "url(" + BGlogin + ")", backgroundSize: 'cover' }}>
                  <CardBody>
                    { validatorMessage }
                    { serverMessage }
                    { successMessage }
                    <Form>
                    <img src={vaux}/>
                   
                    { ! this.state.modalOpen &&
                    <div>
                      <h1 className="white-text">Welcome to Vaux!</h1>
                      <p className="white-text">The best way to navigate your new life and manage your future</p>
                      <p className="white-text">Sign In to your account, and lets get started!</p>
                     
                      <Button color="primary" className="px-4" onClick={this.handleToggle}>Lets Begin</Button>
                    </div>
                    }

                    { this.state.modalOpen &&
                      <div>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="E-mail address"
                          name="email"
                          autoComplete="email"
                          onChange={this.handleChange}
                          onKeyUp={this.handleKeyUp}
                        />
                      </InputGroup>
                      
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                          <Input
                          type="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="password"
                          onChange={this.handleChange}
                          onKeyUp={this.handleKeyUp}
                          />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleSubmit}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                      </div>
                      }
                      
                      
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};


export default Page;
