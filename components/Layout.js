import Notify from "./Notify";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Notify />
      {children}
    </div>
  );
}
