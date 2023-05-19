import Marquee from "react-fast-marquee";

const Gallery = ({ toys }) => {
  return (
    <div className="mt-8 mb-16">
      <h1 className="text-2xl font-bold text-center">Gallery</h1>
      <hr />
      <hr className="mb-5" />
      <Marquee direction="left" speed={50}>
        <div className="flex space-x-4">
          {toys.map((toy) => {
            return (
              <div key={toy._id}>
                <img
                  className="w-32 h-32 rounded-md"
                  src={toy.img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
