import { siteConfig } from "@/utils/meta";
import { Helmet } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

const Seo = ({ title, description, image }: SeoProps) => {
  return (
    <Helmet>
      <title>{title || siteConfig.title}</title>
      <meta
        name="description"
        content={description || siteConfig.description}
      />
      <meta name="application-name" content={siteConfig.name} />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* Open Graph */}
      <meta property="og:title" content={title || siteConfig.title} />
      <meta
        property="og:description"
        content={description || siteConfig.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content={siteConfig.getImageUrl(image || siteConfig.default_image)}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteConfig.title} />
      <meta
        name="twitter:description"
        content={description || siteConfig.description}
      />
      <meta
        name="twitter:image"
        content={siteConfig.getImageUrl(image || siteConfig.default_image)}
      />

      {/* Format Detection */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="format-detection" content="address=no" />

      {/* Robots */}
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="googlebot"
        content="index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />
    </Helmet>
  );
};

export default Seo;
