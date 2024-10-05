import { useNavigate } from "react-router-dom";

const Button = ({ children = 'Button', className = '', extraClassName = '', href, ...props }) => {
    
    const nav = useNavigate();
    const handleRouterClick = () => {
        if (href) {
            nav(href);
        }
    };
    
    return (
        <button
            className={
                className 
                ? className 
                : 'm-1 p-2 px-5 rounded-lg font-semibold bg-gradent text-white' + 
                ' ' + extraClassName || ''
            }
            onClick={handleRouterClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
