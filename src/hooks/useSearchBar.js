import { useEffect, useRef, useState } from "react";

export const useSearchBar = (setIsSearchBar) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSearchBar]);

  const handleSearchInput = (event) => {
    setSearchPhrase(event.target.value);
  };

  const handleSearchSubmit = () => {
    localStorage.setItem("searchPhrase", searchPhrase);
    setIsSearchBar(false);
  };

  return {
    searchPhrase,
    setSearchPhrase,
    searchRef,
    handleSearchInput,
    handleSearchSubmit,
  };
};
