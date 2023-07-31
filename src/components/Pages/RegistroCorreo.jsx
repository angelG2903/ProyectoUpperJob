import { IconoArrow } from "../atoms"
import './styles/registroC.css'

export const RegistroCorreo = () => {
    return (
        <>
            <section className="margenes">
                <IconoArrow/>

                <div className="registro">
                    <br />
                    <div className="title">
                        <p className="text">Create your account </p>
                    </div>

                    <form className="form f1">
                        <p >Full name</p>
                        <input className="input" type="text"/>

                        <p >Email</p>
                        <input className="input" type="email"/>

                        <p >Password</p>
                        <input className="input" type="password"/>

                        <p >Retype password</p>
                        <input className="input" type="password"/>
                    </form>

                    <button className="button is-link btn">Submit</button>

                </div>
            </section>
        </>
    )
}
