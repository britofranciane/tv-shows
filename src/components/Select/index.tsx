import './styles.scss';

interface Props {
  options: string[];
  value: string;
  onChange: (e: string) => void;
  label: string;
}

const Select: React.FC<Props> = ({ options, value, onChange, label }) => {
  return (
    <div className="selector">
      <label htmlFor="season">{label}</label>
      <select
        id="season"
        className="selector__select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option: string) => (
          <option
            key={option}
            value={option}
            className="selector__select__option"
          >
            Season {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
