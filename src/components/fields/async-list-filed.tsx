import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "@mui/material/utils";

type Props<T extends { id: string }> = {
  name: string;
  defaultValue?: T;
  isLoading: boolean;
  options: T[];
  groupBy?: (option: T) => string;
  getOptionLabel: (option: T) => string;
  label: string;
  setQuery: (q: string) => void;
  error?: boolean;
<<<<<<< Updated upstream
  helperText?: string | string[];
=======
<<<<<<< Updated upstream
  helperText?: string;
=======
  helperText?: string | string[];
  onChange?: (value: T | null) => void;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
};

export default function AsyncListField<T extends { id: string }>({
  name,
  defaultValue,
  isLoading,
  options,
  groupBy,
  getOptionLabel,
  label,
  setQuery,
  error,
  helperText,
  onChange,
}: Props<T>) {
  const [inputValue, setInputValue] = useState("");
<<<<<<< Updated upstream
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
<<<<<<< Updated upstream
  // eslint-disable-next-line react-hooks/exhaustive-deps
=======
=======
  const [value, setValue] = useState<T | null>(defaultValue ?? null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  const updateQuery = useCallback(
    debounce((inputValue: string, value) => {
      setQuery(value ? "" : inputValue);
    }, 500),
    []
  );

  return (
    <>
      {value?.id && (
        <input
          type="hidden"
          name={name} // This will be sent to the backend
          defaultValue={value?.id}
        />
      )}
      <Autocomplete
        fullWidth
        disablePortal
        inputValue={inputValue}
        value={value}
        onChange={(event: unknown, newValue: T | null) => {
          setValue(newValue);
          onChange?.(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          updateQuery(newInputValue, value);
        }}
        options={options}
        groupBy={groupBy}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            helperText={helperText}
            label={label}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              },
            }}
          />
        )}
      />
    </>
  );
}
