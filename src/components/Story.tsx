import image3 from '../assets/images/jholmomo.jpg';
import image4 from '../assets/images/fryrice.jpg';

export default function Story() {
  return (
    <div id="story" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-amber-600 mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6">Welcome to Ming Food <br></br> & Beverage</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 2022, we've been on a remarkable journey of culinary excellence. What started as a small cafe has blossomed into a beloved dining destination, known for our commitment to quality and authentic flavors.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our restaurant is tucked away in a quiet corner, where we've been serving delightful meals with passion and dedication. We believe that food is more than just sustenance – it's an experience that brings people together and creates lasting memories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We've been working in the hospitality industry for over 20 years, bringing together the finest ingredients and traditional recipes. Our commitment to excellence has earned us a reputation for exceptional dining experiences, making us a favorite among locals and visitors alike.
            </p>
            <p className="mb-4 text-sm lowercase text-end tracking-wider leading-relaxed text-amber-600 ">
              - Ming food & beverages
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={image3}
              alt="Restaurant dish" 
              className="rounded-lg w-full h-48 md:h-64 object-cover"
            />
            <img 
              src={image4}
              alt="Restaurant interior" 
              className="rounded-lg w-full h-48 md:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}