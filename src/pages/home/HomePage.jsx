import HomeContainer from '../../containers/home/HomeContainer';
import { AdminLayout } from '../../layouts';

export default function HomePage() {
  return (
    <AdminLayout>
      <HomeContainer />
    </AdminLayout>
  );
}
