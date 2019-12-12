import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
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
    collections: selectCollectionsForPreview
  });

export default connect(mapStateToProps)(CollectionOverview);
