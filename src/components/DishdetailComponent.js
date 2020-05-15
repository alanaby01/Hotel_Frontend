import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  FormFeedback,
  Input,
  Label,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false,
      name: "",
      errors: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(event.target.value);
    this.setState({
      [name]: value,
    });

    if (value.length < 3) {
      this.state.errors = "Must be greater than two characters";
    } else if (this.state.name.length >= 15) {
      this.state.errors = "Must be 15 characters or less";
    } else {
      this.state.errors = " ";
    }
  }
  handleSubmit(event){
    event.preventDefault();
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    console.log(this.state.errors);
    return (
      <div>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home"></Link>Home
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/menu"></Link>Menu
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  width="100%"
                  src={this.props.dish.image}
                  alt={this.props.dish.name}
                />
                <CardTitle className="container">
                  {this.props.dish.name}
                </CardTitle>
                <CardBody>{this.props.dish.description}</CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <Card className="container">
                <h4>Comments</h4>
                <CardText>{this.props.comments["0"].comment}</CardText>
                <CardText>
                  -- {this.props.comments["0"].author} ,{" "}
                  {this.props.comments["0"].date.slice(0, 10)}
                </CardText>
                <CardText>{this.props.comments["1"].comment}</CardText>
                <CardText>
                  -- {this.props.comments["1"].author} ,{" "}
                  {this.props.comments["1"].date.slice(0, 10)}
                </CardText>
                <CardText>{this.props.comments["2"].comment}</CardText>
                <CardText>
                  -- {this.props.comments["2"].author} ,{" "}
                  {this.props.comments["2"].date.slice(0, 10)}
                </CardText>
                <CardText>{this.props.comments["3"].comment}</CardText>
                <CardText>
                  -- {this.props.comments["3"].author} ,{" "}
                  {this.props.comments["3"].date.slice(0, 10)}
                </CardText>
                <CardText>{this.props.comments["4"].comment}</CardText>
                <CardText>
                  -- {this.props.comments["4"].author} ,{" "}
                  {this.props.comments["4"].date.slice(0, 10)}
                </CardText>
                <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-pencil fa-lg"></span>Submit Comment
                </Button>
              </Card>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.handleSubmit}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <Col md={10}>
                <FormGroup row>
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    type="text"
                    id="rating"
                    name="rating"
                    innerRef={(input) => (this.rating = input)}
                  ></Input>
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup row>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="name"
                    id="name"
                    name="name"
                    innerRef={(input) => (this.name = input)}
                    onChange={this.handleInputChange}
                  ></Input>
                </FormGroup>
              </Col>
              <div className="text-danger">{this.state.errors}</div>
              <Col md={10}>
                <FormGroup row>
                  <Label for="comment">Comments</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="comment"
                    innerRef={(input) => (this.comment = input)}
                  />
                </FormGroup>
              </Col>
              <Button type="submit" value="submit" className="bg-primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default DishDetail;
