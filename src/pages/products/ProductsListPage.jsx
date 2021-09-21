import ProductsListContainer from '../../containers/products/ProductsListContainer';
import { AdminLayout } from '../../layouts';

export default function ProductsListPage() {
  return (
    <AdminLayout>
      <ProductsListContainer />
    </AdminLayout>
  );
}
