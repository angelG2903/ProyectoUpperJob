import { Button } from "../../atoms";
import { Plan } from "../../molecules"
import { Navbar } from "../../organisms/navBar/Navbar"
import './styles/miPlanActivo.css';

export const MiPlanActivo = () => {
    return (
        <>
            <section className="margenes">
                <Navbar isLogin={ false }/>   

                <h2 className=" is-4 tit-plan">Plan activo</h2>

                <Plan Title="$400" Text="Cancelar"/>

                <Button TextName="Cambiar Plan"/>
                <br />
                <Button TextName="Renovar Plan"/>
            </section>
        </>
    )
}
