import React from "react";
import { motion } from "framer-motion";

function MainContent() {
  return (
    <main className="p-4 bg-gray-400">
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row justify-evenly items-center">
            <div className="mx-2 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold underline decoration-4 text-center">
                ABOUT US
              </h2>
              <p className="text-gray-700 text-center">
                We are a leading tech company specializing in innovative
                solutions.
              </p>
            </div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-3d-render-of-tech-inspired-abstract-black-and-white-background-image_3739113.jpg"
              alt="Tech"
              className="my-4 mx-2 h-80 w-80"
            />
          </div>
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row justify-evenly items-center">
            <img
              src="https://c8.alamy.com/comp/WX4T8E/electronic-monochrome-black-and-white-high-tech-background-WX4T8E.jpg"
              alt="Services"
              className="my-4 mx-2 h-80 w-80"
            />
            <div className="mx-2 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold underline decoration-4 text-center">
                OUR SERVICES
              </h2>
              <p className="text-gray-700 text-center">
                We offer a wide range of services including web development, app
                development, and cloud solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row justify-evenly items-center">
            <div className="mx-2 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold underline decoration-4 text-center">
                CONTACT US
              </h2>
              <p className="text-gray-700 text-center">
                Get in touch with us for more information.
              </p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/Contact.png`}
              alt="Contact"
              className="my-4 mx-2 h-80 w-80"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default MainContent;
