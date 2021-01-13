import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({
   title = "Welcome To Proshop",
   description = "We sell cheap electronics",
   keywords = "electronics, buy electronics, cheap electronics",
}) => {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name='description' content={description} />
         <meta name='keyword' content={keywords} />
      </Helmet>
   );
};

export default Meta;
