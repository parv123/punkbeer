import "../css/style.css";
export default function Header() {
  return (
    <div className="navbar">
      <span className="navbar-title">Beans Love Beer</span>
      <span className="navbar-urls">
        <a href="/">Home</a>
        <a href="/favourites">Favourites</a>
      </span>
    </div>
  );
}
