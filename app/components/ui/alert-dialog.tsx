import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { connect } from "react-redux";
import { setQualEstadoUsuario } from "../../lib/redux/actions";

const mapStateToProps = (state: any) => ({
  qualEstadoUsuario: state.qualEstadoUsuario,
  setQualEstadoUsuario: setQualEstadoUsuario,
});
const mapDispatchToProps = {
  setQualEstadoUsuario,
};

const AlertDialogDemo = ({ qualEstadoUsuario, setQualEstadoUsuario }) => {
  function handleSairConta() {
    console.log("Saindo da minha conta");
    setQualEstadoUsuario(true);
    console.log(qualEstadoUsuario);
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="pl-[25px] hover:bg-mauve3 shadow-blackA4 inline-flex items-center justify-center rounded-[4px font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
          Sair da conta
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Você realmete que sair sua conta?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            Caso continue, você terá que efetuar o login novamente para acessar
            a sua conta
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button className="text-mauve11 bg-slate-700 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Cancelar
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={handleSairConta}
                className="text-red-950 bg-red-400 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Sim, Sair da minha conta
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialogDemo);
