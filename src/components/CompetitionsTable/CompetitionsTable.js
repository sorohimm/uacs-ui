import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CompetitionApi from "../Api/Competitions";

const columns = [
    {
        id: 'competition',
        label: 'Competition',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'organizer',
        label: 'Organizer',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'location',
        label: 'Location',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'updated',
        label: 'Updated',
        minWidth: 170,
        align: 'left',
    },
];


function loadCompetitions() {
    const client = new CompetitionApi();

    let resp = client.getCompetitions();
    console.log(resp)
    let competitions = [];
    for (let i = 0; i < resp.length; i++) {
        competitions.push(createData(resp[i].code, resp[i].organizedBy, resp[i].location, resp[i].date, resp[i].lastUpdate));
    }

    return competitions;
}

function createData(competition, organizer, location, date, updated) {
    return {competition, organizer, location, date, updated};
}

let rows =  loadCompetitions();

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
