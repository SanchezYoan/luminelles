import { usePseudo } from "../../../context/pseudoContext";
import { useDispatch } from "react-redux";
import { getProfil } from "../../../feature/profil.slice";
import axios from "axios";

const PseudoForm = () => {
  const { pseudo, updatePseudo } = usePseudo();
  const dispatch = useDispatch();

  const handlePseudoChange = (event) => {
    updatePseudo(event.target.value);
    axios
      .put("http://localhost:5000/")
      .then(() => dispatch(getProfil(event.target.value)));
    console.log("pseudo ajouté");
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
