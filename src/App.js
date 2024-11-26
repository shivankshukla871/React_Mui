import "./App.css";
import top100Films from "./top100Films";

import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

import Autocomplete from "@mui/material/Autocomplete";

import Checkbox from "@mui/material/Checkbox";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import InputLabel from "@mui/material/InputLabel";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import { Fragment, useEffect, useState } from "react";

import Switch from "@mui/material/Switch";

import Divider from "@mui/material/Divider";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CircularProgress from "@mui/material/CircularProgress";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';

import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { getUserList } from "./utils";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

function App() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/usermodel/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="text-center">
        <h1>Welcome to Material UI Tutorial</h1>
      </header>
      <div className="body">
        {/* Card with api data */}
        <div style={{ display: "flex" ,gap:10}}>
          {users.map((user) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  {user.name}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {"City : " + user.city}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>

        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Button */}
        <div className="button-container">
          <div className="heading">
            <h2>Button and Button Groups</h2>
          </div>
          <div className="button">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </div>
          <div className="button">
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
          </div>
          <div className="button">
            <Button variant="contained" disableElevation>
              Disable elevation
            </Button>
          </div>
          <div className="button-group">
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
          <div className="button-group">
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
          <div className="button-group">
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* AutoComplete */}
        <div className="autocomplete">
          <div className="heading">
            <h2>AutoComplete</h2>
          </div>
          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Check Box */}
        <div className="checkbox">
          <div className="heading">
            <h2>CheckBox</h2>
          </div>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
          <FormGroup sx={{ marginLeft: "10px" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Required"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Radio Group */}
        <div className="radio">
          <div className="heading">
            <h2>Radio</h2>
          </div>
          <FormControl sx={{ marginLeft: "10px" }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Select */}
        <div className="select">
          <div className="heading">
            <h2>Select</h2>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Switch */}
        <div className="switch">
          <div className="heading">
            <h2>Switch</h2>
          </div>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Label"
            />
            <FormControlLabel required control={<Switch />} label="Required" />
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
          </FormGroup>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* TextField */}
        <div className="textField">
          <div className="heading">
            <h2>Text Field</h2>
          </div>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                error
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
              />
            </div>
            <div>
              <TextField
                error
                id="filled-error"
                label="Error"
                defaultValue="Hello World"
                variant="filled"
              />
              <TextField
                error
                id="filled-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="filled"
              />
            </div>
            <div>
              <TextField
                error
                id="standard-error"
                label="Error"
                defaultValue="Hello World"
                variant="standard"
              />
              <TextField
                error
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="standard"
              />
            </div>
          </Box>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Table */}
        <div className="table">
          <div className="heading">
            <h2>Table</h2>
          </div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
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
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
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
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Alert */}
        <div className="alert">
          <div className="heading">
            <h2>Alerts</h2>
          </div>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">This is a success Alert.</Alert>
            <Alert severity="info">This is an info Alert.</Alert>
            <Alert severity="warning">This is a warning Alert.</Alert>
            <Alert severity="error">This is an error Alert.</Alert>
          </Stack>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Dialog */}
        <div className="alert">
          <div className="heading">
            <h2>Dialog</h2>
          </div>
          <Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
              Open alert dialog
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Fragment>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* ProgressBar */}
        <div className="progressBar">
          <div className="heading">
            <h2>Progress Bar</h2>
          </div>
          <Stack spacing={2} direction="row">
            <CircularProgress variant="determinate" value={25} />
            <CircularProgress variant="determinate" value={50} />
            <CircularProgress variant="determinate" value={75} />
            <CircularProgress variant="determinate" value={100} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
        </div>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        {/* Tabs */}
        <div className="tabs">
          <div className="heading">
            <h2>Tabs</h2>
          </div>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
