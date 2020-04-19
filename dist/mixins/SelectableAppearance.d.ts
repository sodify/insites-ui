interface SelectableProps {
    checked?: boolean;
}
export interface ComponentProps {
    id?: string;
    children?: any;
    checked?: boolean;
    onChange?: any;
    rest?: any[];
}
declare const HiddenSelectableAppearance: import("styled-components").FlattenSimpleInterpolation;
declare const SelectableAppearance: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SelectableProps, any>>;
declare const ControlContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const Label: import("styled-components").StyledComponent<"label", any, {}, never>;
export { ControlContainer, HiddenSelectableAppearance, SelectableAppearance, Label };
