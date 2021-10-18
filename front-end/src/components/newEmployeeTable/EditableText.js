import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import PropTypes from 'prop-types';

function EditableText({ value, employeeKey, id, handler }) {
    return (
        <Editable
            defaultValue={value}
        >
            <EditablePreview />
            <EditableInput 
                data-key={employeeKey}
                data-id={id}
                onBlur={handler}
                onChange={handler}
                size="s"
            />
        </Editable>
    );
}

EditableText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    employeeKey: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default EditableText;