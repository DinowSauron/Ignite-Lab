import { Heading } from "./components/Heading"
import { Text } from "./components/Text"
import { TextInput } from "./components/TextInput"
import { Checkbox } from "./components/Checkbox"
import { Button } from "./components/Button"
import Logo from "./components/logo"
import "./styles/global.css"
import { EnvelopeSimple, Lock } from "phosphor-react"

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo/>
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-1">
          Faça login e começe a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple/>
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="*********"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex pr-2 items-center gap-2 cursor-pointer w-fit">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-200">Lembrar login</Text>
        </label>

        <Button type="submit" className="mt-4 ">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline transition hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline transition hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

