import { useDispatch } from "react-redux";
import { usePseudo } from "../../../context/pseudoContext";
import { setProfil } from "../../../feature/profil.slice";

const PseudoForm = () => {
  const { pseudo, updatePseudo } = usePseudo();
  const dispatch = useDispatch();

  const handlePseudoChange = (event) => {
    updatePseudo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Pseudo soumis : ${pseudo}`);
    dispatch(setProfil(pseudo));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pseudo:
        <input type="text" value={pseudo} onChange={handlePseudoChange} />
      </label>
      <button type="submit">Valider</button>
    </form>
  );
};

export default PseudoForm;
