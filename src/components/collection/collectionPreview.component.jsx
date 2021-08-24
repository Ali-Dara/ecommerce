import React from 'react';
import './collectionPreview.style.scss'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((items, idx) => idx < 4).map(item =>
                <div>{item.name}</div>
            )}
        </div>
    </div>
)
export default CollectionPreview;