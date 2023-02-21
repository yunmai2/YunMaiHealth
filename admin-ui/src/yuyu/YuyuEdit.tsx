import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const YuyuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="tedt" source="tedt" />
      </SimpleForm>
    </Edit>
  );
};
