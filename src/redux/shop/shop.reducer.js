import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
     collections: null,
     isFetching: false,
     errorMessage: undefined
 };
// const INITIAL_STATE = {
//     collections :{

//         classicpizza: {
//              id: 1,
//              title: 'Classic Pizzas',
//              routeName: 'classicpizza',
//              items: [
//                  {
//                      id: 1,
//                      name: 'Coco Special',
//                      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                      toppings:[
//                          'Hot Salami',
//                          'Mushrooms',
//                          'Capicum',
//                          'Olives',
//                          'Herbs',
//                          'Garlic'
//                      ],
//                      select: [
//                          {
//                              id: 'sidealle',
//                              name: 'Coco Special',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              size: 'S',
//                              price: 7.90,
//                              toppings: ''
                             
//                          },
//                          {   
//                              id: 'tacetlle',
//                              name: 'Coco Special',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              size: 'L',
//                              price: 9.90,
//                              toppings: ''
//                          },
//                          {
//                              id: 'sadcetdd',
//                              name:'Coco Special',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              size: 'F',
//                              price: 14.90,
//                              toppings: ''
//                          }
//                      ]
//                  },
//                  {
//                      id: 2,
//                      name: 'Aussie',
//                      toppings: [
//                         'Ham',
//                         'Bacon',
//                         'Egg'
//                      ],
//                      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                      select: [
//                          {
//                              id: 'zeoetdd',
//                              name: 'Aussiel',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              size: 'S',
//                              price: 7.90,
//                              toppings: ''
//                          },
//                          {   id: 'taddadd',
//                              name: 'Aussie',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              size: 'L',
//                              price: 9.90,
//                              toppings: ''
//                          },
//                          {
//                              id: 'ssfoetdd',
//                              name:'Aussie',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              size: 'F',
//                              price: 14.90,
//                              toppings: ''
//                          }
//                      ]
//                  }
//              ]
//          },
//         gourmetpizza:  {
//              id: 2,
//              title: 'Gourmet Pizza',
//              routeName: 'gourmetpizza',
//              items: [
//                  {
//                      id: 1,
//                      name: 'Angry Chicken',
//                      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                      toppings:[
//                         'Spicy Salsa',
//                         'Capsicum',
//                         'Onine',
//                         'Roasted Chicken',
//                         'Fresh Tomato',
//                         'Chilli Flakes'
//                      ],
//                      select: [
//                          {
//                              id: 'zzsfoetdd',
//                              size: 'S',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              price: 7.90,
//                              toppings: ''
                             
//                          },
//                          {
//                              id: 'zzmmoetdd',
//                              size: 'L',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              price: 9.90,
//                              toppings: ''
//                          },
//                          {
//                              id: 'zzttudd',
//                              size: 'F',
//                              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
//                              price: 14.90,
//                              toppings: ''
//                          }
//                      ]
//                  }
//              ]
//          },
//     }
// }

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START: 
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}

export default shopReducer;