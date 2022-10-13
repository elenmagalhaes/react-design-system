import { ReactNode, InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot'; 
     
export interface TextInputRootProps {
    children: ReactNode;
}
export interface TextInputIconProps {
    children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    )
    
}

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='bg-transparent flex-1 outline-none first-letter:text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputInput.displayName = 'TextInput.Input';
TextInputIcon.displayName = 'TextInput.Icon';