export default function Modal({ isOpen, children }) {
  return isOpen ? (
    <div className="window fixed top-[50%] left-[50%]">{children}</div>
  ) : null;
}
