import Layout from "../components/Layout";
import Button from "../components/Button";

const Home = () => {
  return (
    <Layout>
      <div className="text-center space-y-6 px-4">
        <p className="text-xs tracking-wide text-muted">CHAMPIONS</p>

        <h1 className="text-3xl md:text-5xl font-bold uppercase">
          From Survival <br /> To Sovereignty.
        </h1>

        <p className="text-sm text-muted max-w-md mx-auto">
          Strategic guidance for leaders exiting operational noise.
        </p>

        <Button label="Begin Evaluation →" />
      </div>
    </Layout>
  );
};

export default Home;
