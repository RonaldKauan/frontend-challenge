import { createRef } from "react";

import styled from "./Search.module.css";

import SearchIcon from "../../../assets/search-icon.svg";
import CloseIcon from "../../../assets/close-icon.svg";

interface SearchProps {
  value: string;
  handleValue: (newValue: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, handleValue }) => {
  const inputRef = createRef<HTMLInputElement>();

  const isTyping = value.length > 0;

  return (
    <div
      className={`${styled.container} ${isTyping ? "border-2 border-solid border-[#00AAC1]" : "border border-solid border-[#86868645]"}`}
      onClick={() => inputRef.current?.focus()}
    >
      <div className={styled.searchContainer}>
        <SearchIcon className={styled.searchIcon} />

        <input
          ref={inputRef}
          name="search"
          type="text"
          value={value}
          onChange={(e) => handleValue(e.target.value)}
          placeholder="Pesquisa"
          className={styled.input}
        />
      </div>

      {isTyping && (
        <CloseIcon
          className={styled.closeIcon}
          onClick={() => handleValue("")}
        />
      )}
    </div>
  );
};

export default Search;
