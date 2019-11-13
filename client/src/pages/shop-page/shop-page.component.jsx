import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CollectionPageContainer from '../collection-page/collection-page.container';
import ItemPageContainer from '../item-page/item-page.container';
import CollectionOverviewPageContainer from '../collection-overview-page/collection-overview.container';

const ShopPage = ({ match }) => {

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={CollectionOverviewPageContainer} />
      <Route exact path={`${match.path}/:brandName`} component={CollectionPageContainer} />
      <Route path={`${match.path}/:brandName/:model`} component={ItemPageContainer} />
    </Switch>
  );
}

export default ShopPage;