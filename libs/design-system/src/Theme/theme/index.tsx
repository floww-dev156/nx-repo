import { avatar } from './avatar.theme'
import { badgeTheme } from './badge.theme'
import { buttonTheme } from './button.theme'
import { card } from './card.theme'
import { checkboxGroupTheme } from './checkboxGroup.theme'
import { closeIconButtonTheme } from './closeIconButton.theme'
import { comboBoxTheme } from './combobox.theme'
import { commonDateFieldTriggerTheme } from './commonDateFieldTrigger.theme'
import { datePickerTheme } from './datePicker.theme'
import { dateSegmentTheme } from './dateSegment.theme'
import { dateTimePickerTheme } from './dateTimePicker.theme'
import { focusRingTheme } from './focusRing.theme'
import { hintTheme } from './hint.theme'
import { labelTheme } from './label.theme'
import { listBoxTheme } from './listBox.theme'
import { filledCheckboxGroupTheme } from './filledCheckbox.theme'
import { optionsSelectorTheme } from './optionsSelector.theme'
import { pickerTheme } from './picker.theme'
import { popoverTheme } from './popover.theme'
import { radioGroupTheme } from './radioGroup.theme'
import { tabsTheme } from './tabs.theme'
import { tagTheme } from './tag.theme'
import { textBaseField } from './textBaseField.theme'
import { timePickerTheme } from './timePicker.theme'
import { toggleSwitch } from './toggleSwitch.theme'
import { multiOptionsSelectPickerTheme } from './multiOptionsSelectPicker.theme'
import { alertCardTheme } from './alertCard.theme'
import { inputWithPickerTheme } from './InputWithPicker.theme'

export const defaultTheme = {
   light: {
      radioGroup: radioGroupTheme.light,
      checkboxGroup: checkboxGroupTheme.light,
      filledCheckbox: filledCheckboxGroupTheme.light,
      popover: popoverTheme.light,
      hint: hintTheme.light,
      label: labelTheme.light,
      commonDateFieldTrigger: commonDateFieldTriggerTheme.light,
      dateSegment: dateSegmentTheme.light,
      datePicker: datePickerTheme.light,
      focusRing: focusRingTheme.light,
      textBaseField: textBaseField.light,
      listBox: listBoxTheme.light,
      optionsSelector: optionsSelectorTheme.light,
      picker: pickerTheme.light,
      tag: tagTheme.light,
      button: buttonTheme.light,
      closeIconButton: closeIconButtonTheme.light,
      avatar: avatar.light,
      comboBox: comboBoxTheme.light,
      dateTimePicker: dateTimePickerTheme.light,
      card: card.light,
      badge: badgeTheme.light,
      tabs: tabsTheme.light,
      timePicker: timePickerTheme.light,
      toggleSwitch: toggleSwitch.light,
      multiOptionsSelectPicker: multiOptionsSelectPickerTheme.light,
      alertCard: alertCardTheme.light,
      inputWithPicker: inputWithPickerTheme.light
   },

   dark: {
      radioGroup: radioGroupTheme.dark,
      popover: popoverTheme.dark,
      hint: hintTheme.dark,
      label: labelTheme.dark,
      commonDateFieldTrigger: commonDateFieldTriggerTheme.dark,
      dateSegment: dateSegmentTheme.dark,
      datePicker: datePickerTheme.dark,
      focusRing: focusRingTheme.dark,
      textBaseField: textBaseField.dark,
      listBox: listBoxTheme.dark,
      optionsSelector: optionsSelectorTheme.dark,
      picker: pickerTheme.dark,
      tag: tagTheme.dark,
      button: buttonTheme.dark,
      comboBox: comboBoxTheme.dark,
      dateTimePicker: dateTimePickerTheme.dark,
      card: card.dark,
      badge: badgeTheme.dark,
      tabs: tabsTheme.dark,
      toggleSwitch: toggleSwitch.dark,
      multiOptionsSelectPicker: multiOptionsSelectPickerTheme.dark,
      alertCard: alertCardTheme.dark,
      inputWithPicker: inputWithPickerTheme.dark
   },

   size: {
      tag: tagTheme.size
   }
}
