import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import AlertDialogDemo from './alert-dialog'

interface propsDropDownMenu {
  nomeUsuario: string
}

function DropdownMenuDemo (props: propsDropDownMenu): React.JSX.Element {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="bg-blue-900 size-auto px-5 py-2 rounded-full hover:border-[4px] hover:border-slate-800"
          aria-label="Customise options"
        >
          <p> {props.nomeUsuario} </p>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[160px] py-6 flex flex-col items-start justify-center bg-slate-800 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={3}
        >
          <DropdownMenu.Item className="group leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-900 data-[highlighted]:text-violet1">
            Perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group my-2 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-900 data-[highlighted]:text-violet1">
            Configurações
          </DropdownMenu.Item>

          <AlertDialogDemo />

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
