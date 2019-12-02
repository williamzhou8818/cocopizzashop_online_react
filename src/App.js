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




import './App.css';


// let Data =  [
//         {
//           id:0,
//           title: 'Hawaii',
//           qty: 0,
//           items: [
//             {
//               id: 0,
//               uid: 'xsyked',
//               title: 'Hawaii',
//               size: 'Small',
//               price: 7.5,
//               qty: 0
              
//             },
//             {
//               id: 1,
//               uid: 'xcswad',
//               title: 'Hawaii',
//               size: 'Large',
//               price: 9.5,
//               qty: 0
//             },
//             {
//               id: 2,
//               uid: 'xcswqd',
//               title: 'Hawaii',
//               size: 'Famiry',
//               price: 14.5,
//               qty: 0
//             }
//           ]
          
//         },
//         {
//           id:1,
//           title: 'Supermi',
//           qty: 0,
//           items: [
//             {
//               id: 0,
//               uid: 'xswzqd',
//               title: 'Supermi',
//               size: 'Small',
//               price: 7.5,
//               qty: 0
              
//             },
//             {
//               id: 1,
//               uid: 'eswzqd',
//               title: 'Supermi',
//               size: 'Large',
//               price: 9.5,
//               qty: 0
//             },
//             {
//               id: 2,
//               uid: 'tswzqd',
//               title: 'Supermi',
//               size: 'Famiry',
//               price: 14.5,
//               qty: 0
//             }
//           ]
//         }
     
// ]


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
  // const [data, setData] = useState(Data)
  // const [smallpizza, setSmallPizza] = useState({})
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState(null);
  // const [cart, setCart] = useState([]);
  // const [isButtonDisabled, setButtonDisable] = useState(false);


  // const onChange = (e, id) => {
    
  //   Data[id].qty = e.target.value;

  //   setData([...data, Data])
  //   // data.forEach(item => {
  //   //   console.log(item.id)
  //   //   if(item.id === id) {
  //   //     _data[id].qty = e.target.value;
  //   //     let Data = [];
  //   //     Data.push(item)
  //   //     console.log(Data)
  //   //   }
      
  //   // })
    


  // }

  // const clickHandler = (e ,i, product) => {
  //    e.preventDefault()
    
  //    const cartItems = cart;
  //    let productAlreadyInCart = false;
  //    cartItems.forEach(item => {
  //      if(item.uid === product.uid) {
  //        productAlreadyInCart = true;
  //      }
  //    });
  //    if(!productAlreadyInCart) {
       
  //       setCart([...cart, product])
  //    }

  //    return cartItems;
    
  // }
  render() {
    return (
        
      <div>
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