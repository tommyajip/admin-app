import InvoicesListContainer from '../../containers/invoices/InvoicesListContainer';
import { AdminLayout } from '../../layouts';

export default function InvoicesListPage() {
  return (
    <AdminLayout>
      <InvoicesListContainer />
    </AdminLayout>
  );
}
