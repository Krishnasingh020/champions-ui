import Layout from "../components/Layout";
import Button from "../components/Button";

const Framework = () => {
  const steps = ["Diagnosis", "Alignment", "Sovereignty"];

  return (
    <Layout>
      <div className="text-center space-y-12 px-4">
        <div>
          <h1 className="text-4xl font-bold uppercase">
            The <br /> Framework.
          </h1>
          <p className="text-sm text-muted max-w-sm mx-auto mt-4">
            A disciplined architecture for clarity, agency, and long-term control.
          </p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          {steps.map(step => (
            <div key={step}>
              <p className="uppercase">{step}</p>
              <div className="h-px bg-accent mt-2" />
            </div>
          ))}
        </div>

        <Button label="Apply the Framework →" />
      </div>
    </Layout>
  );
};

export default Framework;
