    import React from 'react'
    import dee from '../assets/dee.png'
    import gymania from '../assets/gymania.png'
    import apato from '../assets/apato.png'
    import jambo from '../assets/jambo.png'
    const Projects = () => {
    return (
      <div name="projects" className="h-full text-gray-600 dark:text-white">
        <div className="md:flex md:flex-col items-center justify-center p-2 font-mono text-gray-600 dark:text-white ">
          <div className=" w-full md:pl-40">
            <h1 className="text-4xl text-start md:text-5xl font-extrabold border-b md:w-[600px]  pb-4 font-roboto ">
              Projects
            </h1>
          </div>
          <div className="flex justify-center items-center p-4 pt-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div className=" md:h-[400px] md:max-w-[360px]">
                <a href="https://kukujamboo.vercel.app/" target="blank">
                  <img
                    className="w-full object-cover hover:scale-95 duration-500"
                    src={jambo}
                    alt="dee makeup salon"
                  />
                </a>
                <div className="p-4">
                  <a href="https://kukujamboo.vercel.app/" target="blank">
                    <h1 className="text-2xl font-bold">Kuku Jamboo</h1>
                  </a>
                  <p className="text-xl text-stone-500">
                    A website for a meal joint where customers can purchase
                    their favourite chicken meals, pizza, burgers,salad and
                    drinks as well.
                  </p>
                </div>
              </div>

              <div className=" md:h-[400px] md:max-w-[360px]">
                <a href="https://gymania-seven.vercel.app/" target="blank">
                  <img
                    className="w-full object-cover hover:scale-95 duration-500"
                    src={gymania}
                    alt="gym"
                  />
                </a>
                <div className="p-4">
                  <a href="https://gymania-seven.vercel.app/" target="blank">
                    <h1 className="text-2xl font-bold">Gymania gym</h1>
                  </a>
                  <p className="text-xl text-stone-500">
                    A website for gym customers to view services offered by
                    gymania and also view its facilities.
                  </p>
                </div>
              </div>
              <div className=" md:h-[400px] md:max-w-[360px]">
                <a href="https://dee-smoky.vercel.app/" target="blank">
                  <img
                    className="w-full object-cover hover:scale-95 duration-500"
                    src={dee}
                    alt="dee makeup salon"
                  />
                </a>
                <div className="p-4">
                  <a href="https://dee-smoky.vercel.app/" target="blank">
                    <h1 className="text-2xl font-bold">Dees Makeup Studio</h1>
                  </a>
                  <p className="text-xl text-stone-500">
                    A website for Dee makeup studios showcasing their services
                    portfolio, also customers can book for the services.
                  </p>
                </div>
              </div>
              <div className=" md:h-[400px] md:max-w-[360px]">
                <a href="https://hearthstone-apts.vercel.app/" target="blank">
                  <img
                    className="w-full object-cover hover:scale-95 duration-500"
                    src={apato}
                    alt="hearthstone"
                  />
                </a>
                <div className="p-4">
                  <a href="https://hearthstone-apts.vercel.app/" target="blank">
                    <h1 className="text-2xl font-bold">
                      HearthStone Apartments
                    </h1>
                  </a>
                  <p className="text-xl text-stone-500">
                    A website for tenants in Hearthstone Apartments where they
                    can access payment details for rent, trash and water bills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }

    export default Projects