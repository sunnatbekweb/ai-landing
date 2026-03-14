type Variant = 'primary'
type Size = 'md'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: Variant
	size?: Size
	fullWidth?: boolean
}

const variantStyles = {
	primary: 'bg-red text-white hover:bg-red-600 active:scale-90'
	// secondary: 'bg-gray-200 text-black hover:bg-gray-300',
	// outline: 'border border-gray-400 hover:bg-gray-100'
}

const sizeStyles = {
	// sm: 'px-3 py-1 text-sm',
	md: 'px-6 py-2.5'
	// lg: 'px-6 py-3 text-lg'
}

export const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth,
	className = '',
	...props
}: ButtonProps) => {
	return (
		<button
			className={`
        rounded-lg
        transition
        ${variantStyles[variant]}
        ${sizeStyles[size]}
				${fullWidth ? 'w-full' : 'w-fit'}
        ${className}
      `}
			{...props}
		>
			{children}
		</button>
	)
}
