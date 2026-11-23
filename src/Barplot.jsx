import Rectangle from "./Rectangle";

const Barplot = ({ hp, attack }) => {
  return (
    <div>
      <Rectangle label="HP" color="seagreen" value={hp} maxValue={160}/>
      <Rectangle label="Attack" color="tomato" value={attack} maxValue={134} />
    </div>
  );
};

export default Barplot;