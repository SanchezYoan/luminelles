import { useDispatch } from "react-redux";
import { usePseudo } from "../../../context/pseudoContext";
import { setProfil } from "../../../feature/profil.slice";
import axios from "axios";


const PseudoForm = () => {
  const { pseudo, updatePseudo } = usePseudo();
  const dispatch = useDispatch();

  const handlePseudoChange = (event) => {
    updatePseudo(event.target.value);
  };

  const data = {
    pseudo,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Pseudo soumis : ${pseudo}`);

    axios
      .post("http://localhost:5000/post/profil", data)
      .then((res) => dispatch(setProfil(res.data.pseudo)));
    dispatch(setProfil(pseudo));

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
