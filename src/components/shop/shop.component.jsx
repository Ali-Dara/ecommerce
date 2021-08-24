import React, {Component} from 'react';
import shopData from "./shop-data";
import CollectionPreview from "../collection/collectionPreview.component";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCollection: shopData
        }
    }

    render() {
        const {shopCollection} = this.state
        return (
            <div className="shop">
                {shopCollection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
}

export default Shop;