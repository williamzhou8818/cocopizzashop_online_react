import React from 'react';
import CollectionItem from './../collection-item/collection-item.component';
import './collection-preview.styles.scss';



const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, select, toppings, ...otherItemProps}) => (
                  
                        <CollectionItem  key={id} {...otherItemProps} select={select} toppings={toppings}/>
                       
                   
                )) }
        </div>
    </div>
)


export default CollectionPreview;


 {/* {item.name} 
                            {
                                item.select.map((subitem) => (
                                <div>{subitem.size} | {subitem.price}</div>
                                ))
                            } */}