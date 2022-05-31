import { useState, useEffect, useRef } from "react";

const AutoComplete = ({ options = ["Madurai", "Tanjore", "Coimbatore"] }) => {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()))
    
    const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setShowSuggestions(false);
    }

    return (
        <div className="autocomplete search_middle my-4 " ref={autocompleteRef} >
            <input 
            
                value={value}
                onChange={handleChange}
                placeholder="Search Your District"
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
};

export default AutoComplete;