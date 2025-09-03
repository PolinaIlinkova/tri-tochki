import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputField({ value, onChange, onCountryChange, styles }) {
  return (
    <div style={{ width: "100%" }}>
      <PhoneInput
        country={"by"}
        value={value}
        onChange={(val, country) => {
          onChange(val);
          if (onCountryChange) onCountryChange(country.countryCode);
        }}
        inputProps={{
          required: true,
        }}
        inputStyle={styles ? styles : {padding: '0.75rem',
            border: '1px solid #ccc',
            width: '74%',
            background: 'transparent',
            color:'white'} }
        buttonStyle={{
          border: "none",
          background: "transparent",
        }}
      />

      {/* скрытый инпут для FormData */}
      <input type="hidden" name="phone" value={value || ""} />
    </div>
  );
}