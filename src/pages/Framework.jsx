import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Framework = () => {
  const steps = ["Diagnosis", "Alignment", "Sovereignty"];

  useEffect(() => {
    const id = "champions-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <Layout>
      <div className="space-y-12 px-4">
        <div className="max-w-sm mx-auto text-left">
          <h1
            className="text-5xl md:text-6xl font-bold uppercase"
            style={{ fontFamily: "Anton, sans-serif", color: "#ffffff" }}
          >
            The <br /> Framework.
          </h1>
          <p
            className="text-sm max-w-sm mt-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#9aa0a4" }}
          >
            A disciplined architecture for clarity, agency, and long-term control.
          </p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto mt-8">
          {steps.map((step, idx) => (
            <div key={step}>
              <p
                className="uppercase text-2xl"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
              >
                {step}
              </p>
              <div
                style={{
                  height: 2,
                  background: idx === 2 ? "#0b9e95" : "#00d6d6",
                  marginTop: 10,
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <Button
            label="Apply the Framework →"
            className="bg-[#00e6e6] text-black px-10 py-3 text-xs tracking-wide uppercase hover:opacity-90 transition"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Framework;
