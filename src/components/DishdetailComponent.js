import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: this.props.selectedDish,
    };
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>{dish.name}</CardBody>
            <CardText>{dish.description}</CardText>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-11 m-1" >
          <Card>
            <h4>Comments</h4>
            <CardText>{dish.comments["0"].comment}</CardText>
            <CardText>
              -- {dish.comments["0"].author} , {dish.comments["0"].date.slice(0,10)}
            </CardText>
            <CardText>{dish.comments["1"].comment}</CardText>
            <CardText>
              -- {dish.comments["1"].author} , {dish.comments["1"].date.slice(0,10)}
            </CardText>
            <CardText>{dish.comments["2"].comment}</CardText>
            <CardText>
              -- {dish.comments["2"].author} , {dish.comments["2"].date.slice(0,10)}
            </CardText>
            <CardText>{dish.comments["3"].comment}</CardText>
            <CardText>
              -- {dish.comments["3"].author} , {dish.comments["3"].date.slice(0,10)}
            </CardText>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.selectedDish)}
          <div>{this.renderComments(this.props.selectedDish)}</div>
        </div>
      </div>
    );
  }
}
export default DishDetail;
