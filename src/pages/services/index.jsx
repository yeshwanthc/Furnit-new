import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Services1 from "../../components/Services1";
import Services4 from "../../components/Services4";


const index = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Services"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Services", url: "/services" },
        ]}
      />
      <div className="">
      <Services4 />
      </div>
 
    </MainLayout>
  );
};

export default index;
