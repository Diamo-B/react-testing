import MuiMode from "./Mui/muiMode";
import AppProviders from "./providers/app-providers";

const Test = () => {
    return ( 
        <AppProviders>
            <div className="App">
                <MuiMode/>
            </div>
        </AppProviders>
    );
}
 
export default Test;    