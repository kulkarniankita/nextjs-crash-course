interface BadgeProps {
  text: string;
  color: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  return (
    <span
      className={`inline-block px-2 py-1 font-semibold text-white ${color}`}
    >
      {text}
    </span>
  );
};

export default Badge;
