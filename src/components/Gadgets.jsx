import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";

const Gadgets = () => {
  const gadgets = useLoaderData();
  const { gadgetsCategory } = useParams();
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  useEffect(() => {
    if (gadgetsCategory) {
      const gadgetsFiltered = [...gadgets].filter(
        (gadgetItem) => gadgetItem.category === gadgetsCategory
      );
      setFilteredGadgets(gadgetsFiltered);
    } else {
      setFilteredGadgets(gadgets);
    }
  }, [gadgets, gadgetsCategory]);

  return (
    <div className="w-3/4 grid grid-cols-3 gap-6">
      {filteredGadgets.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

Gadgets.propTypes = {};

export default Gadgets;
