import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Portfolio1 from "../../components/Portfolio1";
import Portfolio3 from "../../components/Portfolio3";

const index = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Gallery"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Gallery", url: "/gallery" },
        ]}
      />
      <div className="container p-10">
      <Portfolio3 />
      </div>
  
    </MainLayout>
  );
};

export default index;
