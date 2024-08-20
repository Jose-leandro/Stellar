import React, { useEffect, useRef, useState } from "react";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import Image from "next/image";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import JustValidate from "just-validate";
import { verificarDadosUsuarios } from "../src/validacaoLogin";
import { connect } from "react-redux";
import {
  setEstaValidadoCampos,
  setQualEstadoUsuario,
  setQualNomeUsuario,
} from "../app/lib/redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const mapStateToProps = (state: any) => ({
  qualEstadoUsuario: state.qualEstadoUsuario,
  setQualEstadoUsuario,
  estaValidadoCampos: state.estaValidadoCampos,
  setEstaValidadoCampos,
  setQualNomeUsuario,
  qualNomeUsuario: state.qualNomeUsuario,
});

const mapDispatchToProps = {
  setQualEstadoUsuario,
  setEstaValidadoCampos,
  setQualNomeUsuario,
};

function Login({
  qualNomeUsuario,
  setQualNomeUsuario,
  qualEstadoUsuario,
  setQualEstadoUsuario,
  setEstaValidadoCampos,
}: {
  qualNomeUsuario: string;
  setQualNomeUsuario: (value: string) => void;
  qualEstadoUsuario: string;
  setQualEstadoUsuario: (value: string) => void;
  setEstaValidadoCampos: (value: string) => void;
}): React.JSX.Element {
  const [qualNome, setQualNome] = useState(" ");
  const [qualSenha, setQualSenha] = useState(" ");
  const [sucessoLoginBtn, setSucessoLoginBtn] = useState(true);

  const refForm = useRef(null);
  const refButtonForm = useRef<HTMLButtonElement>(null);
  const inputNomeRef = useRef<HTMLInputElement>(null);
  const inputSenhaRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleRedirectToInitialPage = () => {
    setTimeout(() => {
      router.push("/index");
    }, 10000);
  };

  const handelValidacaoCampos = async (): Promise<void> => {
    const argumentoVerificacaoDdaosUsuarios = {
      qualNome,
      qualSenha,
    };

    const transformedObject = { ...argumentoVerificacaoDdaosUsuarios };

    const resultVerificaao = await verificarDadosUsuarios(
      argumentoVerificacaoDdaosUsuarios,
    );

    if (!resultVerificaao.nome) {
      toast.error("O nome digitado não coresponde ao registrado!", {
        position: "top-center",
      });

      setSucessoLoginBtn(false);

      if (inputNomeRef.current !== null && inputNomeRef.current !== undefined) {
        inputNomeRef.current.addEventListener("input", (event: Event) => {
          setSucessoLoginBtn(true);
        });
      }
    }

    if (!resultVerificaao.senha) {
      toast.error("A senha digitada não coresponde ao registrado!", {
        position: "top-center",
      });

      setSucessoLoginBtn(false);

      if (
        inputSenhaRef.current !== null &&
        inputSenhaRef.current !== undefined
      ) {
        inputSenhaRef.current.addEventListener("input", (event: Event) => {
          setSucessoLoginBtn(true);
        });
      }
    }

    if (resultVerificaao.nome && resultVerificaao.senha) {
      toast.success("Login efetuado com sucesso!", {
        position: "top-center",
      });

      setSucessoLoginBtn(true);
      setQualNomeUsuario(resultVerificaao.nomeUsuario);
      console.log(resultVerificaao.nomeUsuario);
      setQualEstadoUsuario(true);
      console.log(qualEstadoUsuario);

      // handleRedirectToInitialPage()
    }
  };

  useEffect(() => {
    if (process.browser) {
      const validator = new JustValidate("#formLogin");
      validator.addField("#form__name", [
        {
          rule: "required",
        },
        { rule: "minLength", value: 3 },
      ]);
      validator.addField("#form__senha", [
        {
          rule: "required",
        },
        { rule: "minLength", value: 3 },
      ]);

      if (refForm.current !== null && refForm.current !== undefined) {
        refForm.current.addEventListener("submit", (event: Event) => {
          event.preventDefault();
        });
      }

      validator.onSuccess((event) => {
        setEstaValidadoCampos(true);
      });
    }
  }, []);

  //  console.log(estaValidadoCampos);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center my-4">
        <div className="flex flex-col items-center mt-2 mb-2">
          <Image
            src="/img/icons8-forma-starburst-48.png"
            width={35}
            height={35}
            alt="logo do site"
          />
          <h1 className="text-2xl mt-2 mb-2">
            Olá e seja bem-vindo de volta! Por gentileza, efetue o seu login
          </h1>
        </div>
        <form
          className="mt-4 bg-gray-900 border flex flex-col items-center border-gray-900 p-12 rounded sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          id="formLogin"
          ref={refForm}
        >
          <div className="flex flex-col mb-5 w-full ">
            <label htmlFor="form__name">Nome</label>
            <input
              id="form__name"
              className="bg-transparent border-slate-700 border mt-2 h-10 rounded"
              ref={inputNomeRef}
              onChange={(event) => {
                const informacoes: string = event.target.value;
                setQualNome(informacoes);
              }}
            ></input>
          </div>
          <div className="flex flex-col mb-5 w-full ">
            <label htmlFor="form__senha">Senha</label>
            <input
              id="form__senha"
              className="bg-transparent border-slate-700 border mt-2 h-10 rounded"
              ref={inputSenhaRef}
              onChange={(event) => {
                const informacoes: string = event.target.value;
                setQualSenha(informacoes);
              }}
            ></input>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Checkbox.Root
                className="shadow-blackA4 hover:bg-violet3 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
                defaultChecked
                id="c1"
              >
                <Checkbox.Indicator className="text-black">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>

              <label
                className="pl-[8px] text-[15px] leading-none text-white"
                htmlFor="c1"
              >
                Mantenha-me conectado
              </label>
            </div>

            <button>Esqueci a minha senha</button>
          </div>
          <button
            type="submit"
            onClick={handelValidacaoCampos}
            ref={refButtonForm}
            disabled={!sucessoLoginBtn}
            className={`w-full mt-4 py-2 ${sucessoLoginBtn ? "bg-blue-800" : "disabled:bg-blue-950"} hover:bg-blue-900 focus:bg-blue-700 focus:w-[98%]`}
          >
            Login
          </button>
          <ToastContainer />

          <div className="text-center w-full ">
            <p className="mt-2 mb-2">Ou continuie com </p>
            <div className="flex w-full justify-around">
              <div className="flex py-2 px-10 border rounded border-slate-700 justify-around items-center">
                <FcGoogle /> <p className="ml-2">Google</p>
              </div>
              <div className="flex py-2 px-10 border rounded border-slate-700 justify-around items-center">
                <FaFacebook /> <p className="ml-2">Facebook</p>
              </div>
            </div>
          </div>
          <Link href="/signup">
            <button className="mt-3">
              Não faz parte do Estrelar ainda? Crie uma conta agora mesmo
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
