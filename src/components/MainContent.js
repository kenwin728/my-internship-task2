import React from "react";
import { motion } from "framer-motion";
import About1 from "./AboutUs";
import Team from "./Team";
import Contact from "./Contact";
import Stats from "./Stats";
import Reputation from "./Reputation";
import Service from "./Services";

function MainContent() {
  return (
    <main className="p-4 bg-gray-100">
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <About1 />
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Service />
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Reputation />
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Stats />
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <Team />
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </section>
    </main>
  );
}

export default MainContent;
