import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  head: {
    backgroundColor: "#0b3464",
    color: theme.palette.common.white,
    fontFamily: "Roboto",
    fontSize: '12pt',
    fontWeight: "600",
    lineHeight: "1.2",
  },
  body: {
    fontSize: 16,
    overflow: "hidden",
  },
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  table: {
    border: "2px solid #0b3464",
    boxShadow: "none",
  },
  row: {
    fontFamily: "Roboto",
    fontWeight: "500",
    lineHeight: "1.2",
    fontSize: "14px",
    color: "#241d41",
  },
  button: {
    textTransform: "uppercase",
  },
});

class CustomizedTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 7,
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  s = (a) => {JSON.stringify(a, null, 2)};

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: event.target.value,
    });
  };

  render() {
    const { vehicles, classes } = this.props;
    const { page, rowsPerPage } = this.state;
    return (
        <TableContainer component={Paper} style={{ marginLeft:'24px', marginRight:'24px', overflowX:'hidden', width:'96%'}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <TableCell
                    classes={{ head: classes.head, body: classes.body }}
                    align="center"
                    >
                    Registration No.
                    </TableCell>
                    <TableCell
                    classes={{ head: classes.head, body: classes.body }}
                    align="center"
                    >
                    Owner Name
                    </TableCell>
                    <TableCell
                    classes={{ head: classes.head, body: classes.body }}
                    align="center"
                    >
                    Vehicle Model
                    </TableCell>
                    <TableCell
                    classes={{ head: classes.head, body: classes.body }}
                    align="center"
                    >
                    Vehicle Class
                    </TableCell>
                    <TableCell
                    classes={{ head: classes.head, body: classes.body }}
                    align="center"
                    >
                    View Details
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>

                {vehicles
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((token) => (
                    <TableRow key={Math.random} classes={{ root: classes.root }}>
                        <TableCell className={classes.row} align="center">
                        {token.registration}
                        </TableCell>
                        <TableCell className={classes.row} align="center">
                        {token.owner}
                        </TableCell>
                        <TableCell className={classes.row} align="center">
                        {token.model}
                        </TableCell>
                        <TableCell className={classes.row} align="center">
                        {token.class}
                        </TableCell>
                        <TableCell className={classes.row} align="center">
                        {token.status === 0 ? (
                            <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<PhoneIcon />}
                            onClick={(event) => {
                                
                            }}
                            >
                            Connect
                            </Button>
                        ) : (
                            <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<VisibilityIcon />}
                            onClick={(event) => {
                                
                            }}
                            >
                            View Details
                            </Button>
                        )}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TablePagination
                    rowsPerPageOptions={[5, 7]}
                    colSpan={8}
                    count={vehicles.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { "aria-label": "rows per page" },
                        native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
  }
}

export default withStyles(styles)(CustomizedTables);
