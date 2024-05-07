import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
}

const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    ...props
}) => {
    // Kelas dasar untuk tombol
    const baseClass = 'px-4 py-2 font-semibold rounded focus:outline-none';

    // Kelas CSS untuk setiap varian
    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700',
        success: 'bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
        danger: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700',
        info: 'bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700',
    };

    // Kelas CSS untuk setiap ukuran
    const sizeClasses = {
        'extra-small': 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        'extra-large': 'text-xl',
    };

    // Gabungan kelas tombol berdasarkan varian, ukuran, dan kelas tambahan
    const buttonClass = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
