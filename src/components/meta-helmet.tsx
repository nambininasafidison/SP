import { Helmet } from "react-helmet-async";

interface MetaHelmetInterface {
  title: string;
  description: string;
  keywords: string;
}

const MetaHelmet = (props: MetaHelmetInterface) => (
  <Helmet>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />
  </Helmet>
);

export default MetaHelmet;
