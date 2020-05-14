import React, { Component } from "react";
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent"
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return{

      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedDish: null
    };
  }


  render() {
    const HomePage = () =>{
      return(<Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]} 
      promotions={this.props.promotions.filter((promo)=> promo.featured)[0]}
      leaders={this.props.leaders.filter((leader)=>leader.featured)[0]} />);
    }

    const DishWithId = ({match}) => {
      console.log(this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)));
      return(<DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      />);
    }
    return (
      <div>
        <Header />
        <Switch >
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={ () => <Menu dishes={this.props.dishes} />} ></Route>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={ () => <About leaders={this.props.leaders} />} ></Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
