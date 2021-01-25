import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Reg extends Component {
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: '',
            Email: '',
            Permissions: '',
            Bio: ''
        }
        this.Username = this.Username.bind(this);
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.Permissions = this.Permissions.bind(this);
        this.Bio = this.Bio.bind(this);
        this.register = this.register.bind(this);
        localStorage.setItem('userid',-1);
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Username(event) {
        this.setState({ Username: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    Permissions(event) {
        this.setState({ Permissions: event.target.value })
    }
    Bio(event) {
        this.setState({ Bio: event.target.value })
    }
    register(event) {
        fetch('https://localhost:44386/api/users', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: this.state.Username,
                Password: this.state.Password,
                Email: this.state.Email,
                Permissions: this.state.Permissions,
                Bio: this.state.Bio
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                console.log(Result)
                if (Result.status == 400)
                    alert('Can not register')
                else
                    this.props.history.push("/login");
            })
    }
    render() {
        return (
            <div className="app flex-row align-items-center">
            <Container>
            <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
            <CardBody className="p-4">
            <Form>
            <div class="row" className="mb-2 pageheading">
            <div class="col-sm-12 btn btn-primary">
        Sign Up
        </div>
        </div>
        <InputGroup className="mb-3">
            <Input type="text"  onChange={this.Username} placeholder="Enter Username" />
            </InputGroup>
        <InputGroup className="mb-3">
            <Input type="text"  onChange={this.Email} placeholder="Enter Email" />
            </InputGroup>
        <InputGroup className="mb-3">
            <Input type="password"  onChange={this.Password} placeholder="Enter Password" />
            </InputGroup>
        <InputGroup className="mb-4">
            <Input type="text"  onChange={this.Permissions} placeholder="Enter Permissions" />
            </InputGroup>
        <InputGroup className="mb-4">
            <Input type="text"  onChange={this.Bio} placeholder="Enter Bio" />
            </InputGroup>
        <Button  onClick={this.register}  color="success" block>Create Account</Button>
        </Form>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>
        </div>
    );
    }
}

export default Reg;