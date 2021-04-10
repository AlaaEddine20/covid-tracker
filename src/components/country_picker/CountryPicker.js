import React from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// styles
import styles from "./Styles.module.scss";

const CountryPicker = () => {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.picker_container}>
      <FormControl style={inputStyle} className={classes.formControl}>
        <InputLabel style={inputStyle}>Country</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          onChange={handleChange}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    display: "flex",
  },
  icon: {
    fill: "#fefefe",
  },
}));

const inputStyle = {
  color: "#fff",
};

export default CountryPicker;
