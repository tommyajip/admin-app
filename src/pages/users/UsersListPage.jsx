import UsersListContainer from '../../containers/users/UsersListContainer';
import { AdminLayout } from '../../layouts';

export default function UsersListPage() {
  return (
    <AdminLayout>
      <UsersListContainer />
    </AdminLayout>
  );
}
