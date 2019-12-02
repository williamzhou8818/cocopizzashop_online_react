import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';


// const tempClick = (subItem) => {
//     console.log('button clicked ', subItem)
// }

const CollectionItem = ({id, name, price, imageUrl, addItem, select}) => {

    return (
        <div className="collection-item">
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
    
                />
                <div className='collection-footer'>
                    <span className='name'  style={{fontWeight:'bold'}}> { name } </span>
                    {select.map(subItem => (
                        <div style={{padding:'0px 3px'}}>
                            <div>
                                <span className='name' > { subItem.size } </span>
                            </div>
                            <div>
                            <span className='price'> ${ subItem.price } </span>
    
                            </div>
                            <div>
                                    <button type="button" onClick={() => addItem(subItem)}>ADD</button>
                            </div>
                            
                         </div>
                     ))
                    
                    }
    
                 </div>
                 {/* <CustomButton inverted >Add to cart</CustomButton> */}
        </div>
    )

} 


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

