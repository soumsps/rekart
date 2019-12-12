import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    collections: selectCollections
  });

export default connect(mapStateToProps)(CollectionOverview);
