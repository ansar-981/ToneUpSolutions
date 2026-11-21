export default function ProductGallery() {
  const images = [
    "Smart Switch Panel Close-up",
    "Smart Switch Installed in Modern Home",
    "Mobile App Control Interface",
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {images.map((alt, index) => (
        <div 
          key={index} 
          className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm relative overflow-hidden group"
        >
          {/* Replace with Next.js Image component */}
          <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-brand-navy/10 transition-colors flex items-center justify-center">
            <span className="text-gray-500 font-medium text-sm text-center px-4">{alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}