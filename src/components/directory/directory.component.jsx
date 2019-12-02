import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directroy.styles.scss';

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'PIZZA',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/classic-pizzas%2Fchicken-supreme.jpg?alt=media&token=9c0f690a-35da-44eb-a145-86ccb0a05ef4',
                    id: 1,
                    linkUrl: 'pizzas'
                },
                {
                    title: 'PASTA',
                    imageUrl: 'https://cocopizzashop.com.au/assets/imgs/bruna-branco-t8hTmte4O_g-unsplash.png',
                    id: 2,
                    linkUrl: 'classicpizza'

                },
                {
                    title: 'ENTREES',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/chicken-parmesan-bacon.jpg?alt=media&token=0e79578d-599f-40b1-8b4e-d949a42d5b4e',
                    id:3,
                    linkUrl: 'classicpizza'
                },
                {
                    title: 'SIDES',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/chickenwings.jpg?alt=media&token=01c24041-a98c-42a7-9294-c6aa17c8d80e',
                    id: 5,
                    size: 'large',
                    linkUrl: 'classicpizza'

                },
                {
                    title: 'DESSERT',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/cheese-cake.jpg?alt=media&token=16e9b222-028b-4aa6-bd14-cca31b934bda',
                    id: 6,
                    size: 'large',
                    linkUrl: 'classicpizza'
                },
                {
                    title: 'SOFT DRINKS',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/softdrink.jpg?alt=media&token=a843f984-c4f0-4b8b-a36d-3060be5ba565',
                    id: 7,
                    size: 'large',
                    linkUrl: 'classicpizza'
                },
                {
                    title: 'HOT DEALS',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cocopizzaonline.appspot.com/o/pizza-deals%2Fsingle-deal.jpg?alt=media&token=0b2b0a8a-846b-422e-900b-63168456f7f6',
                    id:4,
                    linkUrl: 'classicpizza'
                },

            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    ))
                }
            </div>
        )
    }

   


}


export default Directory;