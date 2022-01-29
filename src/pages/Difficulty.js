import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Difficulty = () => {
  return (
    <div className="difficulty">
      <Logo />
      <Navigation />
      <h1>Difficulté</h1>

      <form>
        <div className="level">
          <input type="radio" name="lvl" id="facile" />
          <label htmlFor="facile">Facile</label>

          <input type="radio" name="lvl" id="moyen" checked/>
          <label htmlFor="moyen">Moyen</label>

          <input type="radio" name="lvl" id="difficile" />
          <label htmlFor="difficile">Difficile</label>
        </div>
        <button>Valider</button>
      </form>

    </div>
  );
};

export default Difficulty;
