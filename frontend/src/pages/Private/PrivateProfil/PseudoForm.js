// import { usePseudo } from "../../../context/pseudoContext";
import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "../../../feature/profil.slice";
import axios from "axios";

const PseudoForm = () => {
  // const { pseudo, updatePseudo } = usePseudo();
  const pseudo = useSelector((state) => state.profilSlice.pseudo);
  const dispatch = useDispatch();

  const handlePseudoChange = (event) => {
    const nouveauPseudo = event.target.value;
    // updatePseudo(event.target.value);
    //
    console.log("pseudo ajouté");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/private/private-home", { pseudo })
      .then(() => dispatch(getProfil(pseudo)));
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
