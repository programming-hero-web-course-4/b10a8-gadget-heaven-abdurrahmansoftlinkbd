import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
  const allGadgets = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      <h2>GadgetDetails: {id}</h2>
    </div>
  );
};

export default GadgetDetails;
