import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const fullTitle = title
    ? `${title} | Paitaxt Technical Institute`
    : 'Paitaxt Technical Institute | پەیمانگەی تەکنیکی پایتەخت';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Paitaxt Technical Institute - Private technical institute in Erbil, Kurdistan Region.'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Private technical institute in Erbil.'} />
    </Helmet>
  );
};

export default SEO;