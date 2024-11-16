const Banner = () => {
  return (
    <div className="hero container mx-auto bg-purple-600 text-white font-sora">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold px-40">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 px-64">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-purple-600  rounded-full mt-2 font-bold px-7 hover:bg-purple-600 hover:text-white hover:border-white duration-200 ease-in-out transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;