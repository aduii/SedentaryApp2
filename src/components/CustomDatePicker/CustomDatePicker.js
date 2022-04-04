import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import { Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const CustomDatePicker = ({ control, name, rules = {} }) => {
  let nowDate = new Date();

  let strNowDate =
    String(nowDate.getDate()).padStart(2, "0") +
    "-" +
    String(nowDate.getMonth() + 1).padStart(2, "0") +
    "-" +
    nowDate.getFullYear();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <DatePicker
            style={[
              styles.datepicker,
              { borderColor: error ? "red" : "#AED6F1" },
            ]}
            date={value}
            mode="date"
            placeholder="Seleccione su fecha de nacimiento"
            format="DD-MM-YYYY"
            minDate="01-01-1960"
            maxDate={strNowDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            androidMode="spinner"
            onBlur={onBlur}
            customStyles={{
              dateInput: {
                margin: 0,
                padding: 5,
                borderWidth: 0,
                alignItems: "flex-start",
              },
            }}
            onDateChange={onChange}
          />
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  datepicker: {
    width: "100%",
    padding: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#AED6F1",
  },
});

export default CustomDatePicker;
