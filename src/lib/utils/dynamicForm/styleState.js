
/**
 * textFieldStyle
 *
 * Default CSS class mapping for all dynamic form fields and their sub-elements.
 * Used as the base style object throughout your form builder package.
 *
 * - Structure mirrors all field/component types: field, radio, select, multiSelect, error, etc.
 * - Every key points to a CSS class or nested group of classes for granular control.
 * - Always use as a read-only base: allow schema-level or field-level overrides via deep merge in components.
 *
 * Example usage in a Vue component:
 *   :class="[
 *     style?.fieldAndError?.field,
 *     schema?.style?.fieldAndError?.field,
 *     item?.customStyle?.fieldAndError?.field
 *   ]"
 *
 * DO NOT mutate this object in runtime. For custom themes or overrides,
 *   - Extend/merge with schema.style or field.customStyle.
 *   - (Optional) Export additional style objects for other design systems.
 *
 * @type {Object}
 */
const textFieldStyle={
    mainDiv:'textField__default__mainDiv',
    field:{
        mainDiv: 'textField__default__field__mainDiv',
        wrapper: 'textField__default__field__wrapper',
        container: 'textField__default__field__container',
        label: {
            label:'textField__default__field__container__label',
            mandatory:'textField__default__field__container__label__mandatory'
        },
        password:{
            container:'textField__password__field__container',
            show:'textField__password__field__show',
        },
    },

    fieldAndError:{
        wrapper:'textField__default__field__container__fieldAndError__wrapper',
        fieldAndIcon:{
            wrapper:'textField__default__field__container__fieldAndError__fieldAndIcon__wrapper',
            fieldWithIcon: 'textField__default__field__container__fieldAndError__fieldAndIcon__fieldWithIcon',
        },
        field:'textField__default__field__container__fieldAndError__field',
        fieldError:'textField__default__field__container__fieldAndError__field__error',
        radioField:{
            wrapper:'textField__default__field__container__fieldAndError__radioField__wrapper',
            container:'textField__default__field__container__fieldAndError__radioField__container',
            input:'textField__default__field__container__fieldAndError__radioField__input',
            label:'textField__default__field__container__fieldAndError__radioField__label',
        },
        selectField: {
            wrapper:'textField__default__field__container__fieldAndError__select__wrapper',
            field:'textField__default__field__container__fieldAndError__select__field',
            labelAndIcon:{
                wrapper:'textField__default__field__container__fieldAndError__select__labelAndIcon__wrapper',
                label:'textField__default__field__container__fieldAndError__select__labelAndIcon__label',
                icon: {
                    icon:'textField__default__field__container__fieldAndError__select__labelAndIcon__icon__icon',
                    path:'textField__default__field__container__fieldAndError__select__labelAndIcon__icon__path',
                },
            },
            dropdown: {
                wrapper:'textField__default__field__container__fieldAndError__select__dropdown__wrapper',
                input:'textField__default__field__container__fieldAndError__select__dropdown__input',
                list:'textField__default__field__container__fieldAndError__select__dropdown__list',
                item:'textField__default__field__container__fieldAndError__select__dropdown__item',
                itemSelected:'textField__default__field__container__fieldAndError__select__dropdown__item__selected'
            }

        },
        multiSelect: {
            mainWrapper:'textField__default__field__container__fieldAndError__multiSelect__mainWrapper',
            field:'textField__default__field__container__fieldAndError__multiSelect__field',
            labelAndIcon:{
                wrapper:'textField__default__field__container__fieldAndError__select__labelAndIcon__wrapper',
                label:'textField__default__field__container__fieldAndError__multiSelect__labelAndIcon__label',
                icon: {
                    icon:'textField__default__field__container__fieldAndError__multiSelect__labelAndIcon__icon__icon',
                    path:'textField__default__field__container__fieldAndError__multiSelect__labelAndIcon__icon__path',
                },
                tag:{
                    view:{
                        view: 'textField__default__field__container__fieldAndError__multiSelect__tag__view',
                        wrapper:'textField__default__field__container__fieldAndError__multiSelect__tag__view__wrapper',
                        container:'textField__default__field__container__fieldAndError__multiSelect__tag__view__container',
                        value:"textField__default__field__container__fieldAndError__multiSelect__tag__view__value",
                        remove:{
                            container:"textField__default__field__container__fieldAndError__multiSelect__tag__view__remove__container",
                            value:"textField__default__field__container__fieldAndError__multiSelect__tag__view__remove__value",
                        },
                    },
                },
                dropdown: {
                    wrapper:'textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__wrapper',
                    input:'textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__input',
                    container:{
                        container:'textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container',
                        box:'textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__box',
                        icon:{
                            icon:'textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__icon__icon',
                            path:['textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__icon__path1','textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__icon__path2'],
                        },
                        item:'textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__item',
                    },

                }
            }
        },
        error:{
            wrapper:'textField__default__field__container__fieldAndError__error__wrapper',
            message: 'textField__default__field__container__fieldAndError__error__message',
        },

        submit:{
            wrapper:'textField__default__submit__wrapper',
            button:'textField__default__submit__button',
        },
        insetIcon:{
            wrapper:'textField__default__field__insetIcon__wrapper',
            icon:'textField__default__field__insetIcon__icon',
            path:["textField__default__field__insetIcon__path1","textField__default__field__insetIcon__path2"],

        }

    },
}

export default textFieldStyle;