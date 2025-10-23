import BookCard from "Components/BookCard/BookCard";
import Layout from "Layouts/Layout";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <BookCard title='harry potter' author='aut' description='des' />
      </Layout>
    </>
  );
}
