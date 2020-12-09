import React from "react";

import { selectIsLoadingSelector } from "../../redux/shop/shop.selectors";

import CategoryOverviewPage from "../../pages/category-overview-page/category-overview.page";
import CategoryPage from "../../pages/category/category.component";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../../components/with-spinner/with-spinner.styles";

const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage2 extends React.Component {
  componentDidMount() {}

  render() {
    const { match, loading } = this.props;

    return (
      <div className="shop-page">
        {
          // since [shop2] component route is defined in app.js, it gets the [match] object
          //render method takes a functions which takes [props] for the component in the parameter,to be used by cmpnt
          // here we have to pass [match,location] object for the [categorypage] component to fetch from url
        }

        <Route
          path={`${match.url}/:collectionId`}
          render={(props) => (
            <CategoryPageWithSpinner isLoading={loading} {...props} />
          )}
        />

        <Route
          exact
          path={`${match.url}`}
          render={() =>
            loading ? (
              <SpinnerOverlay>
                <SpinnerContainer />
              </SpinnerOverlay>
            ) : (
              <CategoryOverviewPage />
            )
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: selectIsLoadingSelector(state),
});

export default connect(mapStateToProps, null)(ShopPage2);
