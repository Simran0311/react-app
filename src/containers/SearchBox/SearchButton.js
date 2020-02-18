import React from "react";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
// import classes from './SearchButton.module.css';




const useStyles = makeStyles(theme => ({
    
  button: {
    
    background: 'linear-gradient(45deg, #7FCCF8 99%, #72b7df 129%)',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 25px',
    boxShadow: '0 3px 5px 2px rgba(127, 204, 248, .3)',
    transform: "translateX( calc( -100% - 2px))"
    
  }
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
      <Button variant="contained"  color="black" className={classes.button} onClick={props.onClick}>
        <SearchIcon />
      </Button>
  );
}