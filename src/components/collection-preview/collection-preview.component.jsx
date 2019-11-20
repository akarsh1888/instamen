import React from "react";

// Styling
import "./collection-preview.styles.scss";

// Components
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>

      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...allPropsOfItemsArrayOneObject }) => (
            <CollectionItem key={id} {...allPropsOfItemsArrayOneObject} />
          ))}
      </div>
    </div>
  );
};

// Earlier without CollectionItem

// {items
//   .filter((item, index) => index < 4)
//   .map(item => (
//     <div key={item.id}>{item.name}</div>
//   ))}

export default CollectionPreview;