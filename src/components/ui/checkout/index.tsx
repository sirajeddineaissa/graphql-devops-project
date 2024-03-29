import cn from "classnames";
import styled, { themeGet } from "@styled";
import { Label } from "@components/ui/input/input.style";

const FormCheck = styled.div`
  display: flex;
  align-items: center;

  ${Label} {
    cursor: pointer;
    margin-bottom: 0;
    margin-left: 5px;
  }
`;

const CheckboxButton = styled.input`
  margin: 0;
  width: 1em;
  height: 1em;
  cursor: pointer;
  appearance: none;
  vertical-align: top;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: ${themeGet("transition")};
  border-radius: ${themeGet("radii.sm")};
  background-color: ${themeGet("colors.white")};
  border: 1px solid ${themeGet("colors.primary")};

  &:checked {
    background-color: ${themeGet("colors.primary")};
    background-image: url("/images/icons/check.svg");
  }
`;

const Checkbox = ({ className, label, ...props }) => {
  return (
    <FormCheck className={cn(className)}>
      <CheckboxButton type="checkbox" {...props} />
      {label && <Label htmlFor={props?.id}>{label}</Label>}
    </FormCheck>
  );
};

export default Checkbox;
