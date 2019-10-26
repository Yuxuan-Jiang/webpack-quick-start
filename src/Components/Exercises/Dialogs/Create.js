import React, { Component, Fragment } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Fab
} from "@material-ui/core";

export default class extends Component {
  state = {
    open: false,
    values: {
      id: ""
    }
  };
  handleClickOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  handleClickCreate = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  handleChange = name => ({ target: { value } }) => {
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value }
    }));
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Fab aria-label="add" onClick={this.handleClickOpen} size="small">
          <AddIcon />
        </Fab>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill the form below</DialogContentText>
            <form>
              <TextField
                id="standard-name"
                label="id"
                value={this.state.values.id}
                onChange={this.handleChange("id")}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClickCreate}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
