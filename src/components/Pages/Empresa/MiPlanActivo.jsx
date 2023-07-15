import { Button } from "../../atoms/button/Button";
import { Plan } from "../../molecules/plan/Plan"
import { Navbar } from "../../organisms/navBar/Navbar"
import '../styles/miPlanActivo.css';

export const MiPlanActivo = () => {
    return (
        <>
            <section className="margenes">
                <Navbar/>   

                <h2 className="title is-4 tit-plan">Plan activo</h2>

                <Plan Title="$400" Text="Cancelar"/>

                <Button TextName="Cambiar Plan"/>
                <br />
                <Button TextName="Renovar Plan"/>
            </section>
        </>
    )
}
