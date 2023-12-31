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

                <div className="content-planActi">
                    <Plan Title="$400" Text="Cancelar"/>

                    <div className="btns-planA">
                        <Button TextName="Cambiar Plan"/>
                        <Button TextName="Renovar Plan" style={"mt-4"}/>
                    </div>
                </div>
            </section>
        </>
    )
}
