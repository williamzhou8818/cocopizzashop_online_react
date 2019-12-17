import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utis';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

// import './App.css';
import { GlobalStyle } from './global.styles';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props; 

    this.unsubscribeFromAuth =
       auth.onAuthStateChanged(async userAuth => {

        if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);
              userRef.onSnapshot(snapShot => {
                setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                });
                 console.log(this.state)
              });
        }  
        setCurrentUser(userAuth);     
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
 
  render() {
    return (
        
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
                  render= {() => 
                    this.props.currentUser ? (
                      <Redirect to='/' />) : (
                      <SignInAndSignUpPage />
                  ) } 
            /> 
        </Switch>
        </div>
    );
  }
  
}

const mapStateTopProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateTopProps, mapDispatchToProps)(App);


  {/*
           <div>
          {
           Data.map((x,id) =>  (
              <div>
                {x.title} QTY: 
                <input type="number" value={x.qty} onChange={(e) => onChange(e, id)}/>

                {x.items.map((y,i) =>  {
                  let Y = {
                    title: y.title,
                    size: y.size,
                    price: y.price,
                    uid: y.uid,
                    qty: x.qty
                  }
                  return  (
                      <div>
                      {y.size} || {y.title} || 
                        
                        {y.price} * 
                        
                        {y.qty}__ {y.uid}
                        
                        <button   
                          onClick={(e) => clickHandler(e, i, Y)} 
                          data-id={i}
                          value="small"
                          disabled={isButtonDisabled}
                          > ADD
                        </button>
                      
                      

                      </div>
                   )
                }
                )}
              </div>
            )
          )
        }
     <div>
          <h2>Cart</h2>
          
          {
            
             //console.log(cart.includes(smallpizza))
             cart.map(x => {
                return (
                  <div>
                    {x.size} | {x.title} | {x.qty}
                  </div>
                )
             })
           
          }
        </div> 

    </div> */}