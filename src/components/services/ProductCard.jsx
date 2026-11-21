
import Image from "next/image";
import { MessageCircle, Check } from "lucide-react";
import { getWhatsAppLink } from "../../lib/whatsapp";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col group">

            {/* Product Image */}
            <div className="h-56 bg-brand-light relative flex items-center justify-center border-b border-gray-100 p-4">

                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <span className="text-gray-400 text-sm font-medium">
                        {product.imagePlaceholderText}
                    </span>
                )}

            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-bold text-brand-navy mb-2">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {product.description}
                </p>

                {/* Specs */}
                <div className="mb-6 space-y-2">

                    {product.gangs && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Check size={16} className="text-brand-blue shrink-0" />
                            <span>{product.gangs}</span>
                        </div>
                    )}

                    {product.colors && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Check size={16} className="text-brand-blue shrink-0" />
                            <span>Colors: {product.colors.join(", ")}</span>
                        </div>
                    )}

                </div>

                {/* WhatsApp Enquiry */}
                <a
                    href={getWhatsAppLink(
                        `Hello ToneUp Solutions, I am interested in the ${product.name}. Please share more details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-navy hover:bg-brand-blue text-white text-center py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
                >
                    <MessageCircle size={18} />
                    Enquire Now
                </a>

            </div>
        </div>
    );
}
