import Home from '../user/home';
import { useDash } from '../../context/dashContext';
import Capitulos from '../user/capitulos';

const Main = () => {
    const { menuOption } = useDash();

    return (
        <>
            {menuOption === 'Home' && <Home />}
            {menuOption === 'Capitulos' && <Capitulos />}
        </>
    )

}

export default Main;