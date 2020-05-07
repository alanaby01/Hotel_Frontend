import React, { Component } from "react";
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent"
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from '../shared/promotions';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null
    };
  }
  render() {
    const HomePage = () =>{
      return(<Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
      promotions={this.state.promotions.filter((promo)=> promo.featured)[0]}
      leaders={this.state.leaders.filter((leader)=>leader.featured)[0]} />);
    }

    const DishWithId = ({match}) => {
      return(<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
      comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]}
      />);
    }
    return (
      <div>
        <Header />
        <Switch >
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} />} ></Route>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={ () => <About leaders={this.state.leaders} />} ></Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
