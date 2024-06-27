export default function TabButton({ children, isSelected , ...props}) {
  return (
    <li>
      <button class={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
