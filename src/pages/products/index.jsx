import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";


const index = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Products"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Products", url: "/products" },
        ]}
      />
    </MainLayout>
  );
};

export default index;
