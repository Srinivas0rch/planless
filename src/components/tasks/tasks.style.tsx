import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '200px',
        backgroundColor: "#ffcccc",
    },
    marked: {
        textDecoration: 'line-through'
    },
}));

export default useStyles;
