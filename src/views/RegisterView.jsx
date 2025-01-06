import "./RegisterView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router";
import { useState, useRef } from "react";
import { useStoreContext } from "../context";
import { Map } from 'immutable';

function RegisterView() {
  const navigate = useNavigate();
  const { setFirstName, setLastName, setEmail, setPassword, setChoices, setLoggedIn, setDefaultGenre, setCart } = useStoreContext();
  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const [checkPassword, setCheckPassword] = useState("");
  const checkboxesRef = useRef({});
  const genres = [
    { id: 28, genre: "Action" },
    { id: 12, genre: "Adventure" },
    { id: 16, genre: "Animation" },
    { id: 35, genre: "Comedy" },
    { id: 80, genre: "Crime" },
    { id: 10751, genre: "Family" },
    { id: 14, genre: "Fantasy" },
    { id: 36, genre: "History" },
    { id: 27, genre: "Horror" },
    { id: 10402, genre: "Music" },
    { id: 9648, genre: "Mystery" },
    { id: 878, genre: "Sci-Fi" },
    { id: 53, genre: "Thriller" },
    { id: 10752, genre: "War" },
    { id: 37, genre: "Western" }
  ];

  function register(event) {
    event.preventDefault();
    if (password.current.value !== checkPassword) {
      return alert("Passwords do not match. Please re-enter your password correctly");
    }

    const selectedGenres = Object.keys(checkboxesRef.current)
      .filter((genreId) => checkboxesRef.current[genreId].checked)
      .map(Number);

    if (selectedGenres.length < 10) {
      alert("Please select at least 10 genres!");
      return;
    }

    const sortedGenres = selectedGenres
      .map((genreId) => genres.find((genre) => genre.id === genreId))
      .sort((a, b) => a.genre.localeCompare(b.genre));

    alert("Account Successfully Created")
    setFirstName(firstName.current.value);
    setLastName(lastName.current.value);
    setEmail(email.current.value);
    setPassword(password.current.value);
    setLoggedIn(true);
    setChoices(sortedGenres);
    setDefaultGenre(sortedGenres[0].id);
    // Resets cart to empty upon registration
    setCart(Map());
    navigate(`/movies/genre/${sortedGenres[0].id}`);
  }

  return (
    <div className="sign-up-page">
      <Header />
      <div className="sign-up">
        <h2>Register</h2>
        <form onSubmit={register}>
          <div className="info">
            <input
              type="text"
              ref={firstName}
              required
            />
            <label>First Name</label>
          </div>
          <div className="info">
            <input
              type="text"
              ref={lastName}
              required
            />
            <label>Last Name</label>
          </div>
          <div className="info">
            <input
              type="email"
              ref={email}
              required
            />
            <label>Email</label>
          </div>
          <div className="info">
            <input
              type="password"
              ref={password}
              required
            />
            <label>Password</label>
          </div>
          <div className="info">
            <input
              type="password"
              value={checkPassword}
              onChange={(event) => setCheckPassword(event.target.value)}
              required
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit" className="sign-up-btn">Register</button>
        </form>

        <div className="genre-selection">
          <h3>Please select at least 10 genres</h3>
          <div className="genre-checkboxes">
            {genres.map((item) => (
              <div key={item.id} className="genre-checkbox">
                <input
                  type="checkbox"
                  ref={(el) => (checkboxesRef.current[item.id] = el)}
                />
                <label>{item.genre}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterView;
