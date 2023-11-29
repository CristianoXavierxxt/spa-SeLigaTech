import { Input } from "../../components/Inputs/Input.jsx"
import { AuthContainer, Section } from "./AuthenticationStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function Authentication() {

    const { 
        register: registerSignup, 
        handleSubmit: handleSubmitSignup, 
        reset: resetSignup, formState: { errors: errorsSignup } } = useForm({
        resolver: zodResolver(signupSchemma)
    })

    const { 
        register: registerSignin, 
        handleSubmit: handleSubmitSignin, 
        reset: resetSignin, formState: { errors: errosSignin } } = useForm({
        resolver: zodResolver(signinSchemma)
    })

    function inHandleSubmit(data) {
        
    }

    function upHandleSubmit(data) {
        
    }


    return (
        <>
            <AuthContainer>

                <Section type="signin">

                    <h2>Entrar</h2>

                    <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                        <Input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        register={registerSignin}
                        />
                        
                        <Input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        register={registerSignin}
                        />

                        <Button type="submit" text="Entrar"></Button>

                    </form>

                </Section>

                <Section type="signup">

                    <h2>Cadastrar</h2>

                    <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                        <Input 
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        register={registerSignup}
                        />
                        <Input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        register={registerSignup}
                        />
                        
                        <Input 
                        type="password"
                        placeholder="Senha"
                        name="password"
                        register={registerSignup}
                        />
                        
                        <Input 
                        type="password"
                        placeholder="Confirmar senha"
                        name="password"
                        register={registerSignup}
                        />

                        <Button type="submit" text="Cadastrar"></Button>

                    </form>
                </Section>

            </AuthContainer>
        </>
    )
}