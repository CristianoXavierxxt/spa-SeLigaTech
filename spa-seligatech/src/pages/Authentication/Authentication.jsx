import { Input } from "../../components/Inputs/Input.jsx"
import { AuthContainer, Section } from "./AuthenticationStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinSchema } from "../../schemas/signinSchema.js"
import { signupSchema } from "../../Schemas/SignupSchema.js"

export function Authentication() {

    const { 
        register: registerSignup, 
        handleSubmit: handleSubmitSignup, 
        formState: { errors: errorsSignup } } = useForm({
            resolver: zodResolver(signupSchema)
        })

    const { 
        register: registerSignin, 
        handleSubmit: handleSubmitSignin, 
        formState: { errors: errosSignin } } = useForm({
            resolver: zodResolver(signinSchema)
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
                        { errosSignin.email && <ErrorSpan>{ errosSignin.email.message }</ErrorSpan> }
                        <Input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        register={registerSignin}
                        />
                        { errosSignin.password && <ErrorSpan>{ errosSignin.password.message }</ErrorSpan> }
                        <Button type="submit" text="Entrar"></Button>

                    </form>

                </Section>

                <Section type="signup">

                    <h2>Cadastrar</h2>

                    <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                        <Input 
                        type="text"
                        placeholder="Nome"
                        name="name"
                        register={registerSignup}
                        />
                        { errorsSignup.name && <ErrorSpan>{ errorsSignup.name.message }</ErrorSpan> }
                        <Input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        register={registerSignup}
                        />
                        { errorsSignup.email && <ErrorSpan>{ errorsSignup.email.message }</ErrorSpan> }
                        <Input 
                        type="password"
                        placeholder="Senha"
                        name="password"
                        register={registerSignup}
                        />
                        { errorsSignup.password && <ErrorSpan>{ errorsSignup.password.message }</ErrorSpan> }
                        <Input 
                        type="password"
                        placeholder="Confirmar senha"
                        name="confirmPassword"
                        register={registerSignup}
                        />

                        { errorsSignup.confirmPassword && <ErrorSpan>{ errorsSignup.confirmPassword.message }</ErrorSpan> }

                        <Button type="submit" text="Cadastrar"></Button>

                    </form>
                </Section>

            </AuthContainer>
        </>
    )
}