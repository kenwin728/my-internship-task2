import React from "react";

const Team = () => {
  return (
    <section class="py-12 bg-gray-100 sm:py-16 lg:py-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our Investors & Board of Directors
          </h2>
        </div>

        <div class="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          <div>
            <img
              class="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png"
              alt=""
            />
            <p class="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              David Carter
            </p>
            <p class="mt-2 text-base font-normal text-gray-600 font-pj">
              Chief Executive Officer (CEO)
            </p>
          </div>

          <div>
            <img
              class="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png"
              alt=""
            />
            <p class="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Michael Brooks
            </p>
            <p class="mt-2 text-base font-normal text-gray-600 font-pj">
              Chief Technology Officer (CTO)
            </p>
          </div>

          <div>
            <img
              class="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png"
              alt=""
            />
            <p class="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              James Thompson
            </p>
            <p class="mt-2 text-base font-normal text-gray-600 font-pj">
              Head of Product Development
            </p>
          </div>

          <div>
            <img
              class="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png"
              alt=""
            />
            <p class="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              William Harris
            </p>
            <p class="mt-2 text-base font-normal text-gray-600 font-pj">
              Marketing Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
