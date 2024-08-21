import Button from "./Button1";
import Box from "./Box1";

function ButtonApp(props){
    return(
        <div className="App">
            <Button size='big'></Button>
            <Button size='small'></Button>
            <Box size='big'></Box>
            <Box size='small'></Box>
        </div>
    );
}

export default ButtonApp;