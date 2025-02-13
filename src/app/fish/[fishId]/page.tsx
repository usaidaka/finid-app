import React from "react";

interface PageProps {
  params: { fishId: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <h1>Fish ID: {params.fishId}</h1>
    </div>
  );
};

export default Page;
