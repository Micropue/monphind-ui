const enum Theme {
    theme_color = "#2EA2F9",
    translucency_theme_color = "#2ea1f9d6",
    selection_backgroundColor = "#2ea1f9d6",
    selection_textColor = "white",
    backgroundColor = "#f6f6f6",
    textColor = "black",
    button_default_textColor = "black",
    button_default_backgroundColor = "white",
    button_default_hover_boxShadowColor = "rgba(70,70,70,0.237)",
    button_default_active_boxShadowColor = "#2ea1f9d6",
    button_default_active_backgroundColor = "#2EA2F9",
    button_default_active_textColor = "white",
    button_default_disabled_backgroundColor = "#EFEFEF",
    button_default_disabled_textColor = "#BABABA",
    button_outlined_textColor = "#2EA2F9",
    button_outlined_borderColor = "#2EA2F9",
    button_outlined_hover_backgroundColor = "#2EA2F9",
    button_outlined_hover_textColor = "white",
    button_outlined_disabled_borderColor = "#EFEFEF",
    button_outlined_disabled_textColor = "#BABABA",
    button_text_textColor = "black",
    button_text_hover_backgroundColor = "#EFEFEF",
    button_text_active_backgroundColor = "#2EA2F9",
    button_filled_backgroundColor = "#2EA2F9",
    button_filled_textColor = "white",
    button_filled_disabled_backgroundColor = "#EFEFEF",
    button_filled_disabled_textColor = "#BABABA",
    icon_button_default_backgroundColor = "white",
    icon_button_default_hover_boxShadowColor = "rgba(70,70,70,0.237)",
    icon_button_default_active_boxShadowColor = "#2ea1f9d6",
    icon_button_default_active_backgroundColor = "#2EA2F9",
    icon_button_default_active_textColor = "white",
    icon_button_default_disabled_backgroundColor = "#EFEFEF",
    icon_button_default_disabled_textColor = "#BABABA",
    icon_button_outlined_borderColor = "#2EA2F9",
    icon_button_outlined_hover_backgroundColor = "#2EA2F9",
    icon_button_outlined_hover_textColor = "white",
    icon_button_outlined_disabled_borderColor = "#EFEFEF",
    icon_button_outlined_disabled_textColor = "#BABABA",
    icon_button_outlined_color = "#2EA2F9",
    icon_button_text_hover_backgroundColor = "#EFEFEF",
    icon_button_text_active_backgroundColor = "#2EA2F9",
    icon_button_filled_backgroundColor = "#2EA2F9",
    icon_button_filled_textColor = "white",
    icon_button_filled_disabled_backgroundColor = "#EFEFEF",
    icon_button_filled_disabled_textColor = "#BABABA",
    fab_backgroundColor = "white",
    fab_hover_boxShadowColor = "rgba(70,70,70,0.237)",
    fab_hover_backgroundColor = "rgb(247,247,247)",
    fab_active_backgroundColor = "#2EA2F9",
    fab_active_color = "white",
    fab_active_boxShadowColor = "#2ea1f9d6",
    fab_disabled_backgroundColor = "#EFEFEF",
    fab_disabled_textColor = "#BABABA",
    checkbox_borderColor = "black",
    checkbox_checked_color = "#2EA2F9",
    checkbox_checked_svg_color = "white",
    checkbox_disabled_color = "#BABABA",
    checkbox_checked_indeterminate_color = "rgb(131,130,130)",
    radio_borderColor = "black",
    radio_checked_color = "#2EA2F9",
    radio_disabled_color = "#BABABA",
    slider_backgroundColor = "#EFEFEF",
    slider_slider_backgroundColor = "#2EA2F9",
    slider_hiddenlabel_color = "gray",
    slider_label_color = "rgb(255,255,255)",
    segmented_button_backgroundColor = "white",
    segmented_button_slider_backgroundColor = "#2EA2F9",
    segmented_button_slider_hover_boxShadowColor = "#2ea1f9d6",
    segmented_button_item_hover_backgroundColor = "#F2F2F2",
    segmented_button_item_active_backgroundColor = "#e2e2e2",
    linear_progress_thumb_color = "#EFEFEF",
    linear_progress_value_color = "#2EA2F9",
    circular_progress_fillColor = "#2EA2F9",
    switch_trigger_backgroundColor = "white",
    switch_checked_backgroundColor = "#2EA2F9",
    switch_checked_foreColor = "#2EA2F9",
    switch_backgroundColor = "#EFEFEF",
    switch_disabled_backgroundColor = "#EBEBEB",
    switch_disabled_trigger_foreColor = "white",
    switch_disabled_trigger_backgroundColor = "#BABABA",
    input_backgroundColor = "white",
    input_selection_backgroundColor = "var(selection_backgroundColor)",
    input_selection_textColor = "var(selection_textColor)",
    input_default_label_color = "rgb(178,178,178)",
    input_focused_label_color = "#2EA2F9",
    input_focused_icon_color = "#2EA2F9",
    input_focused_outline_color = "#2ea1f9d6",
    input_disabled_label_color = "rgb(178,178,178)",
    input_disabled_backgroundColor = "#EFEFEF",
    input_disabled_color = "rgb(178,178,178)",
    input_readonly_color = "rgb(178,178,178)",
    input_error_outline_color = "rgba(255,0,0,0.507)",
    input_error_label_color = "rgba(255,0,0,0.507)",
    input_textColor = 'black',
    textarea_default_backgroundColor = "white",
    textarea_textColor = "black",
    textarea_default_label_color = "rgb(178,178,178)",
    textarea_focused_label_color = "#2EA2F9",
    textarea_focused_outline_color = "#2ea1f9d6",
    textarea_disabled_backgroundColor = "#EFEFEF",
    textarea_disabled_label_color = "rgb(178,178,178)",
    textarea_readonly_color = "rgb(178,178,178)",
    textarea_error_outline_color = "rgba(255,0,0,0.507)",
    textarea_error_label_color = "rgba(255,0,0,0.507)",
    picker_default_view_backgroundColor = "white",
    picker_default_label_color = "rgb(178,178,178)",
    picker_default_text_color = "black",
    picker_default_icon_color = "black",
    picker_focused_label_color = "#2EA2F9",
    picker_focused_outline_color = "#2ea1f9d6",
    picker_default_options_backgroundColor = "white",
    picker_default_options_boxShadow_color = "rgba(89,89,89,0.122)",
    picker_item_backgroundColor = "white",
    picker_item_color = "black",
    picker_item_selected_backgroundColor = "#2EA2F9",
    picker_item_selected_color = "white",
    picker_item_disabled_backgroundColor = "white",
    picker_item_disabled_color = "gray",
    picker_disabled_view_backgroundColor = "#EFEFEF",
    picker_disabled_view_color = "#BABABA",
    /* dark theme */
    dark_theme_color = "#0076d1",
    dark_translucency_theme_color = "#0069b9d6",
    dark_selection_backgroundColor = "#0069b9d6",
    dark_selection_textColor = "white",
    dark_backgroundColor = "#171717",
    dark_textColor = "rgb(255,255,255)",
    dark_button_default_textColor = "rgb(255,255,255)",
    dark_button_default_backgroundColor = "rgb(0,0,0)",
    dark_button_default_hover_boxShadowColor = "rgba(70,70,70,0)",
    dark_button_default_active_boxShadowColor = "#0069b9d6",
    dark_button_default_active_backgroundColor = "#0076d1",
    dark_button_default_active_textColor = "white",
    dark_button_default_disabled_backgroundColor = "#242424",
    dark_button_default_disabled_textColor = "#BABABA",
    dark_button_outlined_textColor = "#0076d1",
    dark_button_outlined_borderColor = "#0076d1",
    dark_button_outlined_hover_backgroundColor = "#0076d1",
    dark_button_outlined_hover_textColor = "white",
    dark_button_outlined_disabled_borderColor = "#242424",
    dark_button_outlined_disabled_textColor = "#242424",
    dark_button_text_textColor = "rgb(255,255,255)",
    dark_button_text_hover_backgroundColor = "#1b1b1b",
    dark_button_text_active_backgroundColor = "#0076d1",
    dark_button_filled_backgroundColor = "#0076d1",
    dark_button_filled_textColor = "white",
    dark_button_filled_disabled_backgroundColor = "#242424",
    dark_button_filled_disabled_textColor = "#BABABA",
    dark_icon_button_default_backgroundColor = "rgb(0,0,0)",
    dark_icon_button_default_hover_boxShadowColor = "rgba(70,70,70,0)",
    dark_icon_button_default_active_boxShadowColor = "#0069b9d6",
    dark_icon_button_default_active_backgroundColor = "#0076d1",
    dark_icon_button_default_active_textColor = "white",
    dark_icon_button_default_disabled_backgroundColor = "#242424",
    dark_icon_button_default_disabled_textColor = "#BABABA",
    dark_icon_button_outlined_borderColor = "#0076d1",
    dark_icon_button_outlined_hover_backgroundColor = "#0076d1",
    dark_icon_button_outlined_hover_textColor = "white",
    dark_icon_button_outlined_disabled_borderColor = "#242424",
    dark_icon_button_outlined_disabled_textColor = "#242424",
    dark_icon_button_outlined_color = "#0076d1",
    dark_icon_button_text_hover_backgroundColor = "#1b1b1b",
    dark_icon_button_text_active_backgroundColor = "#0076d1",
    dark_icon_button_filled_backgroundColor = "#0076d1",
    dark_icon_button_filled_textColor = "white",
    dark_icon_button_filled_disabled_backgroundColor = "#242424",
    dark_icon_button_filled_disabled_textColor = "#BABABA",
    dark_fab_backgroundColor = "rgb(0,0,0)",
    dark_fab_hover_boxShadowColor = "rgba(70,70,70,0)",
    dark_fab_hover_backgroundColor = "rgb(0,0,0)",
    dark_fab_active_backgroundColor = "#0076d1",
    dark_fab_active_color = "white",
    dark_fab_active_boxShadowColor = "#0069b9d6",
    dark_fab_disabled_backgroundColor = "#242424",
    dark_fab_disabled_textColor = "#BABABA",
    dark_checkbox_borderColor = "rgb(255,255,255)",
    dark_checkbox_checked_color = "#0076d1",
    dark_checkbox_checked_svg_color = "white",
    dark_checkbox_disabled_color = "#242424",
    dark_checkbox_checked_indeterminate_color = "rgb(87,87,87)",
    dark_radio_borderColor = "rgb(255,255,255)",
    dark_radio_checked_color = "#0076d1",
    dark_radio_disabled_color = "#BABABA",
    dark_slider_backgroundColor = "#000000",
    dark_slider_slider_backgroundColor = "#0076d1",
    dark_slider_hiddenlabel_color = "gray",
    dark_slider_label_color = "rgb(255,255,255)",
    dark_segmented_button_backgroundColor = "rgb(0,0,0)",
    dark_segmented_button_slider_backgroundColor = "#0076d1",
    dark_segmented_button_slider_hover_boxShadowColor = "#0069b9d6",
    dark_segmented_button_item_hover_backgroundColor = "#111111",
    dark_segmented_button_item_active_backgroundColor = "#1a1a1a",
    dark_linear_progress_thumb_color = "#000000",
    dark_linear_progress_value_color = "#0076d1",
    dark_circular_progress_fillColor = "#0076d1",
    dark_switch_trigger_backgroundColor = "rgb(255,255,255)",
    dark_switch_checked_backgroundColor = "#0076d1",
    dark_switch_checked_foreColor = "#0076d1",
    dark_switch_backgroundColor = "#3b3b3b",
    dark_switch_disabled_backgroundColor = "#242424",
    dark_switch_disabled_trigger_foreColor = "white",
    dark_switch_disabled_trigger_backgroundColor = "#7c7c7c",
    dark_input_backgroundColor = "rgb(0,0,0)",
    dark_input_selection_backgroundColor = "var(selection_backgroundColor)",
    dark_input_selection_textColor = "var(selection_textColor)",
    dark_input_default_label_color = "rgb(178,178,178)",
    dark_input_focused_label_color = "#0076d1",
    dark_input_focused_icon_color = "#0076d1",
    dark_input_focused_outline_color = "#0069b9d6",
    dark_input_disabled_label_color = "rgb(178,178,178)",
    dark_input_disabled_backgroundColor = "#121212",
    dark_input_disabled_color = "rgb(178,178,178)",
    dark_input_readonly_color = "rgb(178,178,178)",
    dark_input_error_outline_color = "rgba(255,0,0,0.507)",
    dark_input_error_label_color = "rgba(255,0,0,0.507)",
    dark_input_textColor = "white",
    dark_textarea_default_backgroundColor = "rgb(0,0,0)",
    dark_textarea_textColor = "white",
    dark_textarea_default_label_color = "rgb(178,178,178)",
    dark_textarea_focused_label_color = "#0076d1",
    dark_textarea_focused_outline_color = "#0069b9d6",
    dark_textarea_disabled_backgroundColor = "#121212",
    dark_textarea_disabled_label_color = "rgb(178,178,178)",
    dark_textarea_readonly_color = "rgb(178,178,178)",
    dark_textarea_error_outline_color = "rgba(255,0,0,0.507)",
    dark_textarea_error_label_color = "rgba(255,0,0,0.507)",
    dark_picker_default_view_backgroundColor = "rgb(0,0,0)",
    dark_picker_default_label_color = "rgb(178,178,178)",
    dark_picker_default_text_color = "rgb(255,255,255)",
    dark_picker_default_icon_color = "rgb(255,255,255)",
    dark_picker_focused_label_color = "#0076d1",
    dark_picker_focused_outline_color = "#0069b9d6",
    dark_picker_default_options_backgroundColor = "rgb(0,0,0)",
    dark_picker_default_options_boxShadow_color = "rgba(89,89,89,0)",
    dark_picker_item_backgroundColor = "rgb(0,0,0)",
    dark_picker_item_color = "rgb(255,255,255)",
    dark_picker_item_selected_backgroundColor = "#0076d1",
    dark_picker_item_selected_color = "white",
    dark_picker_item_disabled_backgroundColor = "#121212",
    dark_picker_item_disabled_color = "gray",
    dark_picker_disabled_view_backgroundColor = "#121212",
    dark_picker_disabled_view_color = "#BABABA",
}

export default Theme