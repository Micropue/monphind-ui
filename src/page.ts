import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-page'
const style = `
:host{
    display: block;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--m-backgroundColor);
    color: var(--m-textColor);
    --m-theme-color: ${Theme.theme_color};
    --m-translucency-theme-color: ${Theme.translucency_theme_color};
    --m-selection-backgroundColor: var(--m-translucency-theme-color);
    --m-selection-textColor: ${Theme.selection_textColor};
    --m-backgroundColor: ${Theme.backgroundColor};
    --m-textColor: ${Theme.textColor};
    --m-button-default-textColor: ${Theme.button_default_textColor};
    --m-button-default-backgroundColor: ${Theme.button_default_backgroundColor};
    --m-button-default-hover-boxShadowColor: ${Theme.button_default_hover_boxShadowColor};
    --m-button-default-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-button-default-active-backgroundColor: var(--m-theme-color);
    --m-button-default-active-textColor: ${Theme.button_default_active_textColor};
    --m-button-default-disabled-backgroundColor: ${Theme.button_default_disabled_backgroundColor};
    --m-button-default-disabled-textColor: ${Theme.button_default_disabled_textColor};
    --m-button-outlined-textColor: var(--m-theme-color);
    --m-button-outlined-borderColor: var(--m-theme-color);
    --m-button-outlined-hover-backgroundColor: var(--m-theme-color);
    --m-button-outlined-hover-textColor: ${Theme.button_outlined_hover_textColor};
    --m-button-outlined-disabled-borderColor: ${Theme.button_outlined_disabled_borderColor};
    --m-button-outlined-disabled-textColor: ${Theme.button_outlined_disabled_textColor};
    --m-button-text-textColor: ${Theme.button_text_textColor};
    --m-button-text-hover-backgroundColor: ${Theme.button_text_hover_backgroundColor};
    --m-button-text-active-backgroundColor: var(--m-theme-color);
    --m-button-filled-backgroundColor: var(--m-theme-color);
    --m-button-filled-textColor: ${Theme.button_filled_textColor};
    --m-button-filled-disabled-backgroundColor: ${Theme.button_filled_disabled_backgroundColor};
    --m-button-filled-disabled-textColor: ${Theme.button_filled_disabled_textColor};
    --m-icon-button-default-backgroundColor: ${Theme.icon_button_default_backgroundColor};
    --m-icon-button-default-hover-boxShadowColor: ${Theme.icon_button_default_hover_boxShadowColor};
    --m-icon-button-default-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-icon-button-default-active-backgroundColor: var(--m-theme-color);
    --m-icon-button-default-active-textColor: ${Theme.icon_button_default_active_textColor};
    --m-icon-button-default-disabled-backgroundColor: ${Theme.icon_button_default_disabled_backgroundColor};
    --m-icon-button-default-disabled-textColor: ${Theme.icon_button_default_disabled_textColor};
    --m-icon-button-outlined-borderColor: var(--m-theme-color);
    --m-icon-button-outlined-hover-backgroundColor: var(--m-theme-color);
    --m-icon-button-outlined-hover-textColor: ${Theme.icon_button_outlined_hover_textColor};
    --m-icon-button-outlined-disabled-borderColor: ${Theme.icon_button_outlined_disabled_borderColor};
    --m-icon-button-outlined-disabled-textColor: ${Theme.icon_button_outlined_disabled_textColor};
    --m-icon-button-outlined-color: var(--m-theme-color);
    --m-icon-button-text-hover-backgroundColor: ${Theme.icon_button_text_hover_backgroundColor};
    --m-icon-button-text-active-backgroundColor: var(--m-theme-color);
    --m-icon-button-filled-backgroundColor: var(--m-theme-color);
    --m-icon-button-filled-textColor: ${Theme.icon_button_filled_textColor};
    --m-icon-button-filled-disabled-backgroundColor: ${Theme.icon_button_filled_disabled_backgroundColor};
    --m-icon-button-filled-disabled-textColor: ${Theme.icon_button_filled_disabled_textColor};
    --m-fab-backgroundColor: ${Theme.fab_backgroundColor};
    --m-fab-hover-boxShadowColor: ${Theme.fab_hover_boxShadowColor};
    --m-fab-hover-backgroundColor: ${Theme.fab_hover_backgroundColor};
    --m-fab-active-backgroundColor: var(--m-theme-color);
    --m-fab-active-color: ${Theme.fab_active_color};
    --m-fab-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-fab-disabled-backgroundColor: ${Theme.fab_disabled_backgroundColor};
    --m-fab-disabled-textColor: ${Theme.fab_disabled_textColor};
    --m-checkbox-borderColor: ${Theme.checkbox_borderColor};
    --m-checkbox-checked-color: var(--m-theme-color);
    --m-checkbox-checked-svg-color: ${Theme.checkbox_checked_svg_color};
    --m-checkbox-disabled-color: ${Theme.checkbox_disabled_color};
    --m-checkbox-checked-indeterminate-color: ${Theme.checkbox_checked_indeterminate_color};
    --m-radio-borderColor: ${Theme.radio_borderColor};
    --m-radio-checked-color: var(--m-theme-color);
    --m-radio-disabled-color: ${Theme.radio_disabled_color};
    --m-slider-backgroundColor: ${Theme.slider_backgroundColor};
    --m-slider-slider-backgroundColor: var(--m-theme-color);
    --m-slider-hiddenlabel-color: ${Theme.slider_hiddenlabel_color};
    --m-slider-label-color: ${Theme.slider_label_color};
    --m-segmented-button-backgroundColor: ${Theme.segmented_button_backgroundColor};
    --m-segmented-button-slider-backgroundColor: var(--m-theme-color);
    --m-segmented-button-slider-hover-boxShadowColor: var(--m-translucency-theme-color);
    --m-segmented-button-item-hover-backgroundColor: ${Theme.segmented_button_item_hover_backgroundColor};
    --m-segmented-button-item-active-backgroundColor: ${Theme.segmented_button_item_active_backgroundColor};
    --m-linear-progress-thumb-color: ${Theme.linear_progress_thumb_color};
    --m-linear-progress-value-color: var(--m-theme-color);
    --m-circular-progress-fillColor: var(--m-theme-color);
    --m-switch-trigger-backgroundColor: ${Theme.switch_trigger_backgroundColor};
    --m-switch-checked-backgroundColor: var(--m-theme-color);
    --m-switch-checked-foreColor: var(--m-theme-color);
    --m-switch-backgroundColor: ${Theme.switch_backgroundColor};
    --m-switch-disabled-backgroundColor: ${Theme.switch_disabled_backgroundColor};
    --m-switch-disabled-trigger-foreColor: ${Theme.switch_disabled_trigger_foreColor};
    --m-switch-disabled-trigger-backgroundColor: ${Theme.switch_disabled_trigger_backgroundColor};
    --m-input-backgroundColor: ${Theme.input_backgroundColor};
    --m-input-selection-backgroundColor: var(--m-selection-backgroundColor);
    --m-input-selection-textColor: var(--m-selection-textColor);
    --m-input-default-label-color: ${Theme.input_default_label_color};
    --m-input-focused-label-color: var(--m-theme-color);
    --m-input-focused-icon-color: var(--m-theme-color);
    --m-input-focused-outline-color: var(--m-translucency-theme-color);
    --m-input-disabled-label-color: ${Theme.input_disabled_label_color};
    --m-input-disabled-backgroundColor: ${Theme.input_disabled_backgroundColor};
    --m-input-disabled-color: ${Theme.input_disabled_color};
    --m-input-readonly-color: ${Theme.input_readonly_color};
    --m-input-error-outline-color: ${Theme.input_error_outline_color};
    --m-input-error-label-color: ${Theme.input_error_label_color};
    --m-input-textColor:${Theme.input_textColor};
    --m-textarea-default-backgroundColor:${Theme.textarea_default_backgroundColor};
    --m-textarea-textColor:${Theme.textarea_textColor};
    --m-textarea-default-label-color: ${Theme.textarea_default_label_color};
    --m-textarea-focused-label-color: var(--m-theme-color);
    --m-textarea-focused-outline-color: var(--m-translucency-theme-color);
    --m-textarea-disabled-backgroundColor: ${Theme.textarea_disabled_backgroundColor};
    --m-textarea-disabled-label-color: ${Theme.textarea_disabled_label_color};
    --m-textarea-readonly-color: ${Theme.textarea_readonly_color};
    --m-textarea-error-outline-color: ${Theme.textarea_error_outline_color};
    --m-textarea-error-label-color: ${Theme.textarea_error_label_color};
    --m-picker-default-view-backgroundColor: ${Theme.picker_default_view_backgroundColor};
    --m-picker-default-label-color: ${Theme.picker_default_label_color};
    --m-picker-default-text-color: ${Theme.picker_default_text_color};
    --m-picker-default-icon-color: ${Theme.picker_default_icon_color};
    --m-picker-focused-label-color: var(--m-theme-color);
    --m-picker-focused-outline-color: var(--m-translucency-theme-color);
    --m-picker-default-options-backgroundColor: ${Theme.picker_default_options_backgroundColor};
    --m-picker-default-options-boxShadow-color: ${Theme.picker_default_options_boxShadow_color};
    --m-picker-item-backgroundColor: ${Theme.picker_item_backgroundColor};
    --m-picker-item-color: ${Theme.picker_item_color};
    --m-picker-item-selected-backgroundColor: var(--m-theme-color);
    --m-picker-item-selected-color: ${Theme.picker_item_selected_color};
    --m-picker-item-disabled-backgroundColor: ${Theme.picker_item_disabled_backgroundColor};
    --m-picker-item-disabled-color: ${Theme.picker_item_disabled_color};
    --m-picker-disabled-view-backgroundColor: ${Theme.picker_disabled_view_backgroundColor};
    --m-picker-disabled-view-color: ${Theme.picker_disabled_view_color};
    --m-dark-theme-color: ${Theme.dark_theme_color};
    --m-dark-translucency-theme-color: ${Theme.dark_translucency_theme_color};
    --m-dark-selection-backgroundColor: var(--m-translucency-theme-color);
    --m-dark-selection-textColor: ${Theme.dark_selection_textColor};
    --m-dark-backgroundColor: ${Theme.dark_backgroundColor};
    --m-dark-textColor: ${Theme.dark_textColor};
    --m-dark-button-default-textColor: ${Theme.dark_button_default_textColor};
    --m-dark-button-default-backgroundColor: ${Theme.dark_button_default_backgroundColor};
    --m-dark-button-default-hover-boxShadowColor: ${Theme.dark_button_default_hover_boxShadowColor};
    --m-dark-button-default-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-dark-button-default-active-backgroundColor: var(--m-theme-color);
    --m-dark-button-default-active-textColor: ${Theme.dark_button_default_active_textColor};
    --m-dark-button-default-disabled-backgroundColor: ${Theme.dark_button_default_disabled_backgroundColor};
    --m-dark-button-default-disabled-textColor: ${Theme.dark_button_default_disabled_textColor};
    --m-dark-button-outlined-textColor: var(--m-theme-color);
    --m-dark-button-outlined-borderColor: var(--m-theme-color);
    --m-dark-button-outlined-hover-backgroundColor: var(--m-theme-color);
    --m-dark-button-outlined-hover-textColor: ${Theme.dark_button_outlined_hover_textColor};
    --m-dark-button-outlined-disabled-borderColor: ${Theme.dark_button_outlined_disabled_borderColor};
    --m-dark-button-outlined-disabled-textColor: ${Theme.dark_button_outlined_disabled_textColor};
    --m-dark-button-text-textColor: ${Theme.dark_button_text_textColor};
    --m-dark-button-text-hover-backgroundColor: ${Theme.dark_button_text_hover_backgroundColor};
    --m-dark-button-text-active-backgroundColor: var(--m-theme-color);
    --m-dark-button-filled-backgroundColor: var(--m-theme-color);
    --m-dark-button-filled-textColor: ${Theme.dark_button_filled_textColor};
    --m-dark-button-filled-disabled-backgroundColor: ${Theme.dark_button_filled_disabled_backgroundColor};
    --m-dark-button-filled-disabled-textColor: ${Theme.dark_button_filled_disabled_textColor};
    --m-dark-icon-button-default-backgroundColor: ${Theme.dark_icon_button_default_backgroundColor};
    --m-dark-icon-button-default-hover-boxShadowColor: ${Theme.dark_icon_button_default_hover_boxShadowColor};
    --m-dark-icon-button-default-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-dark-icon-button-default-active-backgroundColor: var(--m-theme-color);
    --m-dark-icon-button-default-active-textColor: ${Theme.dark_icon_button_default_active_textColor};
    --m-dark-icon-button-default-disabled-backgroundColor: ${Theme.dark_icon_button_default_disabled_backgroundColor};
    --m-dark-icon-button-default-disabled-textColor: ${Theme.dark_icon_button_default_disabled_textColor};
    --m-dark-icon-button-outlined-borderColor: var(--m-theme-color);
    --m-dark-icon-button-outlined-hover-backgroundColor: var(--m-theme-color);
    --m-dark-icon-button-outlined-hover-textColor: ${Theme.dark_icon_button_outlined_hover_textColor};
    --m-dark-icon-button-outlined-disabled-borderColor: ${Theme.dark_icon_button_outlined_disabled_borderColor};
    --m-dark-icon-button-outlined-disabled-textColor: ${Theme.dark_icon_button_outlined_disabled_textColor};
    --m-dark-icon-button-outlined-color: var(--m-theme-color);
    --m-dark-icon-button-text-hover-backgroundColor: ${Theme.dark_icon_button_text_hover_backgroundColor};
    --m-dark-icon-button-text-active-backgroundColor: var(--m-theme-color);
    --m-dark-icon-button-filled-backgroundColor: var(--m-theme-color);
    --m-dark-icon-button-filled-textColor: ${Theme.dark_icon_button_filled_textColor};
    --m-dark-icon-button-filled-disabled-backgroundColor: ${Theme.dark_icon_button_filled_disabled_backgroundColor};
    --m-dark-icon-button-filled-disabled-textColor: ${Theme.dark_icon_button_filled_disabled_textColor};
    --m-dark-fab-backgroundColor: ${Theme.dark_fab_backgroundColor};
    --m-dark-fab-hover-boxShadowColor: ${Theme.dark_fab_hover_boxShadowColor};
    --m-dark-fab-hover-backgroundColor: ${Theme.dark_fab_hover_backgroundColor};
    --m-dark-fab-active-backgroundColor: var(--m-theme-color);
    --m-dark-fab-active-color: ${Theme.dark_fab_active_color};
    --m-dark-fab-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-dark-fab-disabled-backgroundColor: ${Theme.dark_fab_disabled_backgroundColor};
    --m-dark-fab-disabled-textColor: ${Theme.dark_fab_disabled_textColor};
    --m-dark-checkbox-borderColor: ${Theme.dark_checkbox_borderColor};
    --m-dark-checkbox-checked-color: var(--m-theme-color);
    --m-dark-checkbox-checked-svg-color: ${Theme.dark_checkbox_checked_svg_color};
    --m-dark-checkbox-disabled-color: ${Theme.dark_checkbox_disabled_color};
    --m-dark-checkbox-checked-indeterminate-color: ${Theme.dark_checkbox_checked_indeterminate_color};
    --m-dark-radio-borderColor: ${Theme.dark_radio_borderColor};
    --m-dark-radio-checked-color: var(--m-theme-color);
    --m-dark-radio-disabled-color: ${Theme.dark_radio_disabled_color};
    --m-dark-slider-backgroundColor: ${Theme.dark_slider_backgroundColor};
    --m-dark-slider-slider-backgroundColor: var(--m-theme-color);
    --m-dark-slider-hiddenlabel-color: ${Theme.dark_slider_hiddenlabel_color};
    --m-dark-slider-label-color: ${Theme.dark_slider_label_color};
    --m-dark-segmented-button-backgroundColor: ${Theme.dark_segmented_button_backgroundColor};
    --m-dark-segmented-button-slider-backgroundColor: var(--m-theme-color);
    --m-dark-segmented-button-slider-hover-boxShadowColor: var(--m-translucency-theme-color);
    --m-dark-segmented-button-item-hover-backgroundColor: ${Theme.dark_segmented_button_item_hover_backgroundColor};
    --m-dark-segmented-button-item-active-backgroundColor: ${Theme.dark_segmented_button_item_active_backgroundColor};
    --m-dark-linear-progress-thumb-color: ${Theme.dark_linear_progress_thumb_color};
    --m-dark-linear-progress-value-color: var(--m-theme-color);
    --m-dark-circular-progress-fillColor: var(--m-theme-color);
    --m-dark-switch-trigger-backgroundColor: ${Theme.dark_switch_trigger_backgroundColor};
    --m-dark-switch-checked-backgroundColor: var(--m-theme-color);
    --m-dark-switch-checked-foreColor: var(--m-theme-color);
    --m-dark-switch-backgroundColor: ${Theme.dark_switch_backgroundColor};
    --m-dark-switch-disabled-backgroundColor: ${Theme.dark_switch_disabled_backgroundColor};
    --m-dark-switch-disabled-trigger-foreColor: ${Theme.dark_switch_disabled_trigger_foreColor};
    --m-dark-switch-disabled-trigger-backgroundColor: ${Theme.dark_switch_disabled_trigger_backgroundColor};
    --m-dark-input-backgroundColor: ${Theme.dark_input_backgroundColor};
    --m-dark-input-selection-backgroundColor: var(--m-selection-backgroundColor);
    --m-dark-input-selection-textColor: var(--m-selection-textColor);
    --m-dark-input-default-label-color: ${Theme.dark_input_default_label_color};
    --m-dark-input-focused-label-color: var(--m-theme-color);
    --m-dark-input-focused-icon-color: var(--m-theme-color);
    --m-dark-input-focused-outline-color: var(--m-translucency-theme-color);
    --m-dark-input-disabled-label-color: ${Theme.dark_input_disabled_label_color};
    --m-dark-input-disabled-backgroundColor: ${Theme.dark_input_disabled_backgroundColor};
    --m-dark-input-disabled-color: ${Theme.dark_input_disabled_color};
    --m-dark-input-readonly-color: ${Theme.dark_input_readonly_color};
    --m-dark-input-error-outline-color: ${Theme.dark_input_error_outline_color};
    --m-dark-input-error-label-color: ${Theme.dark_input_error_label_color};
    --m-dark-input-textColor:${Theme.dark_input_textColor};
    --m-dark-textarea-default-backgroundColor:${Theme.dark_textarea_default_backgroundColor};
    --m-dark-textarea-textColor:${Theme.dark_textarea_textColor};
    --m-dark-textarea-default-label-color: ${Theme.dark_textarea_default_label_color};
    --m-dark-textarea-focused-label-color: var(--m-theme-color);
    --m-dark-textarea-focused-outline-color: var(--m-translucency-theme-color);
    --m-dark-textarea-disabled-backgroundColor: ${Theme.dark_textarea_disabled_backgroundColor};
    --m-dark-textarea-disabled-label-color: ${Theme.dark_textarea_disabled_label_color};
    --m-dark-textarea-readonly-color: ${Theme.dark_textarea_readonly_color};
    --m-dark-textarea-error-outline-color: ${Theme.dark_textarea_error_outline_color};
    --m-dark-textarea-error-label-color: ${Theme.dark_textarea_error_label_color};
    --m-dark-picker-default-view-backgroundColor: ${Theme.dark_picker_default_view_backgroundColor};
    --m-dark-picker-default-label-color: ${Theme.dark_picker_default_label_color};
    --m-dark-picker-default-text-color: ${Theme.dark_picker_default_text_color};
    --m-dark-picker-default-icon-color: ${Theme.dark_picker_default_icon_color};
    --m-dark-picker-focused-label-color: var(--m-theme-color);
    --m-dark-picker-focused-outline-color: var(--m-translucency-theme-color);
    --m-dark-picker-default-options-backgroundColor: ${Theme.dark_picker_default_options_backgroundColor};
    --m-dark-picker-default-options-boxShadow-color: ${Theme.dark_picker_default_options_boxShadow_color};
    --m-dark-picker-item-backgroundColor: ${Theme.dark_picker_item_backgroundColor};
    --m-dark-picker-item-color: ${Theme.dark_picker_item_color};
    --m-dark-picker-item-selected-backgroundColor: var(--m-theme-color);
    --m-dark-picker-item-selected-color: ${Theme.dark_picker_item_selected_color};
    --m-dark-picker-item-disabled-backgroundColor: ${Theme.dark_picker_item_disabled_backgroundColor};
    --m-dark-picker-item-disabled-color: ${Theme.dark_picker_item_disabled_color};
    --m-dark-picker-disabled-view-backgroundColor: ${Theme.dark_picker_disabled_view_backgroundColor};
    --m-dark-picker-disabled-view-color: ${Theme.dark_picker_disabled_view_color};
}
:host::-webkit-scrollbar {
    display: none;
}
:host::selection {
    background-color: var(--m-selection-backgroundColor);
    color: var(--m-selection-textColor);
}
:host:not(:defined){
    display: none;
}
:host([theme=night]){
    --m-theme-color: var(--m-dark-theme-color);
    --m-translucency-theme-color: var(--m-dark-translucency-theme-color);
    --m-selection-backgroundColor: var(--m-translucency-theme-color);
    --m-selection-textColor: var(--m-dark-selection-textColor);
    --m-backgroundColor: var(--m-dark-backgroundColor);
    --m-textColor: var(--m-dark-textColor);
    --m-button-default-textColor: var(--m-dark-button-default-textColor);
    --m-button-default-backgroundColor: var(--m-dark-button-default-backgroundColor);
    --m-button-default-hover-boxShadowColor: var(--m-dark-button-default-hover-boxShadowColor);
    --m-button-default-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-button-default-active-backgroundColor: var(--m-theme-color);
    --m-button-default-active-textColor: var(--m-dark-button-default-active-textColor);
    --m-button-default-disabled-backgroundColor: var(--m-dark-button-default-disabled-backgroundColor);
    --m-button-default-disabled-textColor: var(--m-dark-button-default-disabled-textColor);
    --m-button-outlined-textColor: var(--m-theme-color);
    --m-button-outlined-borderColor: var(--m-theme-color);
    --m-button-outlined-hover-backgroundColor: var(--m-theme-color);
    --m-button-outlined-hover-textColor: var(--m-dark-button-outlined-hover-textColor);
    --m-button-outlined-disabled-borderColor: var(--m-dark-button-outlined-disabled-borderColor);
    --m-button-outlined-disabled-textColor: var(--m-dark-button-outlined-disabled-textColor);
    --m-button-text-textColor: var(--m-dark-button-text-textColor);
    --m-button-text-hover-backgroundColor: var(--m-dark-button-text-hover-backgroundColor);
    --m-button-text-active-backgroundColor: var(--m-theme-color);
    --m-button-filled-backgroundColor: var(--m-theme-color);
    --m-button-filled-textColor: var(--m-dark-button-filled-textColor);
    --m-button-filled-disabled-backgroundColor: var(--m-dark-button-filled-disabled-backgroundColor);
    --m-button-filled-disabled-textColor: var(--m-dark-button-filled-disabled-textColor);
    --m-icon-button-default-backgroundColor: var(--m-dark-icon-button-default-backgroundColor);
    --m-icon-button-default-hover-boxShadowColor: var(--m-dark-icon-button-default-hover-boxShadowColor);
    --m-icon-button-default-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-icon-button-default-active-backgroundColor: var(--m-theme-color);
    --m-icon-button-default-active-textColor: var(--m-dark-icon-button-default-active-textColor);
    --m-icon-button-default-disabled-backgroundColor: var(--m-dark-icon-button-default-disabled-backgroundColor);
    --m-icon-button-default-disabled-textColor: var(--m-dark-icon-button-default-disabled-textColor);
    --m-icon-button-outlined-borderColor: var(--m-theme-color);
    --m-icon-button-outlined-hover-backgroundColor: var(--m-theme-color);
    --m-icon-button-outlined-hover-textColor: var(--m-dark-icon-button-outlined-hover-textColor);
    --m-icon-button-outlined-disabled-borderColor: var(--m-dark-icon-button-outlined-disabled-borderColor);
    --m-icon-button-outlined-disabled-textColor: var(--m-dark-icon-button-outlined-disabled-textColor);
    --m-icon-button-outlined-color: var(--m-theme-color);
    --m-icon-button-text-hover-backgroundColor: var(--m-dark-icon-button-text-hover-backgroundColor);
    --m-icon-button-text-active-backgroundColor: var(--m-theme-color);
    --m-icon-button-filled-backgroundColor: var(--m-theme-color);
    --m-icon-button-filled-textColor: var(--m-dark-icon-button-filled-textColor);
    --m-icon-button-filled-disabled-backgroundColor: var(--m-dark-icon-button-filled-disabled-backgroundColor);
    --m-icon-button-filled-disabled-textColor: var(--m-dark-icon-button-filled-disabled-textColor);
    --m-fab-backgroundColor: var(--m-dark-fab-backgroundColor);
    --m-fab-hover-boxShadowColor: var(--m-dark-fab-hover-boxShadowColor);
    --m-fab-hover-backgroundColor: var(--m-dark-fab-hover-backgroundColor);
    --m-fab-active-backgroundColor: var(--m-theme-color);
    --m-fab-active-color: var(--m-dark-fab-active-color);
    --m-fab-active-boxShadowColor: var(--m-translucency-theme-color);
    --m-fab-disabled-backgroundColor: var(--m-dark-fab-disabled-backgroundColor);
    --m-fab-disabled-textColor: var(--m-dark-fab-disabled-textColor);
    --m-checkbox-borderColor: var(--m-dark-checkbox-borderColor);
    --m-checkbox-checked-color: var(--m-theme-color);
    --m-checkbox-checked-svg-color: var(--m-dark-checkbox-checked-svg-color);
    --m-checkbox-disabled-color: var(--m-dark-checkbox-disabled-color);
    --m-checkbox-checked-indeterminate-color: var(--m-dark-checkbox-checked-indeterminate-color);
    --m-radio-borderColor: var(--m-dark-radio-borderColor);
    --m-radio-checked-color: var(--m-theme-color);
    --m-radio-disabled-color: var(--m-dark-radio-disabled-color);
    --m-slider-backgroundColor: var(--m-dark-slider-backgroundColor);
    --m-slider-slider-backgroundColor: var(--m-theme-color);
    --m-slider-hiddenlabel-color: var(--m-dark-slider-hiddenlabel-color);
    --m-slider-label-color: var(--m-dark-slider-label-color);
    --m-segmented-button-backgroundColor: var(--m-dark-segmented-button-backgroundColor);
    --m-segmented-button-slider-backgroundColor: var(--m-theme-color);
    --m-segmented-button-slider-hover-boxShadowColor: var(--m-translucency-theme-color);
    --m-segmented-button-item-hover-backgroundColor: var(--m-dark-segmented-button-item-hover-backgroundColor);
    --m-segmented-button-item-active-backgroundColor: var(--m-dark-segmented-button-item-active-backgroundColor);
    --m-linear-progress-thumb-color: var(--m-dark-linear-progress-thumb-color);
    --m-linear-progress-value-color: var(--m-theme-color);
    --m-circular-progress-fillColor: var(--m-theme-color);
    --m-switch-trigger-backgroundColor: var(--m-dark-switch-trigger-backgroundColor);
    --m-switch-checked-backgroundColor: var(--m-theme-color);
    --m-switch-checked-foreColor: var(--m-theme-color);
    --m-switch-backgroundColor: var(--m-dark-switch-backgroundColor);
    --m-switch-disabled-backgroundColor: var(--m-dark-switch-disabled-backgroundColor);
    --m-switch-disabled-trigger-foreColor: var(--m-dark-switch-disabled-trigger-foreColor);
    --m-switch-disabled-trigger-backgroundColor: var(--m-dark-switch-disabled-trigger-backgroundColor);
    --m-input-backgroundColor: var(--m-dark-input-backgroundColor);
    --m-input-selection-backgroundColor: var(--m-selection-backgroundColor);
    --m-input-selection-textColor: var(--m-selection-textColor);
    --m-input-default-label-color: var(--m-dark-input-default-label-color);
    --m-input-focused-label-color: var(--m-theme-color);
    --m-input-focused-icon-color: var(--m-theme-color);
    --m-input-focused-outline-color: var(--m-translucency-theme-color);
    --m-input-disabled-label-color: var(--m-dark-input-disabled-label-color);
    --m-input-disabled-backgroundColor: var(--m-dark-input-disabled-backgroundColor);
    --m-input-disabled-color: var(--m-dark-input-disabled-color);
    --m-input-readonly-color: var(--m-dark-input-readonly-color);
    --m-input-error-outline-color: var(--m-dark-input-error-outline-color);
    --m-input-error-label-color: var(--m-dark-input-error-label-color);
    --m-input-textColor: var(--m-dark-input-textColor);
    --m-textarea-default-backgroundColor: var(--m-dark-textarea-default-backgroundColor);
    --m-textarea-textColor: var(--m-dark-textarea-textColor);
    --m-textarea-default-label-color: var(--m-dark-textarea-default-label-color);
    --m-textarea-focused-label-color: var(--m-theme-color);
    --m-textarea-focused-outline-color: var(--m-translucency-theme-color);
    --m-textarea-disabled-backgroundColor: var(--m-dark-textarea-disabled-backgroundColor);
    --m-textarea-disabled-label-color: var(--m-dark-textarea-disabled-label-color);
    --m-textarea-readonly-color: var(--m-dark-textarea-readonly-color);
    --m-textarea-error-outline-color: var(--m-dark-textarea-error-outline-color);
    --m-textarea-error-label-color: var(--m-dark-textarea-error-label-color);
    --m-picker-default-view-backgroundColor: var(--m-dark-picker-default-view-backgroundColor);
    --m-picker-default-label-color: var(--m-dark-picker-default-label-color);
    --m-picker-default-text-color: var(--m-dark-picker-default-text-color);
    --m-picker-default-icon-color: var(--m-dark-picker-default-icon-color);
    --m-picker-focused-label-color: var(--m-theme-color);
    --m-picker-focused-outline-color: var(--m-translucency-theme-color);
    --m-picker-default-options-backgroundColor: var(--m-dark-picker-default-options-backgroundColor);
    --m-picker-default-options-boxShadow-color: var(--m-dark-picker-default-options-boxShadow-color);
    --m-picker-item-backgroundColor: var(--m-dark-picker-item-backgroundColor);
    --m-picker-item-color: var(--m-dark-picker-item-color);
    --m-picker-item-selected-backgroundColor: var(--m-theme-color);
    --m-picker-item-selected-color: var(--m-dark-picker-item-selected-color);
    --m-picker-item-disabled-backgroundColor: var(--m-dark-picker-item-disabled-backgroundColor);
    --m-picker-item-disabled-color: var(--m-dark-picker-item-disabled-color);
    --m-picker-disabled-view-backgroundColor: var(--m-dark-picker-disabled-view-backgroundColor);
    --m-picker-disabled-view-color: var(--m-dark-picker-disabled-view-color);
}
`
const template = `<slot></slot>`
const props: Props = {
    theme: "light"
}
type Props = {
    theme: "light" | "night" | "auto"
}

export class Page extends useElement({
    name,
    style,
    template,
    props,
    syncProps: ["theme"]
}) { }

Page.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>
    }
}