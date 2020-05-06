import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from 'react-router-dom';
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardTitle className="container">{dish.name}</CardTitle>
          <CardBody>{dish.description}</CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}
function RenderComments({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-11 m-1">
        <Card className="container">
          <h4>Comments</h4>
          <CardText>{dish.comments["0"].comment}</CardText>
          <CardText>
            -- {dish.comments["0"].author} ,{" "}
            {dish.comments["0"].date.slice(0, 10)}
          </CardText>
          <CardText>{dish.comments["1"].comment}</CardText>
          <CardText>
            -- {dish.comments["1"].author} ,{" "}
            {dish.comments["1"].date.slice(0, 10)}
          </CardText>
          <CardText>{dish.comments["2"].comment}</CardText>
          <CardText>
            -- {dish.comments["2"].author} ,{" "}
            {dish.comments["2"].date.slice(0, 10)}
          </CardText>
          <CardText>{dish.comments["3"].comment}</CardText>
          <CardText>
            -- {dish.comments["3"].author} ,{" "}
            {dish.comments["3"].date.slice(0, 10)}
          </CardText>
          <CardText>{dish.comments["4"].comment}</CardText>
          <CardText>
            -- {dish.comments["4"].author} ,{" "}
            {dish.comments["4"].date.slice(0, 10)}
          </CardText>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home"></Link>Home
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu"></Link>Menu
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr></hr>
        </div>
      </div>
      <div className="row">
        <RenderDish dish={props.selectedDish} />
        <div>
          <RenderComments dish={props.selectedDish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
