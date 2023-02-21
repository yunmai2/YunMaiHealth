import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const YuyuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="tedt" source="tedt" />
      </SimpleForm>
    </Create>
  );
};
