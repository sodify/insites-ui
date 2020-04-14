declare type Variant = "primary" | "secondary" | "pill" | "blank";
declare type Size = "small" | "huge" | "";
interface ButtonProps {
    variant?: Variant;
    size?: Size;
}
declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export default Button;
