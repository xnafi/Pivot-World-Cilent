import React from 'react'

const Faq = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen w-full px-8 bg-center bgFaq bg-fixed bg-cover bg-no-repeat flex flex-col justify-center items-center">
      <section className="dark:bg-gray-800 dark:text-gray-100 md:w-3/4 w-screen h-full">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 mt-24">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
          <h2 className="mb-12 md:text-4xl font-bold leading-none text-center text-2xl">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Will you provide website layout about design ?</summary>
              <div className="px-4 pb-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How much does cost to design website ?</summary>
              <div className="px-4 pb-4">
                <p>Fortunately, we aren't just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How many revisions can i make the design ?</summary>
              <div className="px-4 pb-4 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline" >Can i uplode this design in my personal work?</summary>
              <div className="px-4 pb-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Do you have discounts for returning customers ?</summary>
              <div className="px-4 pb-4">
                <p>Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency.</p>
              </div>
            </details>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Faq