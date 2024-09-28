"use client";
import Image from "next/image";

const BreweryImages = ({ images }) => {
    return ( <section>
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt=""
              className="object-cover h-[400px] mx-auto rounded-xl cursor-pointer"
              width={1800}
              height={1200}
              priority={true}
            />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    images.length == 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    className="object-cover h-[200px] w-full rounded-xl cursor-pointer"
                    width={1000}
                    height={500}
                    priority={true}
                  />

                </div>
              ))}
            </div>
          )}
        </div>
      </section>
       );
}

export default BreweryImages;