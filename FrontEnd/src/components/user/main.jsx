import Home from '../user/home';
import { useDash } from '../../context/dashContext';
import Capitulos from '../user/capitulos';
import Articulos from './articulos';

const Main = () => {
    const { menuOption } = useDash();

    return (
        <>
            {menuOption === 'Home' && <Home />}
            {menuOption === 'Capitulos' && <Capitulos />}
            {menuOption === 'Articulos' && <Articulos />}
        </>
    )

}

export default Main;