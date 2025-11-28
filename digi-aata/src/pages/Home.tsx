import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';
import { META } from '../data/meta';

const Home: React.FC = () => {
  // Take a few featured products for the home page, e.g., first 6
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${PRODUCTS[12].image})` }} // Using rainbow-arches as hero
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-heading mb-4 font-bold tracking-tight">The Legend of Digi-Aata</h1>
            <p className="text-lg md:text-xl font-sans mb-8 max-w-2xl mx-auto">In a world brimming with digital distractions, a small group of artisans decided to bring back the joy of tangible play. They crafted toys that were not just beautiful, but also sparked imagination and creativity. Thus, Digi-Aata was born.</p>
            <Link to="/products" className="mt-8 inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">Explore Our Creations</Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-heading mb-10 font-bold">Our Story</h2>
        <p className="text-lg text-muted max-w-3xl mx-auto mb-10">
          Digi-Aata is more than just a toy store; it's a celebration of childhood imagination. Our journey began in a small workshop, with a simple mission: to create handcrafted toys that inspire joyful learning and endless adventures. Each toy is lovingly made from natural materials, designed to be both beautiful and durable. We believe in the power of play to shape young minds, and we're passionate about creating products that are as good for the planet as they are for your little ones.
        </p>
        <p className="text-lg text-muted max-w-3xl mx-auto">
          Join us on our quest to bring back the magic of real play, one wooden block at a time.
        </p>
      </section>


      {/* Featured Products */}
      <section className="bg-surface py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-12 font-bold">Featured Products</h2>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-16">
            <Link to="/products" className="inline-block bg-primary text-white px-10 py-4 rounded-lg hover:bg-opacity-90 transition-colors">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="bg-background py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-8 font-bold">Connect With Us</h2>
          <p className="text-lg text-muted mb-4">Have a question or want to say hello?</p>
          <div className="mt-8 space-y-4">
            <p className="text-xl"><strong>Phone:</strong> <a href={`tel:${META.phone}`} className="hover:text-accent">{META.phone}</a></p>
            <p className="text-xl"><strong>Instagram:</strong> <a href={`https://www.instagram.com/${META.instagram}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@{META.instagram}</a></p>
            <p className="text-xl"><strong>Address:</strong> {META.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
