import Select from "react-select";
import "./style.css";

export default function SelectLanguage({ changeHandler }) {
  const options = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "french", label: "French" },
    { value: "russian", label: "Russian" },
    { value: "chinese", label: "Chinese" },
  ];
  return (
    <div className="select-language">
      <span>Select Language</span>{" "}
      <Select
        placeholder="Select Language"
        options={options}
        onChange={changeHandler}
        defaultValue={"english"}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width: "20rem",
          }),
        }}
      />
    </div>
  );
}
