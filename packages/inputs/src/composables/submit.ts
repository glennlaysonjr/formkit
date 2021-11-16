import { FormKitSchemaNode, FormKitSchemaComposable } from '@formkit/core'
import { extend } from '@formkit/utils'

const submit: FormKitSchemaComposable = (schema = {}) => ({
  if: '$slots.submit',
  then: '$slots.submit',
  else: [
    extend(
      {
        $cmp: 'FormKit',
        props: {
          type: 'submit',
          label: {
            if: '$submitLabel',
            then: '$submitLabel',
            else: 'Submit',
          },
        },
      },
      schema
    ) as FormKitSchemaNode,
  ],
})
export default submit