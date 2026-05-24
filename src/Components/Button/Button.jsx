import "./Button.css";

export const Button = ({ children, onClick, type = "primary", href }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={`btn ${type}`}>{children}</button>
      </a>
    );
  }

  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
