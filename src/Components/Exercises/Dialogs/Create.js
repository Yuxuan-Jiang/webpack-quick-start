import React, { Component, Fragment } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Fab
} from "@material-ui/core";

export default class extends Component {
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState(prevState => {
      this.state.open = !prevState.open;
    });
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Button>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill the form below</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
