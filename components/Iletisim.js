import Layout from '../components/Layout';
import '../app/globals.css';

export default function Iletisim() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Hakkında</h1>
        <p>Bu sayfa hakkında bilgi verecek.</p>
      </div>
    </Layout>
  );
};