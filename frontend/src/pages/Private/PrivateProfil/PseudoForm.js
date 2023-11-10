import { usePseudo } from "../../../context/pseudoContext";

const PseudoForm = () => {
  const { pseudo, updatePseudo } = usePseudo();

  const handlePseudoChange = (event) => {
    updatePseudo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Pseudo soumis : ${pseudo}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pseudo:
        <input type="text" value={pseudo} onChange={handlePseudoChange} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default PseudoForm;
