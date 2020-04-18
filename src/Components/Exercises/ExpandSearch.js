import React, { Component, Fragment } from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TextField, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class extends Component {
    state = {
        values: {
            cuisine: ""
        }
    };

    handleChange = name => ({ target: { value } }) => {
        this.setState(
            prevState => ({
                values: {
                    ...prevState.values,
                    [name]: value
                }
            })
        )
    }

    render() {
        const { handleSearch, handleClear } = this.props
        return (<ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h4" style={{ flex: 1 }}>
                    Search</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div >

                    <form noValidate autoComplete="off">
                        <TextField style={{ margin: '10px' }}
                            id="cuisine-search"
                            label="Cuisine"
                            value={this.state.values.cuisine}
                            onChange={this.handleChange("cuisine")} />
                    </form>
                    <Button
                        style={{ margin: '10px' }}
                        variant="contained"
                        color="primary"
                        onClick={() => handleSearch(this.state.values.cuisine)}>
                        Search</Button>
                    <Button
                        style={{ marginLeft: '10px' }}
                        variant="contained"
                        color="secondary"
                        onClick={handleClear}>
                        Clear All</Button>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel >)
    }
}