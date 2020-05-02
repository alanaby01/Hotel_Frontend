import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
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
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderDish(this.props.selectedDish)}</div>
      </div>
    );
  }
}
export default DishDetail;
