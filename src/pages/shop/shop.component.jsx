import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: [
                {
                    id: 1,
                    title: 'Classic Pizzas',
                    routeName: 'classicpizza',
                    items: [
                        {
                            id: 1,
                            name: 'Coco Special',
                            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                            select: [
                                {
                                    id: 'sidealle',
                                    name: 'Coco Special',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    size: 'S',
                                    price: 7.90
                                },
                                {   
                                    id: 'tacetlle',
                                    name: 'Coco Special',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    size: 'L',
                                    price: 9.90
                                },
                                {
                                    id: 'sadcetdd',
                                    name:'Coco Special',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    size: 'F',
                                    price: 14.90
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Aussie',
                            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                            select: [
                                {
                                    id: 'zeoetdd',
                                    name: 'Aussiel',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    size: 'S',
                                    price: 7.90
                                },
                                {   id: 'taddadd',
                                    name: 'Aussie',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    size: 'L',
                                    price: 9.90
                                },
                                {
                                    id: 'ssfoetdd',
                                    name:'Aussie',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    size: 'F',
                                    price: 14.90
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Gourmet Pizza',
                    routeName: 'gourmetpizza',
                    items: [
                        {
                            id: 1,
                            name: 'Angry Chicken',
                            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                            select: [
                                {
                                    id: 'zzsfoetdd',
                                    size: 'S',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    price: 7.90
                                },
                                {
                                    id: 'zzmmoetdd',
                                    size: 'L',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    price: 9.90
                                },
                                {
                                    id: 'zzttudd',
                                    size: 'F',
                                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                                    price: 14.90
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    } 

}

export default ShopPage;