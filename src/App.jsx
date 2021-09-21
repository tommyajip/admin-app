import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// pages
import {
  // home
  HomePage,
  // products
  // ProductCreatePage,
  // ProductDetailPage,
  // ProductUpdatePage,
  ProductsListPage,

  // invoices
  // InvoiceCreatePage,
  // InvoiceDetailPage,
  // InvoiceUpdatePage,
  InvoicesListPage,

  // users
  // UserCreatePage,
  // UserDetailPage,
  // UserUpdatePage,
  UsersListPage,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />

        {/* products route */}
        <Route exact path="/products" component={ProductsListPage} />
        {/* <Route exact path="/products/create" component={ProductCreatePage} />
        <Route exact path="/products/:id/update" component={ProductUpdatePage} />
        <Route exact path="/products/:id" component={ProductDetailPage} /> */}
        {/* products route */}

        {/* invoices route */}
        <Route exact path="/invoices" component={InvoicesListPage} />
        {/* <Route exact path="/invoices/create" component={InvoiceCreatePage} />
        <Route exact path="/invoices/:id/update" component={InvoiceUpdatePage} />
        <Route exact path="/invoices/:id" component={InvoiceDetailPage} /> */}
        {/* invoices route */}

        {/* users route */}
        <Route exact path="/users" component={UsersListPage} />
        {/* <Route exact path="/users/create" component={UserCreatePage} />
        <Route exact path="/users/:id/update" component={UserUpdatePage} />
        <Route exact path="/users/:id" component={UserDetailPage} /> */}
        {/* users route */}

      </Switch>
    </Router>
  );
}

export default App;
