export const RegistroCorreo = () => {
    return (
        <>
            <i className="fa-solid fa-arrow-left fa-2xl arrow"></i>

            <div className="registro">
                <br />
                <div className="title">
                    <p className="text">Create your account </p>
                </div>

                <form className="form">
                    <p >Full name</p>
                    <input className="input" type="text"/>

                    <p >Email</p>
                    <input className="input" type="email"/>

                    <p >Password</p>
                    <input className="input" type="password"/>

                    <p >Retype password</p>
                    <input className="input" type="password"/>
                </form>

                <button className="button is-link">Submit</button>

            </div>

        </>
    )
}
