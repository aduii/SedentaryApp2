import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import { StyleSheet } from "react-native";

const CustomDatePicker = ({ date, setDate }) => {
  let nowDate = new Date();

  let strNowDate =
    String(nowDate.getDate()).padStart(2, "0") +
    "-" +
    String(nowDate.getMonth() + 1).padStart(2, "0") +
    "-" +
    nowDate.getFullYear();

  return (
    <DatePicker
      style={styles.datepicker}
      date={date}
      mode="date"
      placeholder="Seleccione su fecha de nacimiento"
      format="DD-MM-YYYY"
      minDate="01-01-1960"
      maxDate={strNowDate}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      androidMode="spinner"
      customStyles={{
        dateInput: {
          margin: 0,
          padding: 5,
          borderWidth: 0,
          alignItems: "flex-start",
        },
      }}
      onDateChange={(date) => {
        setDate(date);
      }}
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
