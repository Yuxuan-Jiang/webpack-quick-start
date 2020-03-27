import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ExpensionBar({ url, name }) {
    const classes = useStyles();
    let UrlList = name.split("/")
    let DisplayNameList = UrlList[UrlList.length - 1].split(".")
    let DisplayName = DisplayNameList[0]
    return (<ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography className={classes.heading}>{DisplayName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <iframe src={url} width="100%" height="500px"></iframe>
        </ExpansionPanelDetails>
    </ExpansionPanel>)
}